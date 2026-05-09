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

  const displayFeatures = item.features?.filter(f => f.status === 1).sort((a, b) => a.sort_order - b.sort_order).slice(0, 3) || []

  return (
    <Link
      href={`/products/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        {hasDiscount && (
          <div className="absolute top-2 right-2 z-10 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-lg">
            {discountPercent}% OFF
          </div>
        )}
        {item.is_featured && (
          <div className="absolute top-2 left-2 z-10 rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white shadow-lg">
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
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title & Tagline */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {item.name}
          </h3>
          {item.tagline && (
            <p className="mt-1 text-sm text-slate-500 line-clamp-1">
              {item.tagline}
            </p>
          )}
        </div>

        {/* Description */}
        {shortDescription && (
          <p className="mb-4 text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1 text-justify">
            {shortDescription}
          </p>
        )}

        {/* Features */}
        {displayFeatures.length > 0 && (
          <div className="mb-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
            {displayFeatures.map((feature) => {
              const Icon = getFeatureIcon(feature.title)
              return (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  <Icon className="mb-1 h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <p className="text-[10px] text-slate-500 capitalize leading-tight">{feature.title}</p>
                  <p className="text-xs font-semibold text-slate-900 leading-tight">{feature.sub_title}</p>
                </div>
              )
            })}
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-emerald-600">
              ৳{displayPrice.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                ৳{originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 transition-colors">
            View
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        {/* Stock Status */}
        {item.stock <= 10 && item.stock > 0 && (
          <p className="mt-3 text-center text-xs font-semibold text-orange-600">
            Only {item.stock} left!
          </p>
        )}
        {item.stock === 0 && (
          <p className="mt-3 text-center text-xs font-semibold text-red-600">
            Out of Stock
          </p>
        )}
      </div>
    </Link>
  )
}
