import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { MemberBenefits } from "@/components/sections/member-benefits";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { pageImage } from "@/lib/inner-content";

export const metadata: Metadata = {
  title: "COMMUNITY OF FANS | Alimosho FC",
  description: "Your club. Your community. Find your place in The Herd.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        title="COMMUNITY OF FANS"
        description="Your club. Your community. Find your place in The Herd."
        image={pageImage("members")}
      />
      <MemberBenefits />
      <EnquiryForm
        title="JOIN US"
        subject="Membership"
        options={["Fan club", "Business club", "Volunteering"]}
      />
    </>
  );
}
