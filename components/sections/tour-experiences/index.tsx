import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TourExperiences() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative min-h-96">
          <Image
            src={"/images/1bcac2_3635fe86c5a544fda6ed99f4ff6054b3~mv2.jpg"}
            alt="Alimosho Summer Series"
            fill
            sizes="(max-width:768px) 100vw, 550px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-[#54728a]">
            From the club’s tour archive
          </p>
          <h2 className="mt-4 section-title">
            SUMMER SERIES
            <br />
            BADAGRY
          </h2>
          <p className="mt-6 leading-8">
            The club’s Summer Series brings football, families and time away
            together. The 2024 edition was planned at Whispering Palms Resort,
            Badagry, in collaboration with Mirah Global Travels.
          </p>
          <p className="mt-5 leading-8">
            Men’s, women’s and academy teams have joined these trips alongside
            fans and families. Enquire below about future local and
            international experiences.
          </p>
          <p className="mt-5 text-sm text-neutral-500">
            No current departure dates or live booking prices have been
            confirmed.
          </p>
          <Button asChild className="mt-7">
            <Link href="#enquire">Enquire about a tour</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
