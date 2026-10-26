import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { ClubStory } from "@/components/sections/club-story";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { pageImage } from "@/lib/inner-content";
import { Founders } from "@/components/sections/founders";
export const metadata: Metadata = {
  title: "ABOUT ALIMOSHO FC | Alimosho FC",
  description:
    "Football, community and a shared ambition. Meet the people behind The Herd.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        title="ABOUT ALIMOSHO FC"
        description="Football, community and a shared ambition. Meet the people behind The Herd."
        image={pageImage("about")}
      />
      <ClubStory />
      <Founders />
      <div className="mx-auto max-w-[980px] px-6 pt-14">
        <h2 className="section-title">TALK TO US</h2>
        <p className="mt-5 leading-8">
          Office: House 1, P & T Residential Estate, Ipaja, Lagos.
          <br />
          Stadium: Abesan Mini Stadium, Abesan, Ipaja, Lagos.
        </p>
      </div>
      <EnquiryForm subject="Club enquiry" />
    </>
  );
}
