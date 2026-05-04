'use client'

import Image from 'next/image'
import { Droplet, Zap, Wrench, Shield } from 'lucide-react'
import {HomeStat} from "@/features/home";

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
  stats?: HomeStat[]
}

const defaultSteps = [
  {
    icon: 'droplet',
    title: 'পানি যোগ করুন',
    subtitle: 'Add Water',
  },
  {
    icon: 'zap',
    title: 'নিয়মিত পরীক্ষা করুন',
    subtitle: 'Check Regularly',
  },
  {
    icon: 'wrench',
    title: 'সঠিক সংযোগ নিশ্চিত করুন',
    subtitle: 'Keep Connected',
  },
  {
    icon: 'shield',
    title: 'দীর্ঘস্থায়ী পারফরম্যান্স পান',
    subtitle: 'Stay Protected',
  },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  droplet: Droplet,
  zap: Zap,
  wrench: Wrench,
  shield: Shield,
}

export default function BatterySavingsSection({
  items,
  productImage = '/image/slider/battery_slider.jpg',
  sectionTitle = 'কখন ব্যবহার করবেন?',
  sectionSubtitle = 'নিয়মিত ব্যাটারির পানি চেক করুন এবং প্রয়োজন অনুযায়ী Battery Life+ ব্যবহার করুন',
  stats,
}: SavingsSectionProps) {
  // Use stats from API if available, otherwise use items or default steps
  const steps = stats && stats.length > 0
    ? stats.map((stat, index) => ({
        icon: ['droplet', 'zap', 'wrench', 'shield'][index % 4],
        title: stat.title,
        subtitle: stat.subtitle,
      }))
    : items?.map((item) => ({
        icon: item.icon || 'droplet',
        title: item.title,
        subtitle: item.description,
      })) || defaultSteps

  return (
    <section className="bg-white py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[26px] bg-[#eef6df] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                  {sectionTitle}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                  {sectionSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-[22px] border border-slate-200/60 bg-white/30 sm:grid-cols-4">
                {steps.map((step, index) => {
                  const IconComponent = iconMap[step.icon] || Droplet

                  return (
                    <div
                      key={`${step.title}-${index}`}
                      className={`flex flex-col items-center px-3 py-5 text-center ${
                        index !== 0 ? 'border-l border-slate-200/80' : ''
                      }`}
                    >
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                        <IconComponent className="h-8 w-8 text-[#31c83a]" strokeWidth={2.2} />
                      </div>
                      <p className="text-sm font-bold leading-5 text-slate-800">
                        {step.title}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-5 text-slate-600">
                        {step.subtitle}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative min-h-[280px] lg:min-h-[360px]">
              <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-white/40 to-white/10" />
              <div className="relative flex h-full items-end justify-center">
                <div className="relative h-[260px] w-full max-w-[420px] sm:h-[320px] lg:h-[360px]">
                  <Image
                    src={productImage}
                    alt="Battery product"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-center drop-shadow-[0_20px_30px_rgba(15,23,42,0.16)]"
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
