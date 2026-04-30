'use server'

import { SliderService, SliderListResponse } from '@/features/slider'

export async function getHomeSliderListAction(
    page: number = 1,
    search: string = '',
    status?: number | string,
    type?: number | string,
    site_type?: number | string,
): Promise<SliderListResponse> {
    const response = await SliderService.publicList(
        page,
        search,
        status,
        type,
        site_type,
    )
    return response as unknown as SliderListResponse
}

export async function getHomePageSliderAction(): Promise<SliderListResponse> {
    const response = await SliderService.publicList(
        1,
        '',
        1,
        2,
    )
    return response as unknown as SliderListResponse
}

