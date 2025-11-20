'use client'

import Logo from "../../public/images/logo.png"
import Image from "next/image";
import { useState } from "react";

const NavItems = [
  {
    lable : 'Programs',
    href : '#programs'
  },
  {
    lable : 'Pricing',
    href : '#pricing'
  }, 
  {
    lable : 'Coaches',
    href : '#Coaches'
  }, 
  {
    lable : 'Reviews',
    href : '#Reviews'
  }, 
  {
    lable : 'FAQ',
    href : '#faq'
  },
  {
    lable : 'Visit',
    href : '#visit'
  },
]

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050608] text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Image src={Logo} alt="image not found" className="bg-black w-22 h-16" />
        <div className="hidden items-center gap-6 md:flex">
            {
              NavItems.map((items , id) => (
                <a key={id} href={items.href} onClick={() => setOpen(false)}
                className="text-white/70 transition hover:text-white">
                  {items.lable}
                </a>
              ))
            }
        <a
            href="#register"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:-translate-y-0.5"
          >
            Book Session
        </a>
        </div>
         <button
          aria-label="Toggle menu"
          className="rounded-full border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

        {
          open && (
                <div className="border-t border-white/10 bg-black/80 px-6 py-4 md:hidden">
          {
            NavItems.map((items , id) => (
              <a
                key={id}
                href={items.href}
                onClick={() => setOpen(false)}
                className="text-white/70 transition hover:text-white flex flex-col gap-5 text-lg"
              >
                {items.lable}
              </a>
            ))
          }
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black"
          >
            Book Session
          </a>
        </div>
          )
        }

    </header>
  )
}

export default Header