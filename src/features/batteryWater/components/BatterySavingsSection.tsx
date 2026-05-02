'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Droplet, Zap, Wrench, Shield } from 'lucide-react'

export interface SavingsItem {
  title: string
  description: string
  icon?: string
  key?: string
}

interface SavingsSectionProps {
  items?: SavingsItem[]
  productImage?: string
  sectionTitle?: string
  sectionSubtitle?: string
}

const defaultSteps = [
  {
    number: 1,
    icon: 'droplet',
    title: 'পানি পূরণ করুন',
    subtitle: 'Fill with Water',
    description: 'ব্যাটারির পানির স্তর পরীক্ষা করুন এবং প্রয়োজনীয় পানি যোগ করুন'
  },
  {
    number: 2,
    icon: 'zap',
    title: 'চার্জ করুন',
    subtitle: 'Charge It',
    description: 'ব্যাটারি সঠিকভাবে চার্জ হচ্ছে তা নিশ্চিত করুন'
  },
  {
    number: 3,
    icon: 'wrench',
    title: 'সংযুক্ত করুন',
    subtitle: 'Connect',
    description: 'ব্যাটারি সঠিকভাবে সংযুক্ত আছে কিনা পরীক্ষা করুন'
  },
  {
    number: 4,
    icon: 'shield',
    title: 'উপভোগ করুন',
    subtitle: 'Enjoy',
    description: 'দীর্ঘস্থায়ী ব্যাটারি পারফরম্যান্স উপভোগ করুন'
  }
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  droplet: Droplet,
  zap: Zap,
  wrench: Wrench,
  shield: Shield,
}

export default function BatterySavingsSection({
  items,
  productImage = '/image/battery-water-product.png',
  sectionTitle = 'ব্যাটারির আয়ুষ্কাল বৃদ্ধি করুন',
  sectionSubtitle = 'Extend Your Battery Life'
}: SavingsSectionProps) {
  const steps = items?.map((item, index) => ({
    number: index + 1,
    icon: item.icon || 'droplet',
    title: item.title,
    subtitle: item.description,
    description: item.description
  })) || defaultSteps

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600 mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-slate-600">
            {sectionSubtitle}
          </p>
        </div>

        {/* Split Screen Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Product Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-transparent to-blue-100 rounded-3xl blur-3xl opacity-50" />
            <div className="relative bg-gradient-to-br from-slate-100 to-white rounded-3xl p-8 sm:p-12 shadow-xl">
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl blur-2xl" />
                  <Image
                    src={productImage}
                    alt="Battery Water Product"
                    width={400}
                    height={500}
                    className="relative z-10 w-auto h-[350px] sm:h-[450px] object-contain drop-shadow-2xl"
                    unoptimized={productImage?.startsWith('http://localhost') || productImage?.startsWith('http://127.0.0.1')}
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                4 Easy Steps
              </div>
            </div>
          </div>

          {/* Right - Steps */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {steps.map((step) => {
                const IconComponent = iconMap[step.icon] || Droplet
                return (
                  <div
                    key={step.number}
                    className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-green-200"
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>

                    <div className="flex items-start gap-5 pl-8">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7 text-green-600" strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm font-semibold text-green-600 mb-2">
                          {step.subtitle}
                        </p>
                        <p className="text-base text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                এখনই কিনুন
                <span className="text-green-100">Buy Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
