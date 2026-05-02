import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import ProjectPublicList from '@/features/project/components/ProjectPublicList'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Projects',
        description: 'Our Projects',
        image: '/og/default.png',
    })
}

export default async function page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="mx-auto px-4 py-8 -mt-6 relative z-10">
                <ProjectPublicList />
            </div>
        </div>
    )
}
