'use client'

import Link from 'next/link'
import Image from 'next/image'
import { StatListItem } from '@/features/stat'

const DEFAULT_STAT_IMAGE = '/og/default.png'

function isLocalAsset(url: string) {
    return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
}

export default function StatCard({ item }: { item: StatListItem }) {
    const imageSrc = item.image?.trim() ? item.image : DEFAULT_STAT_IMAGE
    const unoptimized = isLocalAsset(imageSrc)
    const CardWrapper = item.link ? Link : 'div'
    const wrapperProps = item.link ? { href: item.link } : {}

    return (
        <CardWrapper
            {...wrapperProps}
            className={`group block h-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${item.link ? 'cursor-pointer' : ''}`}
        >
            <div className="p-8 flex flex-col items-center justify-center text-center h-full gap-4">
                {imageSrc && (
                    <div className="relative w-20 h-20 overflow-hidden rounded-full bg-slate-50 mb-2">
                        <Image
                            src={imageSrc}
                            alt={item.title}
                            fill
                            sizes="80px"
                            quality={95}
                            unoptimized={unoptimized}
                            className="object-cover"
                        />
                    </div>
                )}

                <h3 className="text-4xl md:text-5xl font-black text-blue-600 leading-tight">
                    {item.title}
                </h3>

                <p className="text-base md:text-lg text-slate-600 font-medium">
                    {item.subtitle}
                </p>
            </div>
        </CardWrapper>
    )
}
