"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import articles from "@/lib/articles.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export function BlogFeed() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Posts");
  const filtered = articles.filter(
    (p) =>
      (category === "All Posts" || p.category === category) &&
      (p.title + " " + p.summary).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {[
            "All Posts",
            "Featured",
            "Editorials",
            "Game Recaps",
            "Goalfunda",
          ].map((c) => (
            <Button
              key={c}
              variant={c === category ? "default" : "outline"}
              onClick={() => setCategory(c)}
              aria-pressed={c === category}
            >
              {c}
            </Button>
          ))}
        </div>
        <div>
          <label htmlFor="news-search" className="sr-only">
            Search club news
          </label>
          <Input
            id="news-search"
            placeholder="Search news…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <p role="status" className="mb-6 text-sm text-neutral-500">
        {filtered.length} {filtered.length === 1 ? "story" : "stories"}
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            href={"/post/" + p.slug}
            key={p.slug}
            className="group border border-neutral-200"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width:640px) 100vw, 350px"
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-[#54728a]">
                {p.category}
              </p>
              <h2 className="mt-3 font-heavy text-xl leading-7 group-hover:text-[#54728a]">
                {p.title}
              </h2>
              <p className="mt-4 line-clamp-3 leading-7">{p.summary}</p>
              <p className="mt-5 border-t border-neutral-200 pt-4 text-xs">
                The 12th Man · {p.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {!filtered.length && (
        <div className="bg-[#efefef] p-10 text-center">
          <p>No stories match your search.</p>
          <Button
            className="mt-5"
            onClick={() => {
              setQuery("");
              setCategory("All Posts");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </section>
  );
}
