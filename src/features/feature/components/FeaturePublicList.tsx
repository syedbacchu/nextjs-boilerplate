'use client'

import DynamicGrid from '@/components/ui/DynamicGrid'
import FeatureCard from '@/features/feature/components/FeatureCard'
import { getFeaturePublicListAction, FeatureListItem } from '@/features/feature'

export default function FeaturePublicList() {
    return (
        <div className="p-2">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">Latest Features</h1>
            </div>

            <DynamicGrid
                title=""
                showStats={false}
                fetchData={(page, search) => getFeaturePublicListAction(page, search)}
                gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                renderItem={(item: FeatureListItem) => <FeatureCard item={item} />}
            />
        </div>
    )
}
