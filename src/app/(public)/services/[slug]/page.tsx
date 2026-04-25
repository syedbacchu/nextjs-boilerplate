import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServicePublicAction } from '@/features/service'
import { constructMetadata } from '@/lib/seo'

const DEFAULT_SERVICE_IMAGE = '/og/default.png'

function isLocalAsset(url: string) {
    return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
}

function normalizeDate(value?: string) {
    if (!value) return null

    const date = new Date(value.replace(' ', 'T'))
    if (Number.isNaN(date.getTime())) return null

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

type PageProps = {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const response = await getServicePublicAction(slug)

    if (!response?.success || !response?.data) {
        return constructMetadata({
            title: 'Service Not Found',
            description: 'The requested service could not be found.',
            image: DEFAULT_SERVICE_IMAGE,
            noIndex: true,
        })
    }

    const service = response.data

    return constructMetadata({
        title: service.meta_title || service.title,
        description: service.meta_description || service.short_description,
        image: service.meta_image || service.image || service.thumbnail || DEFAULT_SERVICE_IMAGE,
    })
}

export default async function ServiceDetailsPage({ params }: PageProps) {
    const { slug } = await params
    const response = await getServicePublicAction(slug)

    if (!response?.success || !response?.data) {
        notFound()
    }

    const service = response.data
    const heroImage = service.image || service.thumbnail || DEFAULT_SERVICE_IMAGE
    const updatedAt = normalizeDate(service.updated_at)
    const unoptimized = isLocalAsset(heroImage)

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="mb-6 text-sm text-slate-500">
                    <span>{service.category?.name || 'Service'}</span>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-5">
                        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                            {service.title}
                        </h1>

                        <p className="text-base leading-8 text-slate-600 md:text-lg">
                            {service.short_description}
                        </p>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-4 text-xl font-bold text-slate-900">
                                Service Details
                            </h2>
                            <div
                                className="text-base leading-8 text-slate-700 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
                                dangerouslySetInnerHTML={{ __html: service.description }}
                            />
                        </div>
                    </div>

                    <aside className="space-y-5">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <Image
                                src={heroImage}
                                alt={service.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                quality={95}
                                unoptimized={unoptimized}
                                className="object-cover"
                            />
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-4 text-lg font-bold text-slate-900">
                                Overview
                            </h2>
                            <div className="space-y-3 text-sm text-slate-600">
                                <p>
                                    <span className="font-semibold text-slate-900">Category:</span>{' '}
                                    {service.category?.name || 'N/A'}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Status:</span>{' '}
                                    {service.status ? 'Active' : 'Inactive'}
                                </p>
                                {updatedAt && (
                                    <p>
                                        <span className="font-semibold text-slate-900">Updated:</span>{' '}
                                        {updatedAt}
                                    </p>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}
