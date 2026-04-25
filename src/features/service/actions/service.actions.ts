'use server'

import { ServiceService, ServiceListResponse} from '@/features/service'

export async function getServicePublicListAction(
    page: number,
    search: string,
    is_featured?: number | string,
    is_match_coverage?: number | string,
    is_top_story?: number | string,
): Promise<ServiceListResponse> {
    const response = await ServiceService.publicList(
        page,
        search,
        is_featured,
        is_match_coverage,
        is_top_story,
    )
    return response as unknown as ServiceListResponse
}

export async function getServicePublicAction(slug: string): Promise<ServiceDetailsResponse> {
    const response = await ServiceService.details(slug)
    return response as unknown as ServiceDetailsResponse
}

