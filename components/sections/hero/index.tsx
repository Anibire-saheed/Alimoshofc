import Image from "next/image";
import { assets } from "@/lib/content";
export function Hero() {
  return (
    <section
      aria-label="Alimosho FC — Pride of Lagos"
      className="relative h-[420px] w-full overflow-hidden sm:h-[570px]"
    >
      <Image
        src={assets.hero}
        alt="Alimosho FC player in the black and blue Pride of Lagos jersey"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_54%]"
      />
    </section>
  );
}
