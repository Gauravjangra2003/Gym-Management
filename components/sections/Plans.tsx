"use client";

import { useState } from "react";

const pricingPlans = {
  monthly: [
    {
      tier: "Starter Ignite",
      price: 59,
      features: [
        "Unlimited smart group sessions",
        "Monthly body composition scan",
        "Trainer text support",
      ],
    },
    {
      tier: "Athlete Flow",
      price: 99,
      features: [
        "Everything in Starter",
        "Custom periodized programming",
        "Recovery pod access",
        "Weekly accountability calls",
      ],
    },
    {
      tier: "Elite Hybrid",
      price: 159,
      features: [
        "Private studio access",
        "Dedicated performance team",
        "Nutrition & blood work tracking",
        "Priority event invites",
      ],
    },
  ],
  yearly: [
    {
      tier: "Starter Ignite",
      price: 49,
      features: [
        "Unlimited smart group sessions",
        "Monthly body composition scan",
        "Trainer text support",
      ],
    },
    {
      tier: "Athlete Flow",
      price: 79,
      features: [
        "Everything in Starter",
        "Custom periodized programming",
        "Recovery pod access",
        "Weekly accountability calls",
      ],
    },
    {
      tier: "Elite Hybrid",
      price: 129,
      features: [
        "Private studio access",
        "Dedicated performance team",
        "Nutrition & blood work tracking",
        "Priority event invites",
      ],
    },
  ],
};

export default function PricingSection({id}) {
  const [switchPlan, setSwitchPlan] = useState("monthly");

//   console.log('rendering')

  const plans = pricingPlans[switchPlan];


  return (
    <section id={id} className="space-y-8">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
          Memberships
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Monthly or yearly, same elite experience.
        </h2>
        <p className="text-zinc-400">
          Switch anytime. Yearly plans save up to 20% and include VIP retreat
          invites.
        </p>
      </div>

      {/* Toggle Button*/}
      <div className="flex justify-center rounded-full border border-white/10 bg-white/5 p-1 text-sm font-semibold">
        <button
          onClick={() => setSwitchPlan("monthly")}
         className={`w-1/2 rounded-full px-4 py-2 transition ${
            switchPlan === "monthly"
              ? "bg-white text-black"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setSwitchPlan("yearly")}
          className={`w-1/2 rounded-full px-4 py-2 transition ${
            switchPlan === "yearly"
              ? "bg-white text-black"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Plans */}
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.tier}
            className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/70 p-6"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                {plan.tier}
              </p>
              <p className="mt-2 text-4xl font-semibold">${plan.price}</p>
              <p className="text-sm text-zinc-400">per {switchPlan}</p>
            </div>

            <ul className="space-y-3 text-sm text-zinc-200">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="mt-auto rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
              Claim this plan
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
