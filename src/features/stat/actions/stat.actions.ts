'use server'

import { StatListResponse, StatService } from '@/features/stat'

export async function getStatPublicListAction(
    page: number,
    search: string,
): Promise<StatListResponse> {
    const response = await StatService.publicList(
        page,
        search,
    )
    return response as unknown as StatListResponse
}
