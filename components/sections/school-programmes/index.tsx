const programmes = [
  [
    "PRIMARY SCHOOLS",
    "Build a love of movement and sport through age-appropriate activities. Schools can enquire about coaches, structured sessions and a sports curriculum.",
  ],
  [
    "SECONDARY SCHOOLS",
    "Football, basketball and volleyball programmes support student athletes as they develop their abilities and explore opportunities in sport.",
  ],
  [
    "HIGHER LEARNING",
    "The club’s published partnership with NYSA Sweden focuses on combining education and sport. Enquire about current pathways and eligibility.",
  ],
];
export function SchoolProgrammes() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <p className="mx-auto mb-12 max-w-3xl text-center text-xl leading-9">
        Alimosho Sports Club works with schools to create opportunities for
        students to train, compete and pursue their sporting ambitions alongside
        their education.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {programmes.map(([title, text], i) => (
          <article
            key={title}
            className="border-t-4 border-[#68b04d] bg-[#efefef] p-8"
          >
            <span className="font-heading text-5xl text-[#54728a]">
              0{i + 1}
            </span>
            <h2 className="my-5 font-heading text-3xl">{title}</h2>
            <p className="leading-8">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
