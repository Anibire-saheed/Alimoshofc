import { PageIntro } from "@/components/sections/page-intro";
import { MatchPredictions } from "@/components/sections/match-predictions";
import { pageImage } from "@/lib/inner-content";
export const metadata = { title: "PREDICT OUR GAMES | Alimosho FC" };
export default function Page() {
  return (
    <>
      <PageIntro
        title="PREDICT OUR GAMES"
        description="Test your knowledge of The Herd with archived match predictions."
        image={pageImage("predict-win")}
      />
      <MatchPredictions />
    </>
  );
}
