import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/content";
import { Button } from "@/components/ui/button";
export function YouthDevelopment() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Image
          src={assets.youth}
          alt="Alimosho youth players on the pitch"
          width={700}
          height={500}
          className="aspect-[4/3] w-full object-cover"
        />
        <div>
          <h2 className="section-title">THE NEXT GENERATION</h2>
          <p className="mt-6 leading-8">
            Follow the young Herd as they develop their skills, compete together
            and represent Alimosho. The club’s youth pathway connects training,
            match experience and personal development.
          </p>
          <p className="mt-4 leading-8">
            Interested in joining? Explore the soccer school programmes or
            enquire about the appropriate group for your child.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/soccer-schools">Explore the academy</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#enquire">Enquire about joining</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {["TRAIN TOGETHER", "PLAY WITH PURPOSE", "REPRESENT ALIMOSHO"].map(
          (t, i) => (
            <article key={t} className="bg-[#efefef] p-7">
              <p className="font-heading text-4xl text-[#54728a]">0{i + 1}</p>
              <h3 className="mt-3 font-heading text-2xl">{t}</h3>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
