import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { SchoolProgrammes } from "@/components/sections/school-programmes";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { pageImage } from "@/lib/inner-content";

export const metadata: Metadata = {
  title: "SCHOOL SPORTS DEVELOPMENT | Alimosho FC",
  description:
    "Helping schools create a pathway from participation to sporting ambition.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        title="SCHOOL SPORTS DEVELOPMENT"
        description="Helping schools create a pathway from participation to sporting ambition."
        image={pageImage("school-sports")}
      />
      <SchoolProgrammes />
      <EnquiryForm
        title="SPEAK TO US"
        subject="School sports partnership"
        options={["Primary school", "Secondary school", "Higher learning"]}
      />
    </>
  );
}
