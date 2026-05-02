'use server'

import { ServiceDetailsResponse, ServiceListResponse, ServiceService } from '@/features/service'

export async function getServicePublicListAction(
    page: number,
    search: string,
    is_featured?: number | string,
    site_type?: number | string,
): Promise<ServiceListResponse> {
    const response = await ServiceService.publicList(
        page,
        search,
        is_featured,
        site_type
    )
    return response as unknown as ServiceListResponse
}

export async function getServicePublicAction(slug: string): Promise<ServiceDetailsResponse> {
    const response = await ServiceService.details(slug)
    return response as unknown as ServiceDetailsResponse
}
