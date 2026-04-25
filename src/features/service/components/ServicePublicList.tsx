'use client'

import DynamicGrid from '@/components/ui/DynamicGrid'
import ServiceCard from '@/features/service/components/ServiceCard'
import { getServicePublicListAction, ServiceListItem } from '@/features/service'

export default function ServicePublicList() {
    return (
        <div className="p-2">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">Latest Service</h1>
            </div>

            <DynamicGrid
                title=""
                showStats={false}
                fetchData={(page, search) => getServicePublicListAction(page, search)}
                gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                renderItem={(item: ServiceListItem) => <ServiceCard item={item} />}
            />
        </div>
    )
}

