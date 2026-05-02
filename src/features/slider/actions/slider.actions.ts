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

export async function getSolarPageSliderAction(): Promise<SliderListResponse> {
    const response = await SliderService.publicList(
        1,
        '',
        1, // status: 1 = active
        undefined, // type: not specified
        2, // site_type: 2 = solar page
    )
    return response as unknown as SliderListResponse
}

export async function getVexaevPageSliderAction(): Promise<SliderListResponse> {
    const response = await SliderService.publicList(
        1,
        '',
        1, // status: 1 = active
        undefined, // type: not specified
        3, // site_type: 3 = vexaev page
    )
    return response as unknown as SliderListResponse
}

export async function getBatteryPageSliderAction(): Promise<SliderListResponse> {
    const response = await SliderService.publicList(
        1,
        '',
        1, // status: 1 = active
        undefined, // type: not specified
        5, // site_type: 5 = battery page
    )
    return response as unknown as SliderListResponse
}