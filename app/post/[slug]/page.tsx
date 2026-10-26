import { notFound } from "next/navigation";
import articles from "@/lib/articles.json";
import { ArticleDetail } from "@/components/sections/article-detail";
export function generateStaticParams() {
  return articles.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((p) => p.slug === slug);
  return {
    title: article ? article.title + " | Alimosho FC" : "Article not found",
    description: article?.summary,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((p) => p.slug === slug);
  if (!article) notFound();
  return <ArticleDetail article={article} />;
}
