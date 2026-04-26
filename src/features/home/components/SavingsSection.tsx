'use client'

import Image from 'next/image'
import Link from "next/link";

export interface SavingsItem {
  icon: string
  number: string
  title: string
  description: string
}

interface SavingsSectionProps {
  items: SavingsItem[]
  sectionTitle?: string
}

export default function SavingsSection({
  items,
}: SavingsSectionProps) {
  return (
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.1] [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.3))]" />

        <div className="grid grid-cols-2">
          <div>
            <h2>Estimate Your Solar Savings</h2>
          </div>
          <div>
            <h2>Your Estimated Result</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {items.map((item, index) => (
                  <div
                      key={index}
                      className="group flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative h-20 w-20">
                        <Image
                            src={item.icon}
                            alt={item.title}
                            fill
                            className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Number */}
                      <div className="mb-2">
                  <span className="text-3xl font-bold text-green-600">
                    {item.number}
                  </span>
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  )
}
