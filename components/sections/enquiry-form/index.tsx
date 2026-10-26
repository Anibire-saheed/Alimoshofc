"use client";
import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { saveEnquiry } from "@/lib/store";
const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .refine(
      (v) => !v || /^[+()\d\s-]{7,20}$/.test(v),
      "Enter a valid phone number.",
    ),
  interest: z.string().min(1, "Choose an option."),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(2000, "Please use 2,000 characters or fewer."),
});
export function EnquiryForm({
  title = "LET’S WORK TOGETHER",
  subject,
  options = ["General enquiry"],
}: {
  title?: string;
  subject: string;
  options?: string[];
}) {
  const formId = useId();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draft, setDraft] = useState<z.infer<typeof schema> | null>(null);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const result = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!result.success) {
      setDraft(null);
      setErrors(
        Object.fromEntries(
          result.error.issues.map((i) => [String(i.path[0]), i.message]),
        ),
      );
      toast.error("Please check the highlighted fields.");
      const first = form.elements.namedItem(
        String(result.error.issues[0].path[0]),
      );
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setErrors({});
    setDraft(result.data);
    dispatch(
      saveEnquiry({
        name: result.data.name,
        email: result.data.email,
        message:
          subject + " — " + result.data.interest + "\n" + result.data.message,
      }),
    );
    toast.success("Your enquiry is ready to send by email.");
  }
  return (
    <section id="enquire" className="mx-auto max-w-[980px] px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="section-title">{title}</h2>
          <p className="mt-5 leading-7">
            Tell us how you would like to get involved. Prepare your enquiry
            here, then send it to the club using your email app.
          </p>
          <p className="mt-5 text-sm text-neutral-500">
            Your draft is saved for this session. It is not submitted until you
            send the email.
          </p>
        </div>
        <form
          noValidate
          onSubmit={submit}
          onChange={() => setDraft(null)}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <label
                  className="mb-2 block text-sm capitalize"
                  htmlFor={formId + field}
                >
                  {field}
                  {field === "phone" ? " (optional)" : " *"}
                </label>
                <Input
                  id={formId + field}
                  name={field}
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                        ? "tel"
                        : "text"
                  }
                  autoComplete={field === "phone" ? "tel" : field}
                  aria-invalid={!!errors[field]}
                  aria-describedby={
                    errors[field] ? formId + field + "-error" : undefined
                  }
                />
                {errors[field] && (
                  <p
                    id={formId + field + "-error"}
                    className="mt-1 text-sm text-red-700"
                  >
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}
            <div className="min-w-0">
              <label
                htmlFor={formId + "interest"}
                className="mb-2 block text-sm"
              >
                I’m interested in *
              </label>
              <select
                id={formId + "interest"}
                name="interest"
                className="h-12 min-w-0 max-w-full border border-neutral-300 bg-white px-3"
                defaultValue={options[0]}
                aria-invalid={!!errors.interest}
              >
                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor={formId + "message"} className="mb-2 block text-sm">
              Message *
            </label>
            <Textarea
              id={formId + "message"}
              name="message"
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? formId + "message-error" : undefined
              }
            />
            {errors.message && (
              <p
                id={formId + "message-error"}
                className="mt-1 text-sm text-red-700"
              >
                {errors.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Prepare enquiry
          </Button>
          {draft && (
            <div
              role="status"
              className="border border-green-200 bg-green-50 p-5"
            >
              <p className="mb-3">
                Your {subject.toLowerCase()} enquiry is ready, {draft.name}.
              </p>
              <Button asChild>
                <a
                  href={
                    "mailto:alimoshofc@gmail.com?subject=" +
                    encodeURIComponent(subject + " — " + draft.interest) +
                    "&body=" +
                    encodeURIComponent(
                      draft.message +
                        "\n\n" +
                        draft.name +
                        "\n" +
                        draft.email +
                        "\n" +
                        draft.phone,
                    )
                  }
                >
                  Open email to send
                </a>
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
