'use client'

import Image from 'next/image'
import { Calculator, ChevronDown } from 'lucide-react'

export interface SavingsItem {
  icon: string
  number?: string
  title: string
  description: string
}

interface SavingsSectionProps {
  items: SavingsItem[]
}

export default function SavingsSection({
  items,
}: SavingsSectionProps) {
  return (
       <section className="rounded-[20px] bg-gradient-to-br from-emerald-700 via-green-700 to-emerald-800 p-3 shadow-[0_28px_80px_rgba(5,68,36,0.35)] backdrop-blur-sm sm:rounded-[28px] sm:p-6 lg:p-7">
          <div className="grid items-stretch gap-3 lg:grid-cols-[1.05fr_1fr] lg:gap-5 sm:gap-4">
            <div className="rounded-[18px] bg-gradient-to-br from-emerald-700 via-emerald-700 to-green-800 p-4 text-white shadow-inner ring-1 ring-white/10 sm:rounded-[24px] sm:p-6 lg:p-7">
              <h2 className="text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl lg:text-3xl">
                Estimate Your Solar Savings
              </h2>
              <p className="mt-2 max-w-xl text-xs leading-5 text-emerald-50/90 sm:mt-3 sm:text-sm sm:leading-6">
                Enter your monthly electricity bill to calculate your potential savings.
              </p>

              <form className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-emerald-50 sm:mb-2 sm:text-sm">
                      Monthly Electricity Bill (BDT)
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 15,000"
                      className="h-12 w-full rounded-lg border border-white/20 bg-white px-3.5 text-slate-900 text-sm outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40 sm:h-14 sm:px-4"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-emerald-50 sm:mb-2 sm:text-sm">
                      Location
                    </span>
                    <div className="relative">
                      <select className="h-12 w-full appearance-none rounded-lg border border-white/20 bg-white px-3.5 pr-10 text-slate-900 text-sm outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40 sm:h-14 sm:px-4 sm:pr-11">
                        <option>Select Location</option>
                        <option>Dhaka</option>
                        <option>Chattogram</option>
                        <option>Khulna</option>
                        <option>Rajshahi</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 sm:right-4" />
                    </div>
                  </label>
                </div>

                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#ffd54a] px-5 text-sm font-semibold text-slate-900 shadow-[0_14px_30px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ffcf2f] sm:h-14 sm:gap-3 sm:px-6 sm:text-base"
                >
                  Calculate Savings
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </form>
            </div>

            <div className="rounded-[18px] bg-white p-4 shadow-[0_16px_40px_rgba(2,44,20,0.18)] ring-1 ring-black/5 sm:rounded-[24px] sm:p-6 lg:p-7">
              <h3 className="text-center text-base font-extrabold uppercase tracking-wide text-emerald-700 sm:text-lg lg:text-xl">
                Your Estimated Result
              </h3>

              <div className="mt-4 grid overflow-hidden rounded-xl border border-slate-200 bg-white sm:mt-5 sm:rounded-2xl md:grid-cols-3">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center px-3 py-4 text-center sm:px-6 sm:py-6 ${
                      index > 0 ? 'border-t border-slate-200 md:border-l md:border-t-0' : ''
                    }`}
                  >
                    <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                      <Image
                        src={item.icon}
                        alt={item.description}
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>

                    <p className="mt-3 text-xs font-medium text-slate-600 sm:mt-4 sm:text-sm">
                      {item.description}
                    </p>
                    <p className="mt-1.5 text-xl font-semibold tracking-tight text-slate-900 sm:mt-2 sm:text-2xl lg:text-[1.8rem]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

  )
}
