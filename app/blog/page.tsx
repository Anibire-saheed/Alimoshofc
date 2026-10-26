import { PageIntro } from "@/components/sections/page-intro";
import { BlogFeed } from "@/components/sections/blog-feed";
import { pageImage } from "@/lib/inner-content";
export const metadata = { title: "Latest News | Alimosho FC" };
export default function Page() {
  return (
    <>
      <PageIntro
        title="LATEST NEWS"
        description="Stories from on and off the field."
        image={pageImage("blog")}
      />
      <BlogFeed />
    </>
  );
}
