'use client'

import Image from 'next/image'
import { TestimonialListItem } from '@/features/testimonial'

const DEFAULT_TESTIMONIAL_IMAGE = '/og/default.png'

function isLocalAsset(url: string) {
    return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${
                        star <= rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-200 text-slate-200'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    )
)

export default function TestimonialCard({ item }: { item: TestimonialListItem }) {
    const imageSrc = item.image?.trim() ? item.image : DEFAULT_TESTIMONIAL_IMAGE
    const unoptimized = isLocalAsset(imageSrc)

    return (
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-full bg-slate-100 border-2 border-slate-200">
                    <Image
                        src={imageSrc}
                        alt={item.name}
                        fill
                        sizes="64px"
                        quality={95}
                        unoptimized={unoptimized}
                        className="object-cover"
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                        {item.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                        {item.designation}
                    </p>
                </div>
            </div>

            <div className="mb-4">
                <StarRating rating={item.review_star} />
            </div>

            <p className="text-base text-slate-700 leading-relaxed italic">
                "{item.review_text}"
            </p>
        </div>
    )
}
