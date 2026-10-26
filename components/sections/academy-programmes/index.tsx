import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pageImage, programmes } from "@/lib/inner-content";
export function AcademyProgrammes() {
  return (
    <>
      <section className="mx-auto max-w-[1100px] px-6 py-16">
        {programmes.map((p, i) => (
          <article
            key={p.name}
            className="mb-12 grid overflow-hidden bg-[#efefef] md:grid-cols-2"
          >
            <div className={"relative min-h-80 " + (i % 2 ? "md:order-2" : "")}>
              <Image
                src={pageImage("soccer-schools", Math.min(i, 3))}
                alt={p.name + " football programme"}
                fill
                sizes="(max-width:768px) 100vw, 550px"
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-12">
              <p className="text-sm text-[#54728a]">{p.age}</p>
              <h2 className="mt-3 font-heading text-4xl">{p.name}</h2>
              <p className="my-6 leading-8">{p.text}</p>
              <Button asChild>
                <Link href="#enquire">Register interest</Link>
              </Button>
            </div>
          </article>
        ))}
      </section>
      <section className="bg-[#04360a] px-6 py-14 text-center text-white">
        <h2 className="section-title">AVAILABLE CENTRES</h2>
        <p className="mt-6 leading-8">
          Herdzone, Abesan Youth Centre, Ipaja
          <br />
          Bamaka International School, 5th Avenue, Abesan Estate
        </p>
        <p className="mt-4">0816 244 8198 · 0703 339 2324</p>
        <p className="mt-3 text-sm text-white/70">
          Contact the club to confirm current venues and training availability.
        </p>
        <Button asChild className="mt-7">
          <Link href="/club-store">Explore The Thundering Herd comic</Link>
        </Button>
      </section>
    </>
  );
}
