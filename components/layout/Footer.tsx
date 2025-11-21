

const Footer = () => {
  return (
    <div className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
            Gymfreak
          </p>
          <p className="mt-2">
            High-performance training, data-driven coaching and immersive
            recovery under one roof.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-white/60">
          <a href="mailto:hello@gymfreak.club" className="hover:text-white">
            ABC@gymfreak.club
          </a>
          <span>•</span>
          <a href="tel:+19175559010" className="hover:text-white">
            +1 (917) 555-9010
          </a>
          <span>•</span>
          <p>© {new Date().getFullYear()} Gymfreak Club</p>
        </div>
      </div>
    </div>
  )
}

export default Footer