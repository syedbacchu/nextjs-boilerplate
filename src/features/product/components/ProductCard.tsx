'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BatteryCharging, Gauge, Users } from 'lucide-react'
import { ProductListItem } from '@/features/product'

const DEFAULT_PRODUCT_IMAGE = '/og/default.png'

function isLocalAsset(url: string) {
  return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
}

function trimText(text?: string, length: number = 120) {
  if (!text) return ''
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= length) return normalized
  return `${normalized.slice(0, length).trim()}...`
}

function getFeatureIcon(title: string) {
  const normalizedTitle = title.toLowerCase()
  if (normalizedTitle.includes('range')) return BatteryCharging
  if (normalizedTitle.includes('speed') || normalizedTitle.includes('top')) return Gauge
  if (normalizedTitle.includes('seat') || normalizedTitle.includes('sitting')) return Users
  return BatteryCharging
}

export default function ProductCard({ item }: { item: ProductListItem }) {
  const imageSrc = item.image?.trim() ? item.image : DEFAULT_PRODUCT_IMAGE
  const shortDescription = trimText(item.short_description)
  const unoptimized = isLocalAsset(imageSrc)

  const hasDiscount = item.discount > 0 && item.final_price < item.price
  const displayPrice = item.final_price
  const originalPrice = hasDiscount ? item.price : null
  const discountPercent = item.discount_type === 'percent' ? item.discount : Math.round((1 - item.final_price / item.price) * 100)

  const displayFeatures = item.features?.slice(0, 3) || []

  return (
    <Link
      href={`/products/${item.slug}`}
      className="flex h-full flex-col border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:p-6"
    >
      <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden bg-white">
        {hasDiscount && (
          <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-md shadow-sm">
            {discountPercent}% OFF
          </div>
        )}
        {item.is_featured && (
          <div className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-md shadow-sm">
            Featured
          </div>
        )}
        <Image
          src={imageSrc}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          quality={95}
          unoptimized={unoptimized}
          className="object-contain"
          priority={false}
        />
      </div>

      <h3 className="text-[2rem] font-extrabold leading-none tracking-tight text-slate-950">
        {item.name}
      </h3>

      {item.tagline && (
        <p className="mt-2 text-base text-slate-500 italic">
          {item.tagline}
        </p>
      )}

      {shortDescription && (
        <p className="mt-3 text-base text-slate-600 leading-relaxed line-clamp-3">
          {shortDescription}
        </p>
      )}

      {displayFeatures.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200 pt-5">
          {displayFeatures.map((feature) => {
            const Icon = getFeatureIcon(feature.title)
            return (
              <div key={feature.title} className="flex items-start gap-2.5">
                <Icon className="mt-0.5 h-5 w-5 text-[#7ed957]" aria-hidden="true" />
                <div>
                  <p className="text-xs text-slate-400 capitalize">{feature.title}</p>
                  <p className="text-sm font-semibold text-slate-900">{feature.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-7 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-light tracking-tight text-[#66c747]">
            ৳{displayPrice.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ৳{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.06em] text-[#66c747] transition-colors group-hover:text-[#55b039]">
          View Details
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>

      {item.stock <= 10 && item.stock > 0 && (
        <p className="mt-3 text-xs text-orange-600 font-semibold text-center">
          Only {item.stock} left in stock!
        </p>
      )}
      {item.stock === 0 && (
        <p className="mt-3 text-xs text-red-600 font-semibold text-center">
          Out of Stock
        </p>
      )}
    </Link>
  )
}
