import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTeamPublicAction } from '@/features/team'
import { constructMetadata } from '@/lib/seo'

const DEFAULT_TEAM_IMAGE = '/og/default.png'

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
    const response = await getTeamPublicAction(slug)

    if (!response?.success || !response?.data) {
        return constructMetadata({
            title: 'Team Member Not Found',
            description: 'The requested team member could not be found.',
            image: DEFAULT_TEAM_IMAGE,
            noIndex: true,
        })
    }

    const member = response.data

    return constructMetadata({
        title: member.name,
        description: member.bio || member.designation,
        image: member.image || DEFAULT_TEAM_IMAGE,
    })
}

export default async function TeamDetailsPage({ params }: PageProps) {
    const { slug } = await params
    const response = await getTeamPublicAction(slug)

    if (!response?.success || !response?.data) {
        notFound()
    }

    const member = response.data
    const profileImage = member.image || DEFAULT_TEAM_IMAGE
    const coverImage = member.cover_image || profileImage
    const joinDate = normalizeDate(member.join_date)
    const unoptimized = isLocalAsset(profileImage)

    const socialLinks = [
        { name: 'Facebook', url: member.facebook_url, icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
        { name: 'Twitter', url: member.twitter_url, icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
        { name: 'LinkedIn', url: member.linkedin_url, icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
        { name: 'Instagram', url: member.instagram_url, icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
        { name: 'GitHub', url: member.github_url, icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' },
        { name: 'YouTube', url: member.youtube_url, icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    ].filter(link => link.url)

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="mx-auto max-w-4xl px-4 py-10">
                <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    {/* Cover Image */}
                    <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-500 to-blue-600">
                        {member.cover_image && (
                            <Image
                                src={coverImage}
                                alt={`${member.name} cover`}
                                fill
                                quality={95}
                                unoptimized={isLocalAsset(coverImage)}
                                className="object-cover"
                            />
                        )}
                    </div>

                    <div className="relative px-6 pb-6">
                        {/* Profile Image */}
                        <div className="relative -mt-20 mb-4">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white">
                                <Image
                                    src={profileImage}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 128px, 160px"
                                    quality={95}
                                    unoptimized={unoptimized}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Name and Designation */}
                        <div className="mb-6">
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                                {member.name}
                            </h1>
                            <p className="text-lg text-blue-600 font-medium">
                                {member.designation}
                            </p>
                        </div>

                        {/* Bio */}
                        {member.bio && (
                            <div className="mb-6">
                                <h2 className="text-lg font-bold text-slate-900 mb-3">About</h2>
                                <p className="text-base text-slate-700 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        )}

                        {/* Contact Information */}
                        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {member.email && (
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <div className="text-sm text-slate-500 mb-1">Email</div>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
                                    >
                                        {member.email}
                                    </a>
                                </div>
                            )}
                            {member.phone && (
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <div className="text-sm text-slate-500 mb-1">Phone</div>
                                    <a
                                        href={`tel:${member.phone}`}
                                        className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
                                    >
                                        {member.phone}
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Social Links */}
                        {socialLinks.length > 0 && (
                            <div className="mb-6">
                                <h2 className="text-lg font-bold text-slate-900 mb-3">Connect</h2>
                                <div className="flex flex-wrap gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all text-slate-700 hover:text-blue-600"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d={social.icon} />
                                            </svg>
                                            <span className="text-sm font-medium">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Additional Info */}
                        <div className="pt-6 border-t border-slate-200">
                            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                {joinDate && (
                                    <div>
                                        <span className="font-medium text-slate-900">Joined:</span>{' '}
                                        {joinDate}
                                    </div>
                                )}
                                <div>
                                    <span className="font-medium text-slate-900">Status:</span>{' '}
                                    {member.status === 1 ? 'Active' : 'Inactive'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
