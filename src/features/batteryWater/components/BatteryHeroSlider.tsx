'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Droplet, Shield, Zap, Leaf } from 'lucide-react'

export interface HeroButton {
  text: string
  href: string
  variant: 'primary' | 'secondary'
  color?: string
}

export interface FeatureBadge {
  icon: string
  text: string
}

export interface HeroSlide {
  image: string
  title: string
  subtitle: string
  description: string
  features: FeatureBadge[]
  buttons: HeroButton[]
}

interface HeroSliderProps {
  slides: HeroSlide[]
  autoSlideInterval?: number
}

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  droplet: Droplet,
  shield: Shield,
  zap: Zap,
  leaf: Leaf,
  check: Check,
}

export default function BatteryHeroSlider({ slides, autoSlideInterval = 5000 }: HeroSliderProps) {
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
  const IconComponent = featureIcons[slide.features[0]?.icon] || Check

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Decorative leaf patterns */}
      <div className="absolute top-10 right-10 opacity-10 text-green-500">
        <Leaf className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 text-green-500">
        <Leaf className="w-24 h-24 transform rotate-180" />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-12 lg:py-20">
            {/* Left Content */}
            <div
              className={`transition-all duration-500 ${
                isAnimating ? 'translate-y-2 opacity-90' : 'translate-y-0 opacity-100'
              }`}
            >
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                  Premium Battery Water
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-2">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-2xl sm:text-3xl font-semibold text-green-600 mb-4">
                {slide.subtitle}
              </p>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                {slide.description}
              </p>

              {/* Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {slide.features.map((feature, index) => {
                  const FeatureIcon = featureIcons[feature.icon] || Check
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <FeatureIcon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-sm font-semibold text-green-700">
                        {feature.text}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {slide.buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                      button.variant === 'primary'
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:shadow-xl hover:shadow-green-600/40'
                        : 'bg-white text-green-600 border-2 border-green-500 hover:bg-green-50'
                    }`}
                  >
                    {button.text}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Product Image */}
            <div
              className={`relative transition-all duration-500 ${
                isAnimating ? 'scale-105 opacity-95' : 'scale-100 opacity-100'
              }`}
            >
              {/* Circular base */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-green-100 to-transparent opacity-50 blur-3xl" />
              </div>

              {/* Water splash effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-green-400/20 rounded-full blur-2xl" />
                </div>
              </div>

              {/* Product Image */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl blur-2xl" />
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={400}
                    height={500}
                    className="relative z-10 w-auto h-[400px] sm:h-[500px] object-contain drop-shadow-2xl"
                    unoptimized={slide.image?.startsWith('http://localhost') || slide.image?.startsWith('http://127.0.0.1')}
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 right-10 animate-bounce">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  100% Pure
                </div>
              </div>
            </div>
          </div>

          {/* Slider Navigation */}
          {slides.length > 1 && (
            <div className="flex justify-center pb-8">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 bg-green-500 shadow-lg shadow-green-500/50'
                        : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
