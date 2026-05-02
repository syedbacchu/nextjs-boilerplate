'use client'

import DynamicGrid from '@/components/ui/DynamicGrid'
import TeamCard from '@/features/team/components/TeamCard'
import { getTeamPublicListAction, TeamListItem } from '@/features/team'

export default function TeamPublicList() {
    return (
        <div className="p-2">
            <div className="mb-6">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">Our Team</h1>
                <p className="text-slate-600 mt-2">Meet our experts</p>
            </div>

            <DynamicGrid
                title=""
                showStats={false}
                fetchData={(page, search) => getTeamPublicListAction(page, search)}
                gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                renderItem={(item: TeamListItem) => <TeamCard item={item} />}
            />
        </div>
    )
}
