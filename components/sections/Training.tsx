'use client';

import { useEffect, useState } from "react";

const Features = [
  {
    icon: "⚡",
    title: "Hybrid Programming",
    description:
      "Personalized workouts that adapt to your sleep, recovery and lifestyle data.",
  },
  {
    icon: "💪",
    title: "Performance Lab",
    description:
      "InBody scans, mobility labs and strength diagnostics built into your plan.",
  },
  {
    icon: "🧠",
    title: "Mind-Body Reset",
    description:
      "Breathwork, recovery pods and mindfulness coaching included with every plan.",
  },
];

const programs = [
  {
    title: "Strength Evolution",
    level: "Advance",
    description:
      "Progressive overload cycles, Olympic lifts and power development paired with mobility resets.",
    WalkingColor: "from-violet-500/90 via-fuchsia-500/80 to-orange-400/80",
  },
  {
    title: "Hybrid Conditioning",
    level: "Intermediate",
    description:
      "Engine rev-ups with mixed Modality circuits, erg work and tempo runs that keep cardio exciting.",
    WalkingColor: "from-emerald-500/90 via-teal-400/80 to-sky-400/80",
  },
  {
    title: "Metabolic Sculpt",
    level: "All Levels",
    description:
      "Athletic bodybuilding meets metabolic conditioning for shredding fat without losing muscle.",
    WalkingColor: "from-amber-400/90 via-orange-500/80 to-rose-500/80",
  },
];

interface sectionprops {
    id: string;
}

const Training = ({id} : sectionprops) => {

    const [active, setactive] = useState(0);

  useEffect(() => {
    const slidertime = setInterval(() => {
      setactive((prev) => (prev + 1) % programs.length);
    }, 4000);
    return () => clearInterval(slidertime);
  }, []);

  return (
    <div id={id} className="grid gap-10 lg:grid-cols-2">
        {/* Festures section */}
        <div className="space-y-6 rounded-3xl border border-white/10 bg-linear-to-br from-zinc-900/70 to-black/40 p-10 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                Why Gymfreak
                </p>
                <h2 className="text-3xl font-semibold text-white">
                Coaching labs + experience-led training.
                </h2>
                <p className="text-zinc-300">
                Every session fuses data, coaching and ambience. Hit the floor with
                live adaptive programming, recover with breathwork pods, and track
                progress with pro lab diagnostics.
                </p>
                <div className="space-y-4">
                {
                Features.map((items, id) => (
                    <div
                    key={id}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-black/40 p-4"
                    >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                        {items.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{items.title}</h3>
                        <p className="text-sm text-zinc-400">{items.description}</p>
                    </div>
                    </div>
                ))
                }
                </div>
        </div>
            {/* Programs section */}

    <div className="space-y-4 rounded-3xl border border-white/10 bg-black/50 p-4">
            <p className="px-6 pt-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Signature Programs
            </p>
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/5 bg-white/5 pb-16">
            {programs.map((program, index) => (
                <article
                key={program.title}
                className={`absolute inset-0 flex h-full flex-col gap-4 rounded-3xl bg-linear-to-br ${program.WalkingColor} p-8 text-black transition-all duration-700 ease-out ${
                    index === active
                    ? 'z-10 opacity-100'
                    : 'pointer-events-none opacity-0'
                }`}
                >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-black/80">
                    <span>{program.level}</span>
                    <span>Program #{index + 1}</span>
                </div>
                <h3 className="text-3xl font-semibold">{program.title}</h3>
                <p className="text-sm">{program.description}</p>
                <button className="mt-auto w-fit rounded-full bg-black/70 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-black/20">
                    Preview schedule
                </button>
                </article>
            ))}

          {/* Slidet Dot */}

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {programs.map((program, index) => (
              <button
                aria-label="change slider"
                key={program.title}
                onClick={() => setactive(index)}
                className={`h-2 w-10 rounded-full transition ${
                  index === active
                    ? 'bg-white'
                    : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
           </div>
      </div>
    </div>
  )
}

export default Training