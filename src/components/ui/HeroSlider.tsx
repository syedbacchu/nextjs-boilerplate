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
  mobile_banner?: string
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
    <section className="relative overflow-hidden min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
      {/* Background Image with Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimating ? 'opacity-90 scale-105' : 'opacity-100 scale-100'
        }`}
        style={{
          backgroundImage: `url(${slide.mobile_banner || slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Desktop background image (hidden on mobile) */}
      <div
        className="hidden lg:block absolute inset-0 transition-opacity duration-500"
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
          backgroundImage: `url(${slide.mobile_banner || slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(32px)',
          transform: 'scale(1.06)',
          maskImage: 'linear-gradient(90deg, black 0%, black 58%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, black 0%, black 58%, transparent 100%)',
        }}
      />

      {/* Desktop blur panel (hidden on mobile) */}
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-full lg:w-[58%]"
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

      <div className="relative px-3 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-12 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left Content */}
          <div className="space-y-3 lg:max-w-2xl lg:space-y-5">
            {/* Tagline */}
            {slide.tagline && (
              <div className="inline-flex items-center rounded-full border border-green-600/30 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-green-700 sm:px-4 sm:py-1.5 sm:text-sm sm:tracking-[0.2em]">
                {slide.tagline}
              </div>
            )}

            {/* Title Section */}
            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-[3.25rem] lg:leading-[0.95]">
                {slide.title}
                <span className="mt-1 sm:mt-2 block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  {slide.highlightText}
                </span>
              </h1>
              <p className="max-w-xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                {slide.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              {slide.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] sm:px-7 sm:py-3 sm:text-base ${
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
                    <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="pt-2">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {slide.trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-sm sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-2.5">
                    {badge.image ? (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full sm:h-11 sm:w-11">
                        <img
                          src={badge.image}
                          alt={badge.heading}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-600 sm:h-11 sm:w-11">
                        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                        </svg>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-bold text-slate-900 sm:text-base">{badge.heading}</p>
                      <p className="text-xs text-slate-600 sm:text-sm">{badge.subHeading}</p>
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
          <div className="mt-4 flex items-center justify-center gap-3 sm:mt-5">
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
                  className={`h-2.5 rounded-full transition-all duration-300 sm:h-3 ${
                    index === currentSlide
                      ? 'w-6 bg-gradient-to-r from-green-400 to-emerald-400 sm:w-8'
                      : 'w-2.5 bg-white/30 hover:bg-white/50 sm:w-3'
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
