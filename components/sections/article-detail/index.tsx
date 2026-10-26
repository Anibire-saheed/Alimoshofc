import Image from "next/image";
import Link from "next/link";
import articles from "@/lib/articles.json";
import { Button } from "@/components/ui/button";
export function ArticleDetail({
  article,
}: {
  article: (typeof articles)[number];
}) {
  return (
    <article className="mx-auto max-w-[900px] px-6 py-14">
      <Link href="/blog" className="text-sm text-[#54728a]">
        ← All club news
      </Link>
      <p className="mt-10 text-xs uppercase tracking-widest text-[#54728a]">
        {article.category}
      </p>
      <h1 className="mt-4 font-heavy text-3xl leading-tight sm:text-5xl">
        {article.title}
      </h1>
      <p className="my-6 text-sm text-neutral-500">
        The 12th Man · {article.date}
      </p>
      <div className="relative aspect-[16/10]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          sizes="(max-width:900px) 100vw, 900px"
          className="object-cover"
        />
      </div>
      <p className="mt-7 text-xs uppercase tracking-widest text-neutral-500">
        Club news summary · Archive
      </p>
      <div className="my-7 space-y-6 text-lg leading-9">
        {article.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 border-t border-neutral-200 pt-8">
        <Button asChild>
          <Link href="/blog">More club news</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/goalfunda">Support The Herd</Link>
        </Button>
      </div>
      <section className="mt-16">
        <h2 className="font-heading text-3xl">MORE FROM THE HERD</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {articles
            .filter((p) => p.slug !== article.slug)
            .slice(0, 2)
            .map((p) => (
              <Link
                key={p.slug}
                href={"/post/" + p.slug}
                className="border border-neutral-200 p-6 font-heavy hover:text-[#54728a]"
              >
                {p.title} →
              </Link>
            ))}
        </div>
      </section>
    </article>
  );
}
