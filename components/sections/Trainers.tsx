'use client'
import Image from 'next/image';

const trainers = [
    {
    name: "John Carter",
    specialty: "Strength & Olympic Lifts",
    bio: "USA Weightlifting coach with 12 national podium athletes.",
    image: '/images/trainer1.avif',
  },
  {
    name: "Amirit Singh",
    specialty: "Metabolic Conditioning",
    bio: "Former pro sprinter, builds unbreakable engines & speed.",
    image: '/images/trainer2.avif',
  },
  {
    name: "Neo lake",
    specialty: "Mobility & Recovery",
    bio: "FRC specialist keeping athletes fluid, mobile and pain-free.",
    image: '/images/trainer3.avif',
  },
]

interface sectionprops {
    id: string;
}


const Trainers = ({id} : sectionprops) => {
  return (
     <div id={id} className="w-full">
      <div className="space-y-8 md:space-y-12">
        <div className="text-center space-y-4 md:space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300 md:text-base">
            Trainers
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Coaches obsessed with your progress
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-zinc-300 md:text-base lg:text-lg">
            Our trainers combine pro-level expertise with data-backed insights.
            Expect tight feedback loops, personalized adjustments and relentless
            support.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((items, id) => (
            <article
              key={id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 to-zinc-900/60 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={items.image}
                  alt="image not found"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-orange-500/90 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    {items.specialty}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 space-y-3">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {items.name}
                </h3>
                <p className="text-sm text-zinc-300 md:text-base leading-relaxed">
                  {items.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trainers