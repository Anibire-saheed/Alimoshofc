import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { AcademyProgrammes } from "@/components/sections/academy-programmes";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { pageImage } from "@/lib/inner-content";
import { programmes } from "@/lib/inner-content";
export const metadata: Metadata = {
  title: "LEADERSHIP THROUGH SPORTS | Alimosho FC",
  description:
    "A pathway for children to learn football, grow in confidence and develop leadership skills.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        title="LEADERSHIP THROUGH SPORTS"
        description="A pathway for children to learn football, grow in confidence and develop leadership skills."
        image={pageImage("soccer-schools")}
      />
      <AcademyProgrammes />
      <EnquiryForm
        title="REGISTER YOUR WARDS"
        subject="Soccer school registration"
        options={programmes.map((p) => p.name)}
      />
    </>
  );
}
