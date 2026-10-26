import Image from "next/image";
import Link from "next/link";
export function PageIntro({
  title,
  eyebrow = "ALIMOSHO FOOTBALL CLUB",
  description,
  image,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#04360a] text-white">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
      )}
      <div className="relative mx-auto max-w-[1100px] px-6 py-16 sm:py-24">
        <Link href="/" className="text-sm text-white/75 hover:text-white">
          Home
        </Link>
        <span className="mx-3 text-white/50">/</span>
        <span className="text-sm">{title}</span>
        <p className="mt-10 text-xs tracking-[.24em] text-[#a8d494]">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-heading text-5xl leading-tight sm:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-8">{description}</p>
        )}
      </div>
    </section>
  );
}
