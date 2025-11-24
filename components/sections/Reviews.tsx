'use client'
import Image from 'next/image';

const Review = [
    {
    name: "Karan P.",
    para:
      "I dropped 14% body fat while adding 50lbs to my deadlift. Every check-in is data-backed and motivating.",
    img: "/images/Reviews1.jpeg",
  },
  {
    name: "Maya L.",
    para:
      "The accountability pods and breathwork classes helped me beat burnout. Training finally feels sustainable.",
    img: "/images/Reviews2.jpeg",
  },
  {
    name: "Nate D.",
    para:
      "Elite Hybrid gave me a pro-style team. Nutrition, sleep tracking, recovery—they watch every detail.",
    img: "/images/Reviews3.avif",
  },
]

interface sectionprops {
    id: string;
}


const Reviews = ({id} : sectionprops) => {
  return (
    <div id={id} className="w-full">
      <div className="space-y-8 md:space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300 md:text-base">
            Member Voices
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            What our members say
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Review.map((items , id) => (
            <article
              key={id}
              className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 to-zinc-900/60 p-6 md:p-8 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-orange-500/50 flex-shrink-0">
                  <Image
                    src={items.img}
                    alt="image not found"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-white md:text-lg">
                    {items.name}
                  </p>
                 
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-3xl font-bold text-orange-500/50 leading-none">&ldquo;</p>
                <p className="text-sm text-zinc-200 md:text-base leading-relaxed">
                  {items.para}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews