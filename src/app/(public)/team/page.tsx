import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import TeamPublicList from '@/features/team/components/TeamPublicList'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Our Team',
        description: 'Meet our expert team members',
        image: '/og/default.png',
    })
}

export default async function page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="mx-auto px-4 py-8 -mt-6 relative z-10">
                <TeamPublicList />
            </div>
        </div>
    )
}
