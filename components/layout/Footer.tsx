

const Footer = () => {
  return (
    <div className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 text-sm text-white/70 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.3em] text-white">
            GYMFREAK
          </p>
          <p className="mt-2">
            High-performance training, data-driven coaching and immersive
            recovery under one roof.
          </p>
          <div className="mt-4 space-y-1">
              <p className="font-semibold text-white">INDIA | New Delhi</p>
              <p className="text-white/80">198 North Street, Delhi 110223</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-4 text-white/60 md:items-end">
         <div className="flex flex-wrap gap-4">
           <a href="mailto:hello@gymfreak.club" className="hover:text-white">
            ABC@gymfreak.club
          </a>
          <span>•</span>
          <a href="tel:+19175559010" className="hover:text-white">
            +1 (917) 555-9010
          </a>
          <span>•</span>
         </div>
          <p>© 2025 Gymfreak Club</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer