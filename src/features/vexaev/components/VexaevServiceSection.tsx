'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BatteryCharging, Gauge, Users } from 'lucide-react'
import { SingleServiceItem } from '@/features/service'

interface ServicesSectionProps {
  services: SingleServiceItem[]
  sectionTitle?: string
  sectionDescription?: string
}

const modelMeta = [
  {
    range: '180 KM',
    topSpeed: '60 KM/H',
    seating: '4 Seater',
    price: '৳ 12,90,000',
  },
  {
    range: '150 KM',
    topSpeed: '60 KM/H',
    seating: '4 Seater',
    price: '৳ 13,90,000',
  },
  {
    range: '120 KM',
    topSpeed: '50 KM/H',
    seating: '4 Seater',
    price: '৳ 11,90,000',
  },
]

export default function VexaevServiceSection({
  services,
  sectionTitle = 'Made For City Life',
  sectionDescription = 'Compact, efficient and smart electric cars designed for your everyday journey.',
}: ServicesSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#66c747]">
            Our Models
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            {sectionTitle}
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#66c747]" />
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            {sectionDescription}
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {services.map((service, index) => {
            const meta = modelMeta[index] ?? modelMeta[modelMeta.length - 1]

            return (
              <article
                key={service.id}
                className="flex h-full flex-col border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:p-6"
              >
                <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden bg-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>

                <h3 className="text-[2rem] font-extrabold leading-none tracking-tight text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-slate-500">
                  {service.description}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200 pt-5">
                  <div className="flex items-start gap-2.5">
                    <BatteryCharging className="mt-0.5 h-5 w-5 text-[#7ed957]" />
                    <div>
                      <p className="text-xs text-slate-400">Range</p>
                      <p className="text-sm font-semibold text-slate-900">{meta.range}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Gauge className="mt-0.5 h-5 w-5 text-[#7ed957]" />
                    <div>
                      <p className="text-xs text-slate-400">Top Speed</p>
                      <p className="text-sm font-semibold text-slate-900">{meta.topSpeed}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Users className="mt-0.5 h-5 w-5 text-[#7ed957]" />
                    <div>
                      <p className="text-xs text-slate-400">Seating</p>
                      <p className="text-sm font-semibold text-slate-900">{meta.seating}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
                  <p className="text-3xl font-light tracking-tight text-[#66c747]">
                    {meta.price}
                  </p>
                  <Link
                    href={service.link ?? `/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.06em] text-[#66c747] transition-colors hover:text-[#55b039]"
                  >
                    View Details
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#66c747] bg-[#66c747] px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#55b039]"
          >
            View All Models
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
