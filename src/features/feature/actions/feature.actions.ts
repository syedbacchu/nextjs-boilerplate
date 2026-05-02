'use server'

import { FeatureDetailsResponse, FeatureListResponse, FeatureService } from '@/features/feature'

export async function getFeaturePublicListAction(
    page: number,
    search: string,
    is_featured?: number | string,
): Promise<FeatureListResponse> {
    const response = await FeatureService.publicList(
        page,
        search,
        is_featured,
    )
    return response as unknown as FeatureListResponse
}

export async function getFeaturePublicAction(slug: string): Promise<FeatureDetailsResponse> {
    const response = await FeatureService.details(slug)
    return response as unknown as FeatureDetailsResponse
}
