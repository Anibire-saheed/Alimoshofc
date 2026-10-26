import Image from "next/image";
import { pageImage } from "@/lib/inner-content";
export function ClubStory() {
  return (
    <section className="mx-auto grid max-w-[1100px] gap-12 px-6 py-16 md:grid-cols-2">
      <div className="relative min-h-80">
        <Image
          src={pageImage("about")}
          alt="Alimosho Football Club"
          fill
          sizes="(max-width:768px) 100vw, 550px"
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="section-title">ABOUT ALIMOSHO FC</h2>
        <p className="mt-6 text-lg leading-8">
          Alimosho Football Club is a privately owned grassroots club with
          men’s, women’s and academy teams.
        </p>
        <p className="mt-5 leading-8">
          Founded in 2015, the club set out to build a sports brand representing
          Alimosho, Lagos. Its programmes bring players, families, businesses
          and supporters together through a shared love of football.
        </p>
        <p className="mt-5 leading-8">
          From a child’s first training session to competitive matchdays, The
          Herd is about developing talent and strengthening the community around
          it.
        </p>
      </div>
    </section>
  );
}
