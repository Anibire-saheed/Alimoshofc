import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { ScheduleList } from "@/components/sections/schedule-list";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { pageImage } from "@/lib/inner-content";

export const metadata: Metadata = {
  title: "HERD SCHEDULE | Alimosho FC",
  description: "Fixtures, programmes and training with Alimosho Football Club.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        title="HERD SCHEDULE"
        description="Fixtures, programmes and training with Alimosho Football Club."
        image={pageImage("schedule")}
      />
      <ScheduleList />
      <EnquiryForm
        title="JOIN THE OFFICIAL FAN CLUB"
        subject="Fan club"
        options={["Join the fan club", "Match attendance", "Training enquiry"]}
      />
    </>
  );
}
