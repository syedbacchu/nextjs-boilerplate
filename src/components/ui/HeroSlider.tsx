'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {slide.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mt-2">
                  {slide.highlightText}
                </span>
              </h1>
              <p className="max-w-xl text-lg text-gray-200 sm:text-xl">
                {slide.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {slide.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
                    button.variant === 'primary'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40'
                      : 'border-2 border-white bg-white/10 text-white backdrop-blur-sm shadow-sm hover:bg-white hover:text-green-600'
                  }`}
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
            <div className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {slide.trustBadges.map((badge, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-2 backdrop-blur-sm">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-white">{badge.heading}</p>
                    <p className="text-xs text-gray-300">{badge.subHeading}</p>
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
          <div className="flex items-center justify-center gap-3 mt-8">
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
