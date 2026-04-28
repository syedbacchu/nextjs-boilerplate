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

export default function VexaevSavingsSection({
  items,
}: SavingsSectionProps) {
  return (
       <section className="rounded-[28px] bg-gradient-to-br from-emerald-700 via-green-700 to-emerald-800  p-4 shadow-[0_28px_80px_rgba(5,68,36,0.35)] backdrop-blur-sm sm:p-6 lg:p-7">
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.05fr_1fr] lg:gap-5">
            <div className="rounded-[24px] bg-gradient-to-br from-emerald-700 via-emerald-700 to-green-800 p-5 text-white shadow-inner ring-1 ring-white/10 sm:p-6 lg:p-7">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
                Estimate Your Solar Savings
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-50/90 sm:text-base">
                Enter your monthly electricity bill to calculate your potential savings.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-emerald-50">
                      Monthly Electricity Bill (BDT)
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 15,000"
                      className="h-14 w-full rounded-lg border border-white/20 bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-emerald-50">
                      Location
                    </span>
                    <div className="relative">
                      <select className="h-14 w-full appearance-none rounded-lg border border-white/20 bg-white px-4 pr-11 text-slate-900 outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40">
                        <option>Select Location</option>
                        <option>Dhaka</option>
                        <option>Chattogram</option>
                        <option>Khulna</option>
                        <option>Rajshahi</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    </div>
                  </label>
                </div>

                <button
                  type="button"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#ffd54a] px-6 text-base font-semibold text-slate-900 shadow-[0_14px_30px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ffcf2f]"
                >
                  Calculate Savings
                  <Calculator className="h-5 w-5" />
                </button>
              </form>
            </div>

            <div className="rounded-[24px] bg-white p-5 shadow-[0_16px_40px_rgba(2,44,20,0.18)] ring-1 ring-black/5 sm:p-6 lg:p-7">
              <h3 className="text-center text-lg font-extrabold uppercase tracking-wide text-emerald-700 sm:text-xl">
                Your Estimated Result
              </h3>

              <div className="mt-5 grid overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-3">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center px-4 py-6 text-center sm:px-6 ${
                      index > 0 ? 'border-t border-slate-200 md:border-l md:border-t-0' : ''
                    }`}
                  >
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16">
                      <Image
                        src={item.icon}
                        alt={item.description}
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>

                    <p className="mt-4 text-sm font-medium text-slate-600">
                      {item.description}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.8rem]">
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
