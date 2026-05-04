import Image from 'next/image'
import Link from 'next/link'
import { BatteryCharging, CircleAlert, Droplet, ShieldCheck, ShoppingCart } from 'lucide-react'

interface UsageStep {
  number: string
  icon: string
  title: string
  description: string
}

interface BatteryUsageSectionProps {
  steps?: UsageStep[]
  productImage?: string
  sectionTitle?: string
  sectionDescription?: string
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonHref?: string
}

const defaultSteps: UsageStep[] = [
  {
    number: '01',
    icon: 'shield',
    title: 'নিরাপত্তার জন্য গগলস',
    description: 'এবং গ্লাভস পরুন',
  },
  {
    number: '02',
    icon: 'battery',
    title: 'ব্যাটারির ক্যাপগুলো',
    description: 'সাবধানে খুলুন',
  },
  {
    number: '03',
    icon: 'droplet',
    title: 'প্রয়োজন অনুযায়ী Battery Life+',
    description: 'ব্যাটারির পানি দিন',
  },
  {
    number: '04',
    icon: 'cap',
    title: 'ক্যাপগুলো ভালোভাবে',
    description: 'বন্ধ করে দিন',
  },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: ShieldCheck,
  battery: BatteryCharging,
  droplet: Droplet,
  cap: CircleAlert,
}

export default function BatteryTestimonialSection({
  steps = defaultSteps,
  productImage = '/image/slider/battery-water-hero-reference.png',
  sectionTitle = 'কিভাবে ব্যবহার করবেন?',
  sectionDescription = 'ব্যাটারির পানির সঠিক ব্যবহার এবং প্রয়োজনীয় নিরাপত্তা মেনে Battery Life+ ব্যবহার করুন',
  ctaTitle = 'আপনার ব্যাটারির দিন সেরা যাক',
  ctaDescription = 'Battery Life+ ব্যাটারির পানি ব্যবহার করে ব্যাটারির আয়ু বাড়ান ও সর্বোচ্চ পারফরম্যান্স নিশ্চিত করুন',
  ctaButtonText = 'Buy Now',
  ctaButtonHref = '/contact-us',
}: BatteryUsageSectionProps) {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-[2.2rem]">
            {sectionTitle}
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#38c135]" />
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            {sectionDescription}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const IconComponent = iconMap[step.icon] || ShieldCheck

            return (
              <article
                key={step.number}
                className="relative rounded-[24px] border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-br-[24px] rounded-tl-[24px] bg-[#38c135] text-white">
                  <span className="text-sm font-extrabold">{step.number}</span>
                </div>

                <div className="mx-auto mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#123d63]">
                  <IconComponent className="h-14 w-14" strokeWidth={2} />
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-base font-bold leading-6 text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] bg-[#f2f8e6] shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f3f8ea] via-[#f2f8e6] to-[#eef6df]" />
              <div className="relative grid items-center gap-6 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]">
                  <Image
                    src={productImage}
                    alt="Battery Life+ product"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-right drop-shadow-[0_18px_30px_rgba(15,23,42,0.14)]"
                    unoptimized={productImage?.startsWith('http://localhost') || productImage?.startsWith('http://127.0.0.1')}
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-[2rem] font-black leading-tight text-[#0b4b72] sm:text-[2.4rem]">
                      Battery Life+
                    </h3>
                    <p className="-mt-1 text-[1.85rem] font-black leading-tight text-[#38c135] sm:text-[2.2rem]">
                      ব্যাটারির পানি
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm font-semibold text-slate-700 sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#38c135] text-white">
                        <ShieldCheck className="h-3.5 w-3.5" />
                      </span>
                      <span>100% বিশুদ্ধ ডিস্টিলড ওয়াটার</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#38c135] text-white">
                        <ShieldCheck className="h-3.5 w-3.5" />
                      </span>
                      <span>ব্যাটারির জন্য একদম নিরাপদ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#38c135] text-white">
                        <ShieldCheck className="h-3.5 w-3.5" />
                      </span>
                      <span>দীর্ঘস্থায়ী পারফরম্যান্স নিশ্চিত করে</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#38c135] text-white">
                        <ShieldCheck className="h-3.5 w-3.5" />
                      </span>
                      <span>দ্রুত ও সাশ্রয়ী ব্যাটারির যত্ন</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#39c83b] to-[#63ce34] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="flex h-full flex-col justify-center">
                <h3 className="max-w-md text-2xl font-extrabold leading-tight sm:text-3xl">
                  {ctaTitle}
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-white/95 sm:text-lg">
                  {ctaDescription}
                </p>

                <Link
                  href={ctaButtonHref}
                  className="mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-lg border border-white/70 bg-transparent px-8 py-4 text-lg font-bold shadow-[0_10px_22px_rgba(15,23,42,0.12)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {ctaButtonText}
                  <ShoppingCart className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
