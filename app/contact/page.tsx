import { PageIntro } from "@/components/sections/page-intro";
import { EnquiryForm } from "@/components/sections/enquiry-form";
export const metadata = { title: "Contact | Alimosho FC" };
export default function Page() {
  return (
    <>
      <PageIntro
        title="TALK TO US"
        description="Get in touch with the team behind The Herd."
      />
      <div className="mx-auto max-w-[980px] px-6 pt-12 leading-8">
        <p>Office: House 1, P & T Residential Estate, Ipaja, Lagos.</p>
        <p>Stadium: Abesan Mini Stadium, Abesan, Ipaja, Lagos.</p>
        <a href="tel:+2348162448198" className="underline">
          0816 244 8198
        </a>
      </div>
      <EnquiryForm
        subject="Club enquiry"
        options={[
          "General enquiry",
          "Academy",
          "Sponsorship",
          "Media",
          "Business club",
        ]}
      />
    </>
  );
}
