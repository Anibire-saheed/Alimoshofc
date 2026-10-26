"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { savePrediction } from "@/lib/store/predictions";
import type { RootState } from "@/lib/store";
const score = z
  .string()
  .regex(/^\d{1,2}$/, "Enter a whole number from 0 to 20.")
  .transform(Number)
  .pipe(z.number().max(20, "Enter a score from 0 to 20."));
const schema = z.object({ home: score, away: score });
const matches = [
  {
    id: "royals",
    name: "AFC vs Royals",
    date: "14 September 2019",
    text: "The source preview described the teams’ first competitive meeting, with Royals sixth in TheSociaLiga table.",
  },
  {
    id: "cubs",
    name: "AFC vs Cubs",
    date: "14 September 2019",
    text: "Cubs were listed seventh in the league, with the club expecting a challenging contest.",
  },
  {
    id: "saints",
    name: "AFCL vs Saints",
    date: "27 September 2019",
    text: "The source preview recalled a 1–1 draw in the previous meeting between the two sides.",
  },
];
function MatchCard({ match }: { match: (typeof matches)[number] }) {
  const dispatch = useDispatch();
  const saved = useSelector((s: RootState) =>
    s.predictions.entries.find((p) => p.match === match.id),
  );
  const [error, setError] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = schema.safeParse(
      Object.fromEntries(new FormData(e.currentTarget)),
    );
    if (!result.success) {
      setError(result.error.issues[0].message);
      toast.error("Check your scores.");
      return;
    }
    setError("");
    dispatch(savePrediction({ match: match.id, ...result.data }));
    toast.success("Practice prediction saved for this session.");
  }
  return (
    <article className="border border-neutral-200 p-7">
      <p className="text-xs uppercase tracking-widest text-[#54728a]">
        Archived match
      </p>
      <h2 className="mt-4 font-heading text-3xl">{match.name}</h2>
      <p className="mt-4 text-sm">{match.date} · Legacy, Surulere</p>
      <p className="my-6 min-h-24 leading-7">{match.text}</p>
      <form onSubmit={submit} noValidate>
        <div className="grid grid-cols-2 gap-4">
          {["home", "away"].map((field) => (
            <div key={field}>
              <label
                htmlFor={match.id + field}
                className="mb-2 block text-sm capitalize"
              >
                {field} score
              </label>
              <Input
                id={match.id + field}
                name={field}
                type="number"
                inputMode="numeric"
                min={0}
                max={20}
                required
                defaultValue={saved?.[field as "home" | "away"]}
                aria-invalid={!!error}
                aria-describedby={error ? match.id + "error" : undefined}
              />
            </div>
          ))}
        </div>
        {error && (
          <p id={match.id + "error"} className="mt-3 text-sm text-red-700">
            {error}
          </p>
        )}
        <Button className="mt-5 w-full" type="submit">
          {saved ? "Update" : "Save"} practice prediction
        </Button>
      </form>
      {saved && (
        <p role="status" className="mt-5 bg-green-50 p-4 text-center">
          Your prediction:{" "}
          <strong>
            {saved.home} – {saved.away}
          </strong>
        </p>
      )}
    </article>
  );
}
export function MatchPredictions() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <p className="mb-8 border-l-4 border-[#68b04d] bg-[#efefef] p-5 leading-7">
        These fixtures and the original ₦5,000 prize promotions date to 2019 and
        are closed. You can try a practice prediction here; it is saved only for
        this session and does not enter a competition.
      </p>
      <div className="grid gap-7 md:grid-cols-3">
        {matches.map((m) => (
          <MatchCard key={m.id} match={m} />
        ))}
      </div>
    </section>
  );
}
