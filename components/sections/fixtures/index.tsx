import Link from "next/link";
import { Button } from "@/components/ui/button";
const games = [
  {
    day: "WED",
    date: "SEPT 13",
    opponent: "Dannaz FC",
    venue: "Opebi Primary Sch",
    time: "9:00 AM",
  },
  {
    day: "SAT",
    date: "SEPT 16",
    opponent: "F8 BALLERS",
    venue: "Seamoriow Complex",
    time: "11:00 AM",
  },
  {
    day: "SAT",
    date: "PENDING",
    opponent: "ST. Bernedette (U13)",
    venue: "St. Bernedette",
    time: "9:00 AM",
  },
  {
    day: "SAT",
    date: "PENDING",
    opponent: "PLAYOFFS",
    venue: "To be confirmed",
    time: "1:00 PM",
  },
];
export function Fixtures() {
  return (
    <section id="fixtures" className="bg-[#fafafa] px-5 py-16 text-center">
      <div className="mx-auto max-w-[980px]">
        <h2 className="section-title">UPCOMING GAMES</h2>
        <div className="mx-auto my-7 h-0.5 w-8 bg-[#54728a]" />
        <p className="mb-8 text-xs text-neutral-500">
          Fixtures as listed on the original club website. Check the full
          schedule for updates.
        </p>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-4">
          {games.map((g) => (
            <article key={g.opponent}>
              <p className="font-heading text-3xl">
                {g.day}
                <br />
                {g.date}
              </p>
              <p className="my-5 text-lg">Vs</p>
              <h3 className="font-heavy text-lg">{g.opponent}</h3>
              <p className="mt-3 text-sm">{g.venue}</p>
              <p className="mt-5 text-xl">{g.time}</p>
            </article>
          ))}
        </div>
        <Button asChild className="mt-12 w-full max-w-[335px]">
          <Link href={"/schedule"}>Full Schedule</Link>
        </Button>
      </div>
    </section>
  );
}
