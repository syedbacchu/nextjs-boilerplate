'use server'

import { ProjectDetailsResponse, ProjectListResponse, ProjectService } from '@/features/project'

export async function getProjectPublicListAction(
    page: number,
    search: string,
    is_featured?: number | string,
): Promise<ProjectListResponse> {
    const response = await ProjectService.publicList(
        page,
        search,
        is_featured,
    )
    return response as unknown as ProjectListResponse
}

export async function getProjectPublicAction(slug: string): Promise<ProjectDetailsResponse> {
    const response = await ProjectService.details(slug)
    return response as unknown as ProjectDetailsResponse
}
