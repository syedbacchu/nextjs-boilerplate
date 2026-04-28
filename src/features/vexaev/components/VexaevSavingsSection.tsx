'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BatteryCharging, Calculator, CircleDollarSign, House, PlugZap } from 'lucide-react'

export interface SavingsItem {
  title: string
  description: string
  icon?: string
  key?: 'home' | 'public' | 'portable' | 'cost'
}

interface SavingsSectionProps {
  items: SavingsItem[]
}

const chargingIcons = {
  home: House,
  public: PlugZap,
  portable: BatteryCharging,
  cost: CircleDollarSign,
} as const

export default function VexaevSavingsSection({
  items,
}: SavingsSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch overflow-hidden bg-[#f9fbf6] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#69c84a]">
              About VEXA EV
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Driving Bangladesh Towards a Cleaner Future
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              VEXA EV is a homegrown electric car brand with a mission to make electric mobility
              affordable and accessible for everyone. Our vehicles are designed for the city, built
              for efficiency, and made for you.
            </p>

            <div className="mt-8 space-y-5">
              {[
                ['Affordable Ownership', 'Low cost, easy EMI options'],
                ['Environment Friendly', 'Zero emissions, better tomorrow'],
                ['Smart & Reliable', 'Advanced technology, trusted performance'],
                ['Local Support', 'Service centers & support across Bangladesh'],
              ].map(([title, copy]) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#68ca45] text-white">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12l4 4L19 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm text-slate-500">{copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                href="/about-us"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#69c84a] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#57b73a]"
              >
                Learn More About Us
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
            <Image
              src="/image/slider/car2.webp"
              alt="VEXA electric car"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/0 to-slate-900/8 lg:from-white/30" />

            <div className="absolute bottom-6 left-6 right-6 bg-[#11171d] p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:bottom-8 sm:left-8 sm:right-8 sm:p-6 lg:max-w-[420px]">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#69c84a]/12 text-[#69c84a]">
                  <Calculator className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight">Calculate Your Savings</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Save up to ৳ 5,000 - 7,000 per month compared to fuel cars.
                  </p>
                  <Link
                    href="/contact-us"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[#69c84a]"
                  >
                    Calculate Now
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#69c84a]">
              Charging Made Easy
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Charge Anywhere, Anytime
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 bg-[#69c84a]" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => {
              const Icon = chargingIcons[item.key ?? 'home']

              return (
                <div key={`${item.title}-${index}`} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#69c84a]/10 text-[#69c84a]">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[16rem] text-base leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#69c84a] px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#57b73a]"
            >
              Find Charging Stations
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
