'use client'

import { Check, Shield, Droplet, Flame, AlertTriangle } from 'lucide-react'
import {HomeFeature} from "@/features/home";

interface Feature {
  title: string
  description: string
  icon?: string
}

interface ServicesSectionProps {
  sectionDescription?: string
  features?: Feature[]
  apiFeatures?: HomeFeature[]
}

const defaultFeatures: Feature[] = [
  {
    title: 'ব্যাটারির মেয়াদ বৃদ্ধি করে',
    description: 'নিয়মিত ব্যবহার ব্যাটারির আয়ু বাড়ায় এবং পারফরম্যান্স ঠিক রাখে',
    icon: 'shield',
  },
  {
    title: '100% বিশুদ্ধ ডিস্টিলড ওয়াটার',
    description: 'কোনো ক্ষতিকর খনিজ বা দূষণ নেই, তাই ব্যাটারির জন্য নিরাপদ',
    icon: 'droplet',
  },
  {
    title: 'পারফরম্যান্স উন্নত করে',
    description: 'ব্যাটারির ভেতরের প্রতিক্রিয়া স্থিতিশীল রেখে চার্জ ধরে রাখে',
    icon: 'flame',
  },
  {
    title: 'নিরাপদ ও নির্ভরযোগ্য',
    description: 'সঠিক ফর্মুলা ব্যবহার করে লিকেজ ও ক্ষয় কমাতে সাহায্য করে',
    icon: 'check',
  },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  check: Check,
  shield: Shield,
  droplet: Droplet,
  flame: Flame,
  alert: AlertTriangle,
}

export default function BatteryServiceSection({
  sectionDescription = 'নিরাপদ, বিশুদ্ধ ও কার্যকর সমাধান যা ব্যাটারির দীর্ঘস্থায়ী পারফরম্যান্স নিশ্চিত করে',
  features = defaultFeatures,
  apiFeatures,
}: ServicesSectionProps) {
  // Map API features to component features if provided
  const displayFeatures = apiFeatures && apiFeatures.length > 0
    ? apiFeatures.map((apiFeature) => ({
        title: apiFeature.title,
        description: apiFeature.short_description || apiFeature.description,
        icon: 'shield', // Default icon for API features
      }))
    : features
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-3xl lg:text-[2.1rem]">
            <span className="text-slate-950">কেন </span>
            <span className="text-[#0b4b72]">Battery Life+</span>
            <span className="text-[#36c23a]"> ব্যাটারির পানি</span>
            <span className="text-slate-950"> ব্যবহার করবেন?</span>
          </h2>
          <p className="mt-4 text-sm font-medium text-slate-600 sm:text-base">
            {sectionDescription}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {displayFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon || 'check'] || Check

            return (
              <div
                key={index}
                className="rounded-[24px] border border-slate-200 bg-white px-5 py-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#32cc34]/12 text-[#32cc34]">
                  <IconComponent className="h-8 w-8" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-base font-bold leading-6 text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
