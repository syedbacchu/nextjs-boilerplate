'use client'

import Link from 'next/link'
import Image from 'next/image'
import { TeamListItem } from '@/features/team'

const DEFAULT_TEAM_IMAGE = '/og/default.png'

function isLocalAsset(url: string) {
    return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
}

export default function TeamCard({ item }: { item: TeamListItem }) {
    const imageSrc = item.image?.trim() ? item.image : DEFAULT_TEAM_IMAGE
    const unoptimized = isLocalAsset(imageSrc)

    return (
        <Link
            href={`/team/${item.slug}`}
            className="group block h-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
            <div className="relative h-64 overflow-hidden bg-slate-100">
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

            <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2">
                    {item.name}
                </h3>

                <p className="text-sm text-blue-600 font-medium">
                    {item.designation}
                </p>
            </div>
        </Link>
    )
}
