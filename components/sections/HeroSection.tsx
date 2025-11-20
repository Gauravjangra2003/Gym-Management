

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-6 text-center md:gap-8">
        <p className="mx-auto w-fit rounded-full bg-white/10 px-4 py-1 text-sm font-semibold tracking-[0.2em] text-orange-300">
            GYMFREAK PERFORMANCE CLUB 
        </p> 
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        Build a stronger body, sharper mind and unstoppable energy.
        </h1>
        <p className="text-base text-zinc-300 sm:text-lg md:text-xl">
            Progressive programming, immersive recovery and elite coaching shaped
            into one membership. Train hybrid, stay athletic, feel limitless.
        </p>
         <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <button className="rounded-full bg-white px-8 py-3 text-base font-semibold text-black shadow-2xl shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-100">
          Start a free performance session
        </button>
        <button className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:text-orange-200">
          Watch how it works
        </button>
      </div>
    </div>
  )
}

export default HeroSection