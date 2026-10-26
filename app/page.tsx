import { Hero } from "@/components/sections/hero";
import { News } from "@/components/sections/news";
import { Fixtures } from "@/components/sections/fixtures";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <News />
        <Fixtures />
        <About />
        <Contact />
      </div>
    </>
  );
}
