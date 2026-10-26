"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { enquirySchema, type Enquiry } from "@/lib/validation";
import { saveEnquiry, type RootState } from "@/lib/store";
export function Contact() {
  const dispatch = useDispatch();
  const saved = useSelector((s: RootState) => s.club.lastEnquiry);
  const [errors, setErrors] = useState<Partial<Record<keyof Enquiry, string>>>(
    {},
  );
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const result = enquirySchema.safeParse(
      Object.fromEntries(new FormData(form)),
    );
    if (!result.success) {
      const next: Partial<Record<keyof Enquiry, string>> = {};
      for (const issue of result.error.issues)
        next[issue.path[0] as keyof Enquiry] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      const field = form.elements.namedItem(
        result.error.issues[0].path[0] as string,
      );
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    setErrors({});
    dispatch(saveEnquiry(result.data));
    toast.success(
      "Enquiry saved for this session. Use the email link to send it to the club.",
    );
  }
  return (
    <section
      id="contact"
      className="mx-auto grid max-w-[980px] gap-10 px-5 py-16 md:grid-cols-[1fr_1.3fr]"
    >
      <div>
        <h2 className="section-title">JOIN THE HERD</h2>
        <p className="mt-5 leading-7">
          Interested in the academy, supporting a player, or becoming part of
          our community? Get in touch.
        </p>
        <a
          className="mt-5 inline-block underline underline-offset-4"
          href="mailto:alimoshofc@gmail.com"
        >
          alimoshofc@gmail.com
        </a>
        <p className="mt-5 text-sm leading-6 text-neutral-500">
          This preview saves your enquiry for this session only. After saving,
          use the email link to send it to the club.
        </p>
      </div>
      <form noValidate onSubmit={submit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {(["name", "email"] as const).map((name) => (
            <div key={name}>
              <label htmlFor={name} className="mb-2 block text-sm capitalize">
                {name} *
              </label>
              <Input
                id={name}
                name={name}
                type={name === "email" ? "email" : "text"}
                autoComplete={name}
                required
                aria-invalid={!!errors[name]}
                aria-describedby={errors[name] ? name + "-error" : undefined}
              />
              {errors[name] && (
                <p id={name + "-error"} className="mt-2 text-sm text-red-700">
                  {errors[name]}
                </p>
              )}
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-700">
              {errors.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Save enquiry
        </Button>
        {saved && (
          <p role="status" className="bg-green-50 p-4 text-sm leading-6">
            Thanks, {saved.name}. Your enquiry is ready.{" "}
            <a
              className="font-bold underline"
              href={
                "mailto:alimoshofc@gmail.com?subject=" +
                encodeURIComponent("Club enquiry from " + saved.name) +
                "&body=" +
                encodeURIComponent(
                  saved.message + "\n\n" + saved.name + "\n" + saved.email,
                )
              }
            >
              Open email to send it →
            </a>
          </p>
        )}
      </form>
    </section>
  );
}
