'use client'

import DynamicGrid from '@/components/ui/DynamicGrid'
import ProjectCard from '@/features/project/components/ProjectCard'
import { getProjectPublicListAction, ProjectListItem } from '@/features/project'

export default function ProjectPublicList() {
    return (
        <div className="p-2">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">Latest Projects</h1>
            </div>

            <DynamicGrid
                title=""
                showStats={false}
                fetchData={(page, search) => getProjectPublicListAction(page, search)}
                gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                renderItem={(item: ProjectListItem) => <ProjectCard item={item} />}
            />
        </div>
    )
}
