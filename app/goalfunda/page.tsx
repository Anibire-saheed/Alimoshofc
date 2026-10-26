import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { Sponsorship } from "@/components/sections/sponsorship";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { pageImage } from "@/lib/inner-content";
import { sponsorships } from "@/lib/inner-content";
export const metadata: Metadata = {
  title: "GOALFUNDA | Alimosho FC",
  description:
    "Sponsor a player. Support their journey. Become part of The Herd.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        title="GOALFUNDA"
        description="Sponsor a player. Support their journey. Become part of The Herd."
        image={pageImage("goalfunda")}
      />
      <Sponsorship />
      <EnquiryForm
        subject="Goalfunda sponsorship"
        options={["I am a sponsor", "I am a player", ...sponsorships]}
      />
    </>
  );
}
