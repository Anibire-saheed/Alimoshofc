export function ScheduleList() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <p className="mb-8 border-l-4 border-[#68b04d] bg-[#efefef] p-5 text-sm leading-6">
        The source lists historical fixtures. Dates below are reproduced as an
        archive; upcoming matches and attendance should be confirmed with the
        club.
      </p>
      <div className="grid gap-6 border-y border-neutral-200 py-8 sm:grid-cols-[1fr_2fr_1fr]">
        <div>
          <p className="text-xs tracking-widest">DAY</p>
          <p className="mt-3 font-heading text-3xl">
            SUNDAY
            <br />
            23 JUNE
          </p>
        </div>
        <div>
          <p className="text-xs tracking-widest">OPPONENT</p>
          <h2 className="mt-3 font-heading text-3xl">LUCKY STARS FC</h2>
          <p className="mt-2">Fasco Cup · Team A</p>
        </div>
        <div>
          <p className="text-xs tracking-widest">TIME</p>
          <p className="mt-3 font-heading text-3xl">1:00 PM</p>
        </div>
      </div>
      <h2 className="section-title mt-14">TRAINING DAYS</h2>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {[
          ["YOUTH TEAM", "Mondays, Tuesdays, Wednesdays & Fridays"],
          ["ACADEMY TEAMS", "Fridays & Saturdays"],
          ["WOMEN’S TEAM", "Mondays, Tuesdays, Fridays & Saturdays"],
        ].map(([team, days]) => (
          <article key={team} className="bg-[#04360a] p-7 text-white">
            <h3 className="font-heading text-2xl">{team}</h3>
            <p className="mt-4 leading-7">{days}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
