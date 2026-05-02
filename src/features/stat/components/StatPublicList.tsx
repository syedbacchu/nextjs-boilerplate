'use client'

import DynamicGrid from '@/components/ui/DynamicGrid'
import StatCard from '@/features/stat/components/StatCard'
import { getStatPublicListAction, StatListItem } from '@/features/stat'

export default function StatPublicList() {
    return (
        <div className="p-2">
            <div className="mb-6 text-center">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">Our Statistics</h1>
                <p className="text-slate-600 mt-2">Numbers that speak for themselves</p>
            </div>

            <DynamicGrid
                title=""
                showStats={false}
                fetchData={(page, search) => getStatPublicListAction(page, search)}
                gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                renderItem={(item: StatListItem) => <StatCard item={item} />}
            />
        </div>
    )
}
