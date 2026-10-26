import Link from "next/link";
import { Button } from "@/components/ui/button";
const benefits = [
  [
    "PREDICT & WIN",
    "Explore match predictions and test your knowledge of The Herd.",
    "/predict-win",
    "START HERE",
  ],
  [
    "CLUB STORE",
    "Discover club shirts, gifts and keepsakes for friends and family.",
    "/club-store",
    "VISIT STORE",
  ],
  [
    "BUSINESS CLUB",
    "Connect with the club about business partnerships and community events.",
    "#enquire",
    "REGISTER INTEREST",
  ],
  [
    "TRAVEL & TOURS",
    "Find out about club trips and experiences for players, supporters and families.",
    "/tours",
    "EXPLORE TOURS",
  ],
];
export function MemberBenefits() {
  return (
    <section className="mx-auto grid max-w-[1100px] gap-8 px-6 py-16 sm:grid-cols-2">
      {benefits.map(([title, text, href, cta], i) => (
        <article key={title} className="border border-neutral-200 p-8">
          <p className="font-heading text-5xl text-[#68b04d]">0{i + 1}</p>
          <h2 className="mt-5 font-heading text-3xl">{title}</h2>
          <p className="my-5 leading-7">{text}</p>
          <Button asChild>
            <Link href={href}>{cta}</Link>
          </Button>
        </article>
      ))}
    </section>
  );
}
