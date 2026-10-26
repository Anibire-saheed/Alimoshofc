import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { TourExperiences } from "@/components/sections/tour-experiences";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { pageImage } from "@/lib/inner-content";

export const metadata: Metadata = {
  title: "CHOOSE YOUR TOUR | Alimosho FC",
  description:
    "Travel, football and memorable experiences with the Alimosho community.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        title="CHOOSE YOUR TOUR"
        description="Travel, football and memorable experiences with the Alimosho community."
        image={pageImage("tours")}
      />
      <TourExperiences />
      <EnquiryForm
        subject="Travel and tours"
        options={[
          "Local tours",
          "International tours",
          "Family or group trip",
          "Summer Series",
        ]}
      />
    </>
  );
}
