import Image from "next/image";
import { pageImage } from "@/lib/inner-content";
const people = [
  {
    name: "TESLIM SANNI-ANIBIRE",
    role: "Founder & Marketing Lead",
    text: "A football enthusiast, creative cook and marketing strategist with experience in brand management and targeted campaigns.",
  },
  {
    name: "MARTHA ADAMA",
    role: "Co-Founder & Female Team Manager",
    text: "A former basketball player with a background in sports management and a strong commitment to growing women’s football.",
    image: pageImage("about", 1),
  },
  {
    name: "RAJI O. YEKINI",
    role: "Coach / Head of Football Performance",
    text: "ROY oversees player drills, training programmes and matchday performance, helping athletes prepare for competitive football.",
  },
];
export function Founders() {
  return (
    <section className="bg-[#efefef] px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="section-title mb-10 text-center">
          THE PEOPLE BEHIND THE HERD
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {people.map((p) => (
            <article key={p.name} className="bg-white p-7">
              {p.image ? (
                <div className="relative mb-6 h-64">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="330px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mb-6 flex h-64 items-center justify-center bg-[#04360a] font-heading text-7xl text-[#68b04d]">
                  {p.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <p className="text-xs uppercase tracking-widest text-[#54728a]">
                {p.role}
              </p>
              <h3 className="mt-3 font-heading text-3xl">{p.name}</h3>
              <p className="mt-4 leading-7">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
