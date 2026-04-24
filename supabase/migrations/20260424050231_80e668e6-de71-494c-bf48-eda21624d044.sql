-- Replace permissive policy with validated constraints
DROP POLICY IF EXISTS "Anyone can submit a contact form" ON public.contact_submissions;

CREATE POLICY "Anyone can submit a valid contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 120
  AND length(trim(email)) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (phone IS NULL OR length(phone) <= 40)
  AND (product IS NULL OR length(product) <= 80)
  AND (message IS NULL OR length(message) <= 4000)
);
