import Link from "next/link";
import Image from "next/image";
import { assets, news } from "@/lib/content";
export function News() {
  return (
    <section
      id="news"
      aria-label="Latest club news"
      className="mx-auto max-w-[980px] px-5 py-12 sm:py-16"
    >
      <Link
        href={"/post/afc-lauch-new-kit-back-to-brilliance"}
        className="group grid border border-neutral-200 md:grid-cols-2"
      >
        <div className="relative min-h-72 overflow-hidden">
          <Image
            src={assets.kit}
            alt="Alimosho FC Back to Brilliance kit launch"
            fill
            sizes="(max-width:768px) 100vw, 490px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col p-7 sm:p-9">
          <p className="mb-3 text-xs uppercase tracking-[.16em] text-[#54728a]">
            Editorials
          </p>
          <h1 className="font-heavy text-[28px] leading-tight group-hover:text-[#54728a]">
            AFC Lauch New Kit “Back To Brilliance”
          </h1>
          <p className="mt-5 line-clamp-4 leading-7">
            Alimosho Football Club has officially unveiled its striking new home
            jersey, themed “Back to Brilliance.” Designed and produced by Lungu
            Sportswear, the sleek black-and-blue kit represents a return to the
            club’s roots — fierce, focused, and full of pride.
          </p>
          <div className="mt-7 border-t border-neutral-200 pt-4 text-xs">
            The 12th Man <span className="mx-2">·</span> Nov 2, 2025{" "}
            <span className="mx-2">·</span> 1 min read
          </div>
        </div>
      </Link>
      <div className="mt-8 grid gap-x-6 gap-y-9 sm:grid-cols-2 md:grid-cols-3">
        {news.map((item) => (
          <Link key={item.slug} href={"/post/" + item.slug} className="group">
            <div className="relative aspect-video overflow-hidden bg-neutral-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width:640px) 100vw, 306px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-4 text-lg leading-snug group-hover:text-[#54728a]">
              {item.title}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
