'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export interface HeroButton {
  text: string
  href: string
  variant: 'primary' | 'secondary'
}

export interface TrustBadge {
  icon: string
  heading: string
  subHeading: string
}

export interface HeroSlide {
  image: string
  title: string
  highlightText: string
  subtitle: string
  buttons: HeroButton[]
  trustBadges: TrustBadge[]
}

interface HeroSliderProps {
  slides: HeroSlide[]
  autoSlideInterval?: number
}

export default function VexaevHeroSlider({ slides, autoSlideInterval = 5000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (slides.length <= 1) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 500)
    }, autoSlideInterval)

    return () => clearInterval(timer)
  }, [currentSlide, slides.length, autoSlideInterval])

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  if (slides.length === 0) return null

  const slide = slides[currentSlide]

  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto ">
        <div className="relative overflow-hidden border-0 bg-transparent shadow-none sm:border sm:border-white/10 sm:bg-[#09131c] sm:shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isAnimating ? 'scale-[1.03] opacity-85' : 'scale-100 opacity-100'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071019]/96 via-[#0b1420]/80 via-42% to-[#071019]/28" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.22),transparent_18%),radial-gradient(circle_at_18%_22%,rgba(94,234,212,0.12),transparent_26%)]" />
          <div className="absolute inset-y-0 left-0 w-full max-w-[52rem] bg-[linear-gradient(90deg,rgba(7,16,25,0.96)_0%,rgba(7,16,25,0.88)_50%,rgba(7,16,25,0.18)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#04080d] via-[#04080d]/60 to-transparent" />

          <div className="relative px-5 pb-28 pt-8 sm:px-8 sm:pb-32 sm:pt-10 lg:px-12 lg:pb-40 lg:pt-12 xl:px-14">
            <div className="grid min-h-[420px] items-center gap-10 lg:min-h-[520px] lg:grid-cols-[0.86fr_1.14fr]">
              <div className="max-w-xl">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Electric For Everyone
                </div>

                <div className="mt-5 space-y-4">
                  <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.55rem]">
                    <span className="block">{slide.title}</span>
                    <span className="mt-1 block text-[#63e64e]">{slide.highlightText}</span>
                  </h1>
                  <p className="max-w-md whitespace-pre-line text-base leading-7 text-slate-200 sm:text-lg">
                    {slide.subtitle}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  {slide.buttons.map((button, index) => (
                    <Link
                      key={index}
                      href={button.href}
                      className={`inline-flex min-h-[46px] items-center justify-center rounded-md border px-6 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 sm:min-w-[162px] ${
                        button.variant === 'primary'
                          ? 'border-[#63e64e] bg-[#63e64e] text-[#071019] shadow-[0_10px_28px_rgba(99,230,78,0.35)] hover:border-[#76f45c] hover:bg-[#76f45c]'
                          : 'border-white/35 bg-[#10161d]/78 text-white shadow-[0_8px_20px_rgba(0,0,0,0.28)] backdrop-blur-sm hover:border-white/55 hover:bg-[#161d25]/88'
                      }`}
                    >
                      {button.text}
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block" />
            </div>

            {slides.length > 1 && (
              <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5 sm:bottom-26 lg:bottom-32">
                <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-[#0a1118]/75 px-3 py-2 backdrop-blur-md">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'w-7 bg-[#63e64e] shadow-[0_0_14px_rgba(99,230,78,0.65)]'
                          : 'w-2.5 bg-white/65 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 lg:inset-x-6">
              <div className="grid grid-cols-2 overflow-hidden border border-white/10 bg-[#071018]/92 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-md lg:grid-cols-4">
                {slide.trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className={`flex min-h-[124px] flex-col items-center justify-center gap-3 px-5 py-6 text-center ${
                      index > 0
                        ? 'border-t border-white/8 even:border-l even:border-white/8 lg:border-t-0 lg:border-l'
                        : ''
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#63e64e]/30 bg-[#63e64e]/10 text-[#63e64e]">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold text-white sm:text-lg">{badge.heading}</p>
                      <p className="text-sm text-slate-300">{badge.subHeading}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
