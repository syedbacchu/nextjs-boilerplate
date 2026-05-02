import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getFeaturePublicAction } from '@/features/feature'
import { constructMetadata } from '@/lib/seo'

const DEFAULT_FEATURE_IMAGE = '/og/default.png'

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
    const response = await getFeaturePublicAction(slug)

    if (!response?.success || !response?.data) {
        return constructMetadata({
            title: 'Feature Not Found',
            description: 'The requested feature could not be found.',
            image: DEFAULT_FEATURE_IMAGE,
            noIndex: true,
        })
    }

    const feature = response.data

    return constructMetadata({
        title: feature.meta_title || feature.title,
        description: feature.meta_description || feature.short_description,
        image: feature.meta_image || feature.image || feature.thumbnail || DEFAULT_FEATURE_IMAGE,
    })
}

export default async function FeatureDetailsPage({ params }: PageProps) {
    const { slug } = await params
    const response = await getFeaturePublicAction(slug)

    if (!response?.success || !response?.data) {
        notFound()
    }

    const feature = response.data
    const heroImage = feature.image || feature.thumbnail || DEFAULT_FEATURE_IMAGE
    const updatedAt = normalizeDate(feature.updated_at)
    const unoptimized = isLocalAsset(heroImage)

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="mb-6 text-sm text-slate-500">
                    <span>{feature.category?.name || 'Feature'}</span>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-5">
                        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                            {feature.title}
                        </h1>

                        <p className="text-base leading-8 text-slate-600 md:text-lg">
                            {feature.short_description}
                        </p>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-4 text-xl font-bold text-slate-900">
                                Feature Details
                            </h2>
                            <div
                                className="text-base leading-8 text-slate-700 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
                                dangerouslySetInnerHTML={{ __html: feature.description }}
                            />
                        </div>
                    </div>

                    <aside className="space-y-5">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <Image
                                src={heroImage}
                                alt={feature.title}
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
                                    {feature.category?.name || 'N/A'}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Status:</span>{' '}
                                    {feature.status ? 'Active' : 'Inactive'}
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
