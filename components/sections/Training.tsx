
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

const Programs = [
  {
    title: "Strength Evolution",
    level: "Advance",
    description:
      "Progressive overload cycles, Olympic lifts and power development paired with mobility resets.",
    accent: "from-violet-500/90 via-fuchsia-500/80 to-orange-400/80",
  },
  {
    title: "Hybrid Conditioning",
    level: "Intermediate",
    description:
      "Engine rev-ups with mixed Modality circuits, erg work and tempo runs that keep cardio exciting.",
    accent: "from-emerald-500/90 via-teal-400/80 to-sky-400/80",
  },
  {
    title: "Metabolic Sculpt",
    level: "All Levels",
    description:
      "Athletic bodybuilding meets metabolic conditioning for shredding fat without losing muscle.",
    accent: "from-amber-400/90 via-orange-500/80 to-rose-500/80",
  },
];

const Training = () => {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
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
    </div>
  )
}

export default Training