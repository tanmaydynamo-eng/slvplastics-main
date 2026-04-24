// Send contact enquiry email to SLV Plastics owner via Resend
// Triggered by the contact form on the website.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const OWNER_EMAIL = "slvplastics@yahoo.in";
const OWNER_NAME = "SLV Plastics";

interface EnquiryBody {
  name?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const validate = (b: EnquiryBody) => {
  const errors: string[] = [];
  const name = (b.name ?? "").trim();
  const email = (b.email ?? "").trim();
  const phone = (b.phone ?? "").trim();
  const product = (b.product ?? "").trim();
  const message = (b.message ?? "").trim();

  if (name.length < 1 || name.length > 120) errors.push("Invalid name");
  if (
    email.length < 3 ||
    email.length > 255 ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
  )
    errors.push("Invalid email");
  if (phone.length > 40) errors.push("Phone too long");
  if (product.length > 80) errors.push("Product too long");
  if (message.length > 4000) errors.push("Message too long");

  return { errors, clean: { name, email, phone, product, message } };
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let body: EnquiryBody;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { errors, clean } = validate(body);
  if (errors.length) {
    return new Response(JSON.stringify({ error: errors.join(", ") }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Log to database (best-effort; don't fail the request if logging fails)
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    await supabase.from("contact_submissions").insert({
      name: clean.name,
      email: clean.email,
      phone: clean.phone || null,
      product: clean.product || null,
      message: clean.message || null,
    });
  } catch (e) {
    console.error("Failed to log submission", e);
  }

  // Send email via Resend
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    return new Response(
      JSON.stringify({
        error:
          "Email service not configured. Submission was logged but no email was sent.",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  const subject = `New website enquiry — ${clean.name}${clean.product ? ` (${clean.product})` : ""}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color:#1a1a1a;">
      <h2 style="margin:0 0 8px; color:#0f6b4f;">New enquiry from slvplastics.lovable.app</h2>
      <p style="margin:0 0 24px; color:#666; font-size:13px;">Submitted ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>

      <table style="width:100%; border-collapse:collapse; font-size:14px;">
        <tr><td style="padding:8px 0; color:#666; width:140px;">Name</td><td style="padding:8px 0; font-weight:600;">${escapeHtml(clean.name)}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(clean.email)}" style="color:#0f6b4f;">${escapeHtml(clean.email)}</a></td></tr>
        ${clean.phone ? `<tr><td style="padding:8px 0; color:#666;">Phone</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(clean.phone)}" style="color:#0f6b4f;">${escapeHtml(clean.phone)}</a></td></tr>` : ""}
        ${clean.product ? `<tr><td style="padding:8px 0; color:#666;">Product</td><td style="padding:8px 0;">${escapeHtml(clean.product)}</td></tr>` : ""}
      </table>

      ${
        clean.message
          ? `<div style="margin-top:24px; padding:16px; background:#f5f5f5; border-left:3px solid #0f6b4f; border-radius:4px;">
              <div style="color:#666; font-size:12px; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">Message</div>
              <div style="white-space:pre-wrap; font-size:14px; line-height:1.6;">${escapeHtml(clean.message)}</div>
            </div>`
          : ""
      }

      <p style="margin-top:32px; color:#999; font-size:12px;">Reply directly to this email to respond to ${escapeHtml(clean.name)}.</p>
    </div>
  `;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "SLV Plastics Website <onboarding@resend.dev>",
      to: [OWNER_EMAIL],
      reply_to: clean.email,
      subject,
      html,
    }),
  });

  if (!resendRes.ok) {
    const errText = await resendRes.text();
    console.error("Resend error:", resendRes.status, errText);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: errText }),
      {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
