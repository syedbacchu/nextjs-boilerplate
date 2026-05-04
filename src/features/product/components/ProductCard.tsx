'use client'

import Link from 'next/link'
import Image from 'next/image'
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

export default function ProductCard({ item }: { item: ProductListItem }) {
  const imageSrc = item.image?.trim() ? item.image : DEFAULT_PRODUCT_IMAGE
  const shortDescription = trimText(item.short_description)
  const unoptimized = isLocalAsset(imageSrc)

  const hasDiscount = item.discount > 0 && item.final_price < item.price
  const displayPrice = item.final_price
  const originalPrice = hasDiscount ? item.price : null
  const discountPercent = item.discount_type === 'percent' ? item.discount : Math.round((1 - item.final_price / item.price) * 100)

  return (
    <Link
      href={`/products/${item.slug}`}
      className="group block h-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden bg-slate-100">
        {hasDiscount && (
          <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {discountPercent}% OFF
          </div>
        )}
        {item.is_featured && (
          <div className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            Featured
          </div>
        )}
        <Image
          src={imageSrc}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={95}
          unoptimized={unoptimized}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
          {item.name}
        </h3>

        {item.tagline && (
          <p className="text-xs text-slate-500 italic">
            {item.tagline}
          </p>
        )}

        <p className="text-sm text-slate-600 leading-relaxed">
          {shortDescription || 'No description available.'}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xl font-bold text-green-600">
            ৳{displayPrice.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ৳{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Stock Status */}
        {item.stock <= 10 && item.stock > 0 && (
          <p className="text-xs text-orange-600 font-semibold">
            Only {item.stock} left in stock!
          </p>
        )}
        {item.stock === 0 && (
          <p className="text-xs text-red-600 font-semibold">
            Out of Stock
          </p>
        )}

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs text-slate-500">
          <span className="font-semibold truncate">
            {item.categories?.[0]?.name || 'Product'}
          </span>
          {item.sold > 0 && (
            <span className="whitespace-nowrap text-slate-400">
              {item.sold} sold
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
