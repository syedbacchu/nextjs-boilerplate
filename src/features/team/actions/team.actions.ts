'use server'

import { TeamDetailsResponse, TeamListResponse, TeamService } from '@/features/team'

export async function getTeamPublicListAction(
    page: number,
    search: string,
): Promise<TeamListResponse> {
    const response = await TeamService.publicList(
        page,
        search,
    )
    return response as unknown as TeamListResponse
}

export async function getTeamPublicAction(slug: string): Promise<TeamDetailsResponse> {
    const response = await TeamService.details(slug)
    return response as unknown as TeamDetailsResponse
}
