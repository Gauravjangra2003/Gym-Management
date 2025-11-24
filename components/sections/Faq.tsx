'use client';

import { useState } from "react";

const FAQ = [
      {
    question: "Can I pause my membership if I travel?",
    answer:
      "Absolutely. Every plan includes two free freezes per year, up to 45 days each.",
  },
  {
    question: "Do I need prior lifting experience?",
    answer:
      "No. We run onboarding labs to benchmark strength, mobility and cardio so we can place you safely.",
  },
  {
    question: "Is nutrition support included?",
    answer:
      "Yes. You’ll receive macro prescriptions, habit coaching and optional weekly check-ins with our registered dietitian.",
  },
  {
    question: "How does the smart programming work?",
    answer:
      "We sync wearable data, recovery scores and session feedback to adapt your training blocks every week.",
  },
]

interface sectionprops {
    id: string;
}


const Faq = ({id} : sectionprops) => {

    const [open , setOpen] = useState(null);

  return (
    <div id={id} className="w-full">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-black/60 p-6 md:p-8 lg:p-10">
            <p className="text-sm font-semibold tracking-[0.3em] text-orange-300 md:text-base">
                FAQS
            </p>
            <div className="space-y-4">
                {
                    FAQ.map((items , id) => (
                        <div key={id} className="rounded-2xl border border-white/5 bg-white/5 p-4 md:p-6">
                            <button  className="flex w-full items-center justify-between text-left"
                                onClick={() => setOpen(open === id ? null : id)}>
                                    <span className="text-base font-semibold text-white md:text-lg">
                                    {items.question}
                                    </span>
                                    <span className="text-2xl text-orange-300 md:text-3xl">
                                    {open === id ? '−' : '+'}
                                    </span>
                            </button>
                            {open === id && (
                            <p className="mt-3 text-sm text-zinc-300 md:text-base">{items.answer}</p>)}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Faq