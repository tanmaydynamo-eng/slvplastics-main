import { useState } from "react";
import { Mail, Phone, MapPin, User, Building2, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const contactRows = [
  { icon: User, label: "Contact Person", val: "G. S. Kumar" },
  { icon: Phone, label: "Mobile / WhatsApp", val: "+91 98450 24330", href: "tel:+919845024330" },
  { icon: Mail, label: "Email", val: "slvplastics@yahoo.in", href: "mailto:slvplastics@yahoo.in" },
  { icon: Building2, label: "Corporate Office", val: "#6, Near Anjaneya Temple, Peenya Industrial Area, Bengaluru – 560 058" },
  { icon: MapPin, label: "Manufacturing Unit", val: "Plot #170, 1st Stage, Sompura Industrial Area, Dabaspet, Nelamangala Taluk, Bengaluru Rural – 562 123" },
];

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120, "Name too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40, "Phone too long").optional().or(z.literal("")),
  product: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(4000, "Message too long").optional().or(z.literal("")),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "Slatted Mats",
    message: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.errors[0]?.message ?? "Please check the form";
      toast.error(first);
      return;
    }

    // Construct email content
    const subject = encodeURIComponent(`New Website Enquiry: ${form.product}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Product Interest: ${form.product}\n\n` +
      `Message:\n${form.message}`
    );

    // Open user's email client
    window.location.href = `mailto:slvplastics@yahoo.in?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    setForm({ name: "", email: "", phone: "", product: "Slatted Mats", message: "" });
  };

  return (
    <section id="contact" className="bg-deep-gradient text-white px-6 lg:px-[6%] py-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-[2.5px] uppercase mb-3 text-primary-glow">Get in Touch</div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-4 text-white">
            Request a Quote or Sample
          </h2>
          <p className="text-lg font-light text-white/70">
            Tell us about your requirement — bulk orders, custom colors, or product enquiries — and we'll reply within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            {contactRows.map(({ icon: Icon, label, val, href }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary-glow" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50 mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="text-base text-white hover:text-primary-glow transition-colors">{val}</a>
                  ) : (
                    <div className="text-base text-white leading-relaxed">{val}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-4 p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-sm text-white/85 leading-relaxed">
                <strong className="text-primary-glow">Bulk orders welcome.</strong> Custom colors and sizes available
                for quantities of 100+ units. Pan-India shipping.
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/[0.06] border border-white/10 rounded-2xl p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="Name" name="name" placeholder="Your name" value={form.name} onChange={update("name")} required />
              <Field label="Phone" name="phone" placeholder="+91" value={form.phone} onChange={update("phone")} />
            </div>
            <Field label="Email" name="email" type="email" placeholder="you@farm.com" value={form.email} onChange={update("email")} required />
            <div className="mb-4">
              <label className="block text-xs uppercase tracking-wider text-white/55 mb-2">Product Interest</label>
              <select
                name="product"
                value={form.product}
                onChange={update("product")}
                className="w-full bg-white/[0.08] border border-white/15 rounded-lg text-white text-[15px] px-4 py-3 outline-none focus:border-primary-glow/60"
              >
                <option className="bg-primary-deep">Slatted Mats</option>
                <option className="bg-primary-deep">Drinker Bowls</option>
                <option className="bg-primary-deep">Goat Feeders</option>
                <option className="bg-primary-deep">Hydroponic Trays</option>
                <option className="bg-primary-deep">Custom / Bulk Plastic Products</option>
                <option className="bg-primary-deep">Multiple / Not sure</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-xs uppercase tracking-wider text-white/55 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Quantity, farm size, location…"
                className="w-full bg-white/[0.08] border border-white/15 rounded-lg text-white text-[15px] px-4 py-3 outline-none focus:border-primary-glow/60 resize-y"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-destructive text-destructive-foreground font-bold text-[15px] py-4 rounded-lg hover:bg-destructive/90 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_hsl(var(--destructive)/0.6)] tracking-[0.5px] uppercase disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending…
                </>
              ) : (
                "Send Inquiry"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Field = ({ label, name, type = "text", placeholder, value, onChange, required }: FieldProps) => (
  <div className="mb-4">
    <label className="block text-xs uppercase tracking-wider text-white/55 mb-2">
      {label}{required && <span className="text-primary-glow ml-1">*</span>}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-white/[0.08] border border-white/15 rounded-lg text-white text-[15px] px-4 py-3 outline-none focus:border-primary-glow/60 placeholder:text-white/30"
    />
  </div>
);

export default Contact;
