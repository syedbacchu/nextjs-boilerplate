'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface HeroButton {
  text: string
  href: string
  variant: 'primary' | 'secondary'
  color?: string
}

export interface TrustBadge {
  icon: string
  heading: string
  subHeading: string
  image?: string | null
}

export interface HeroSlide {
  image: string
  tagline?: string
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

export default function HeroSlider({ slides, autoSlideInterval = 5000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-slide only if there's more than one slide
  useEffect(() => {
    if (slides.length <= 1) return

    const timer = setInterval(() => {
      handleNext()
    }, autoSlideInterval)

    return () => clearInterval(timer)
  }, [currentSlide, slides.length, autoSlideInterval])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  if (slides.length === 0) return null

  const slide = slides[currentSlide]

  return (
    <section className="relative overflow-hidden min-h-[420px] lg:min-h-[500px]">
      {/* Background Image with Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimating ? 'opacity-90 scale-105' : 'opacity-100 scale-100'
        }`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Blur/fade panel for the left content area */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[58%]"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(32px)',
          transform: 'scale(1.06)',
          maskImage: 'linear-gradient(90deg, black 0%, black 58%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, black 0%, black 58%, transparent 100%)',
        }}
      />

      {/* Bright left wash to match the reference composition */}
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/88 via-white/72 via-40% to-white/0 lg:w-[62%]" />

      {/* Global contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 via-slate-900/5 to-slate-950/30" />

      <div className="relative px-4 py-10 sm:px-8 lg:px-12 lg:py-12 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left Content */}
          <div className="space-y-4 lg:max-w-2xl lg:space-y-5">
            {/* Tagline */}
            {slide.tagline && (
              <div className="inline-flex items-center rounded-full border border-green-600/30 bg-green-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                {slide.tagline}
              </div>
            )}

            {/* Title Section */}
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-[3.2rem] lg:text-[3.25rem] lg:leading-[0.95]">
                {slide.title}
                <span className="mt-2 block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  {slide.highlightText}
                </span>
              </h1>
              <p className="max-w-xl text-base text-slate-700 sm:text-lg sm:leading-7">
                {slide.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {slide.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center rounded-lg px-7 py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                    button.color
                      ? 'text-white hover:shadow-xl'
                      : button.variant === 'primary'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40'
                      : 'border-2 border-emerald-200 bg-white/75 text-slate-800 backdrop-blur-sm shadow-sm hover:bg-white hover:text-green-600'
                  }`}
                  style={button.color ? {
                    backgroundColor: button.color,
                    boxShadow: `0 10px 15px -3px ${button.color}66, 0 4px 6px -2px ${button.color}66`
                  } : undefined}
                >
                  {button.text}
                  {button.variant === 'primary' && (
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="pt-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {slide.trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-2.5 shadow-sm backdrop-blur-sm">
                    {badge.image ? (
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full">
                        <img
                          src={badge.image}
                          alt={badge.heading}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                        </svg>
                      </div>
                    )}
                    <div>
                      <p className="text-base font-bold text-slate-900">{badge.heading}</p>
                      <p className="text-sm text-slate-600">{badge.subHeading}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Empty/Spacer for visual balance */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Slider Navigation - Only show if more than one slide */}
        {slides.length > 1 && (
          <div className="mt-5 flex items-center justify-center gap-3">
            {/* Previous Button */}
            {/*<button*/}
            {/*  onClick={handlePrevious}*/}
            {/*  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border-2 border-white/30 text-white shadow-md backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white hover:scale-110"*/}
            {/*  aria-label="Previous slide"*/}
            {/*>*/}
            {/*  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
            {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />*/}
            {/*  </svg>*/}
            {/*</button>*/}

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-gradient-to-r from-green-400 to-emerald-400'
                      : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            {/*<button*/}
            {/*  onClick={handleNext}*/}
            {/*  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border-2 border-white/30 text-white shadow-md backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white hover:scale-110"*/}
            {/*  aria-label="Next slide"*/}
            {/*>*/}
            {/*  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
            {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />*/}
            {/*  </svg>*/}
            {/*</button>*/}
          </div>
        )}
      </div>
    </section>
  )
}
