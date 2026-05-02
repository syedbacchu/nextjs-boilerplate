'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ProjectListItem } from '@/features/project'

const DEFAULT_PROJECT_IMAGE = '/og/default.png'

function isLocalAsset(url: string) {
    return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
}

function trimText(text?: string, length: number = 170) {
    if (!text) return ''
    const normalized = text.replace(/\s+/g, ' ').trim()
    if (normalized.length <= length) return normalized
    return `${normalized.slice(0, length).trim()}...`
}

function formatDate(value?: string) {
    if (!value) return null
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return null
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

function getStatusBadge(status: string) {
    const variants = {
        ongoing: 'bg-blue-100 text-blue-700 border-blue-200',
        completed: 'bg-green-100 text-green-700 border-green-200',
        upcoming: 'bg-amber-100 text-amber-700 border-amber-200',
    }
    return variants[status as keyof typeof variants] || variants.ongoing
}

export default function ProjectCard({ item }: { item: ProjectListItem }) {
    const imageSrc = item.thumbnail?.trim() ? item.thumbnail : DEFAULT_PROJECT_IMAGE
    const shortDescription = trimText(item.short_description)
    const unoptimized = isLocalAsset(imageSrc)
    const startDate = formatDate(item.start_date)
    const endDate = formatDate(item.end_date)

    return (
        <Link
            href={`/projects/${item.slug}`}
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
                <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(item.project_status)}`}>
                        {item.project_status}
                    </span>
                </div>
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
                        {item.category?.name || 'Project'}
                    </span>
                    {startDate && (
                        <span className="whitespace-nowrap">
                            {startDate}{endDate ? ` - ${endDate}` : ''}
                        </span>
                    )}
                </div>

                {item.is_featured && (
                    <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                            Featured
                        </span>
                    </div>
                )}
            </div>
        </Link>
    )
}
