'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FeatureListItem } from '@/features/feature'

const DEFAULT_FEATURE_IMAGE = '/og/default.png'

function isLocalAsset(url: string) {
    return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
}

function trimText(text?: string, length: number = 170) {
    if (!text) return ''
    const normalized = text.replace(/\s+/g, ' ').trim()
    if (normalized.length <= length) return normalized
    return `${normalized.slice(0, length).trim()}...`
}

export default function FeatureCard({ item }: { item: FeatureListItem }) {
    const imageSrc = item.thumbnail?.trim() ? item.thumbnail : DEFAULT_FEATURE_IMAGE
    const shortDescription = trimText(item.short_description)
    const unoptimized = isLocalAsset(imageSrc)

    return (
        <Link
            href={`/features/${item.slug}`}
            className="group block h-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
            <div className="relative h-52 overflow-hidden bg-slate-100">
                <Image
                    src={imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={95}
                    unoptimized={unoptimized}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-4 flex flex-col gap-3 h-[calc(100%-13rem)]">
                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                    {shortDescription || 'No short description available.'}
                </p>

                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="font-semibold truncate">
                        {item.category?.name || 'Feature'}
                    </span>
                    {item.is_featured && <span className="whitespace-nowrap">Featured</span>}
                </div>
            </div>
        </Link>
    )
}
