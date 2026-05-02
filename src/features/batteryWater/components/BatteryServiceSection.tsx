'use client'

import Image from 'next/image'
import { Check, Battery, Sun, Shield, Recycle } from 'lucide-react'

interface Feature {
  title: string
  description: string
}

interface Benefit {
  icon: string
  title: string
  subtitle: string
}

interface ServicesSectionProps {
  services?: any[]
  sectionTitle?: string
  sectionDescription?: string
  features?: Feature[]
  benefits?: Benefit[]
  productImage?: string
}

const defaultFeatures: Feature[] = [
  {
    title: 'দীর্ঘ স্থায়ীত্ব',
    description: 'দীর্ঘ সময় ধরে কাজ করে'
  },
  {
    title: '100% নিরাপদ ব্যবহার',
    description: 'কোনো পার্শ্ব প্রতিক্রিয়া নেই'
  },
  {
    title: 'উচ্চ ক্ষমতা',
    description: 'সর্বোচ্চ পারফরম্যান্স নিশ্চিত করে'
  },
  {
    title: 'পরিবেশবান্ধব',
    description: 'পরিবেশের জন্য ক্ষতিকর নয়'
  }
]

const defaultBenefits: Benefit[] = [
  {
    icon: 'battery',
    title: 'দীর্ঘ স্থায়ীত্ব',
    subtitle: 'Long Durability'
  },
  {
    icon: 'sun',
    title: 'উচ্চ ক্ষমতা',
    subtitle: 'High Capacity'
  },
  {
    icon: 'shield',
    title: 'নিরাপদ ব্যবহার',
    subtitle: 'Safe Use'
  },
  {
    icon: 'recycle',
    title: 'পরিবেশবান্ধব',
    subtitle: 'Eco-Friendly'
  }
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  battery: Battery,
  sun: Sun,
  shield: Shield,
  recycle: Recycle,
}

export default function BatteryServiceSection({
  sectionTitle = 'এটি Battery Life+ মাল্টিপ্লাস কেন বেছে নেবেন?',
  sectionDescription = 'Why choose Battery Life+ Multiplus?',
  features = defaultFeatures,
  benefits = defaultBenefits,
  productImage = '/image/battery-water-product.png'
}: ServicesSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600 mb-3">
            Premium Quality
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-slate-600">
            {sectionDescription}
          </p>
        </div>

        {/* Feature Grid (2x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-green-200 transition-all duration-300 group"
            >
              {/* Green Checkmark */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>

              <div className="pr-12">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section - Why Use This Battery */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              কেন এই ব্যাটারি ব্যবহার করবেন?
            </h3>
            <p className="text-lg text-slate-600">
              Why use this battery?
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || Battery
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md group-hover:shadow-xl">
                    <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" strokeWidth={2} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {benefit.subtitle}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Product Showcase */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-transparent to-blue-100 rounded-3xl blur-3xl opacity-50" />
          <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Shield className="w-4 h-4" />
                  Quality Assured
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Battery Life+ Multiplus
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Advanced formula for extended battery life and optimal performance. Specially designed to protect your battery and ensure long-lasting power.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white rounded-xl px-6 py-4 shadow-md border border-slate-200">
                    <p className="text-sm text-slate-500 mb-1">Volume</p>
                    <p className="text-2xl font-bold text-green-600">1000ml</p>
                  </div>
                  <div className="bg-white rounded-xl px-6 py-4 shadow-md border border-slate-200">
                    <p className="text-sm text-slate-500 mb-1">Type</p>
                    <p className="text-2xl font-bold text-green-600">Distilled</p>
                  </div>
                  <div className="bg-white rounded-xl px-6 py-4 shadow-md border border-slate-200">
                    <p className="text-sm text-slate-500 mb-1">Warranty</p>
                    <p className="text-2xl font-bold text-green-600">2 Years</p>
                  </div>
                </div>
              </div>

              {/* Product Image */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl blur-2xl" />
                  <Image
                    src={productImage}
                    alt="Battery Life+ Product"
                    width={400}
                    height={500}
                    className="relative z-10 w-auto h-[350px] sm:h-[450px] object-contain drop-shadow-2xl"
                    unoptimized={productImage?.startsWith('http://localhost') || productImage?.startsWith('http://127.0.0.1')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
