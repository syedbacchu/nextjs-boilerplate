import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectPublicAction } from '@/features/project'
import { constructMetadata } from '@/lib/seo'

const DEFAULT_PROJECT_IMAGE = '/og/default.png'

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

function getStatusBadge(status: string) {
    const variants = {
        ongoing: 'bg-blue-100 text-blue-700 border-blue-200',
        completed: 'bg-green-100 text-green-700 border-green-200',
        upcoming: 'bg-amber-100 text-amber-700 border-amber-200',
    }
    return variants[status as keyof typeof variants] || variants.ongoing
}

type PageProps = {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const response = await getProjectPublicAction(slug)

    if (!response?.success || !response?.data) {
        return constructMetadata({
            title: 'Project Not Found',
            description: 'The requested project could not be found.',
            image: DEFAULT_PROJECT_IMAGE,
            noIndex: true,
        })
    }

    const project = response.data

    return constructMetadata({
        title: project.meta_title || project.title,
        description: project.meta_description || project.short_description,
        image: project.meta_image || project.thumbnail || DEFAULT_PROJECT_IMAGE,
    })
}

export default async function ProjectDetailsPage({ params }: PageProps) {
    const { slug } = await params
    const response = await getProjectPublicAction(slug)

    if (!response?.success || !response?.data) {
        notFound()
    }

    const project = response.data
    const heroImage = project.thumbnail || DEFAULT_PROJECT_IMAGE
    const createdAt = normalizeDate(project.created_at)
    const updatedAt = normalizeDate(project.updated_at)
    const startDate = normalizeDate(project.start_date)
    const endDate = normalizeDate(project.end_date)
    const unoptimized = isLocalAsset(heroImage)

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="mb-6 flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                        <span>{project.category?.name || 'Project'}</span>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusBadge(project.project_status)}`}>
                        {project.project_status}
                    </span>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-5">
                        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                            {project.title}
                        </h1>

                        <p className="text-base leading-8 text-slate-600 md:text-lg">
                            {project.short_description}
                        </p>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-4 text-xl font-bold text-slate-900">
                                Project Details
                            </h2>
                            <div
                                className="text-base leading-8 text-slate-700 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
                                dangerouslySetInnerHTML={{ __html: project.description }}
                            />
                        </div>

                        {project.gallery && project.gallery.length > 0 && (
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h2 className="mb-4 text-xl font-bold text-slate-900">
                                    Gallery
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {project.gallery.map((imageUrl, index) => (
                                        <div key={index} className="relative aspect-square overflow-hidden rounded-xl border border-slate-200">
                                            <Image
                                                src={imageUrl}
                                                alt={`${project.title} - Image ${index + 1}`}
                                                fill
                                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                                quality={95}
                                                unoptimized={isLocalAsset(imageUrl)}
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="space-y-5">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <Image
                                src={heroImage}
                                alt={project.title}
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
                                    {project.category?.name || 'N/A'}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Status:</span>{' '}
                                    {project.status ? 'Active' : 'Inactive'}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Project Status:</span>{' '}
                                    <span className={`px-2 py-0.5 rounded text-xs font-semibold border ${getStatusBadge(project.project_status)}`}>
                                        {project.project_status}
                                    </span>
                                </p>
                                {startDate && (
                                    <p>
                                        <span className="font-semibold text-slate-900">Start Date:</span>{' '}
                                        {startDate}
                                    </p>
                                )}
                                {endDate && (
                                    <p>
                                        <span className="font-semibold text-slate-900">End Date:</span>{' '}
                                        {endDate}
                                    </p>
                                )}
                                {project.project_url && (
                                    <p>
                                        <span className="font-semibold text-slate-900">Project URL:</span>{' '}
                                        <a
                                            href={project.project_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700 underline"
                                        >
                                            View Project
                                        </a>
                                    </p>
                                )}
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
