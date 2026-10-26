import { PageIntro } from "@/components/sections/page-intro";
import { StoreCatalogue } from "@/components/sections/store-catalogue";
import { pageImage } from "@/lib/inner-content";
export const metadata = { title: "THE OFFICIAL CLUB STORE | Alimosho FC" };
export default function Page() {
  return (
    <>
      <PageIntro
        title="THE OFFICIAL CLUB STORE"
        description="Wear your colours. Carry the pride of Alimosho."
        image={pageImage("club-store")}
      />
      <StoreCatalogue />
    </>
  );
}
