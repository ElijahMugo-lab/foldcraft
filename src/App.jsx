import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = ['Home', 'Projects', 'Studio', 'Reach Us'];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-geist">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: '70% center' }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <div className="flex items-center gap-10">
          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Foldcraft
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <button className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:block">
          Let's Talk
        </button>

        <button
          onClick={() => setMobileMenuOpen((o) => !o)}
          className="relative z-50 flex h-10 w-10 items-center justify-center active:scale-90 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu
            size={24}
            className={`absolute text-white transition-all duration-300 ${
              mobileMenuOpen
                ? 'rotate-90 scale-0 opacity-0'
                : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <X
            size={24}
            className={`absolute text-white transition-all duration-300 ${
              mobileMenuOpen
                ? 'rotate-0 scale-100 opacity-100'
                : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden bg-black/[0.98] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'h-screen opacity-100'
            : 'pointer-events-none h-0 opacity-0'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center px-8 transition-all delay-100 duration-500 ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-3xl font-medium text-white/90 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 w-fit rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105"
          >
            Let's Talk
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs text-white/90 [animation:fadeSlideUp_0.8s_ease_0.2s_both] sm:mb-6 sm:text-sm">
            Brand & Visual Storytelling
          </p>
          <h1 className="text-3xl font-medium leading-[1.1] tracking-tight text-white [animation:fadeSlideUp_0.8s_ease_0.4s_both] sm:text-5xl md:text-6xl lg:text-7xl">
            Shaping visual <br />
            narratives, <br />
            one pixel at a time.
          </h1>
        </div>

        <div>
          <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/60 [animation:fadeSlideUp_0.8s_ease_0.7s_both] sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
            Turning vision into reality through craft, motion, and an endless
            pursuit of beauty.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform [animation:fadeSlideUp_0.8s_ease_0.9s_both] hover:scale-105 sm:px-6 sm:py-3">
            Explore Work
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
