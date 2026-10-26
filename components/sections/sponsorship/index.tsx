import Image from "next/image";
import { pageImage, sponsorships } from "@/lib/inner-content";
export function Sponsorship() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Image
          src={pageImage("goalfunda")}
          alt="Goalfunda player sponsorship"
          width={700}
          height={600}
          className="h-auto w-full"
        />
        <div>
          <h2 className="section-title">
            SUPPORT A PLAYER.
            <br />
            BUILD A FUTURE.
          </h2>
          <p className="mt-6 leading-8">
            Goalfunda connects talented players and staff with people and
            businesses who want to support their journey. Sponsor a member of
            The Herd while introducing your brand to the club’s community.
          </p>
          <p className="mt-5 leading-8">
            The source sponsorship package offers recognition alongside your
            chosen player’s profile in the matchday programme. Individuals can
            get involved too. Ask the club about current packages and
            availability.
          </p>
        </div>
      </div>
      <h2 className="mt-16 font-heading text-3xl">WAYS TO SUPPORT THE HERD</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sponsorships.map((s, i) => (
          <div key={s} className="border border-neutral-200 p-6">
            <span className="font-heading text-3xl text-[#68b04d]">
              0{i + 1}
            </span>
            <h3 className="mt-3 text-lg">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
