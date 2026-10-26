import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { YouthDevelopment } from "@/components/sections/youth-development";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { pageImage } from "@/lib/inner-content";

export const metadata: Metadata = {
  title: "YOUTH TEAM | Alimosho FC",
  description: "Developing talent. Building character. Playing for Alimosho.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        title="YOUTH TEAM"
        description="Developing talent. Building character. Playing for Alimosho."
        image={pageImage("youth-team")}
      />
      <YouthDevelopment />
      <EnquiryForm
        subject="Youth team"
        options={[
          "New player enquiry",
          "Returning player",
          "Parent or guardian",
          "Youth sponsorship",
        ]}
      />
    </>
  );
}
