'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Droplet, Leaf, Shield, ShoppingCart, Zap } from 'lucide-react'

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
  mobileImage?: string
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

export default function BatteryHeroSlider({ slides, autoSlideInterval = 5000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, slides.length])

  useEffect(() => {
    if (slides.length <= 1) return

    const timer = setInterval(() => {
      handleNext()
    }, autoSlideInterval)

    return () => clearInterval(timer)
  }, [handleNext, slides.length, autoSlideInterval])

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  if (slides.length === 0) return null

  const slide = slides[currentSlide]
  const backgroundImage = slide.image

  return (
    <section className="relative overflow-hidden min-h-[500px] sm:min-h-[620px] lg:min-h-[760px]">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimating ? 'opacity-90 scale-105' : 'opacity-100 scale-100'
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: '78% center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[58%]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: '82% center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(32px)',
          transform: 'scale(1.06)',
          maskImage: 'linear-gradient(90deg, black 0%, black 58%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, black 0%, black 58%, transparent 100%)',
        }}
      />

      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/92 via-white/82 via-45% to-white/0 lg:w-[62%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 via-slate-900/5 to-slate-950/30" />

      <div className="relative px-4 py-10 pb-18 sm:px-8 lg:px-12 lg:py-14 lg:pb-20 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="space-y-4 lg:max-w-2xl lg:space-y-6">
            {slide.tagline && (
              <div className="inline-flex items-center rounded-full border border-green-600/30 bg-green-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                {slide.tagline}
              </div>
            )}

            <div className="space-y-3">
              <h1 className="text-[2.95rem] font-black tracking-tight text-[#0b4b72] sm:text-[4.15rem] lg:text-[4.65rem] lg:leading-[0.92]">
                {slide.title}
                <span className="mt-2 block bg-gradient-to-r from-[#5cbf20] to-[#35d13f] bg-clip-text text-transparent">
                  {slide.highlightText}
                </span>
              </h1>
              <p className="max-w-xl text-lg font-medium text-[#123e5a] sm:text-xl sm:leading-8">
                {slide.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-1 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-slate-300/80">
              {slide.trustBadges.map((badge, index) => {
                const BadgeIcon =
                  badge.icon === 'droplet' ? Droplet :
                  badge.icon === 'shield' ? Shield :
                  badge.icon === 'zap' ? Zap :
                  badge.icon === 'leaf' ? Leaf : Check

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center px-0 py-2 text-center sm:px-3 ${
                      index > 0 ? 'sm:pl-5' : ''
                    }`}
                  >
                    {badge.image ? (
                      <div className="mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
                        <Image
                          src={badge.image}
                          alt={badge.heading}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="mb-3 flex h-12 w-12 items-center justify-center text-[#32cc34]">
                        <BadgeIcon className="h-11 w-11" />
                      </div>
                    )}
                    <p className="text-[15px] font-semibold leading-5 text-[#123e5a] sm:text-[16px]">
                      {badge.heading}
                    </p>
                    <p className="mt-1 text-[15px] font-semibold leading-5 text-[#123e5a] sm:text-[16px]">
                      {badge.subHeading}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              {slide.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex min-w-[170px] items-center justify-center rounded-lg px-7 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                    button.color
                      ? 'text-white hover:shadow-xl'
                      : button.variant === 'primary'
                      ? 'bg-gradient-to-r from-[#5ec328] to-[#45d834] text-white shadow-[0_14px_28px_rgba(72,200,54,0.32)] hover:shadow-[0_18px_34px_rgba(72,200,54,0.38)]'
                      : 'border-2 border-[#95e06e] bg-white/80 text-[#55b626] shadow-sm hover:bg-white hover:text-[#39b41d]'
                  }`}
                  style={
                    button.color
                      ? {
                          backgroundColor: button.color,
                          boxShadow: `0 10px 15px -3px ${button.color}66, 0 4px 6px -2px ${button.color}66`,
                        }
                      : undefined
                  }
                >
                  {button.text}
                  {button.variant === 'primary' && (
                    <ShoppingCart className="ml-2 h-5 w-5" />
                  )}
                  {button.variant !== 'primary' && (
                    <ArrowRight className="ml-2 h-5 w-5" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>

      </div>

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center px-4 sm:bottom-5">
          <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-lg backdrop-blur-sm">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-gradient-to-r from-green-400 to-emerald-400'
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
