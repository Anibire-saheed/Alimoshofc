import Link from "next/link";
import Image from "next/image";
import { assets } from "@/lib/content";
import { Button } from "@/components/ui/button";
export function About() {
  return (
    <section id="about" className="grid bg-[#04360a] text-white md:grid-cols-2">
      <div className="relative min-h-[360px]">
        <Image
          src={assets.team}
          alt="Alimosho Football Club team together on the pitch"
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="mx-auto max-w-[530px] px-7 py-16 text-center sm:px-12">
        <h2 className="section-title">ABOUT THE HERD</h2>
        <blockquote className="mt-7 space-y-5 text-[17px] leading-7">
          <p>Football in Alimosho basically is life itself.</p>
          <p>
            Give us football and you would have contributed massively to
            existence. Take away our football and you have taken away life
            itself.
          </p>
          <p>
            Football connects us. We might be known majorly as the most
            populated Local government in Nigeria, but we are known for our
            brand of football too.
          </p>
          <footer className="text-sm">Martha Adama: Super Fan</footer>
        </blockquote>
        <Button asChild className="mt-8">
          <Link href={"/about"}>Read More</Link>
        </Button>
      </div>
    </section>
  );
}
