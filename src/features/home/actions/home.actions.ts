'use server'

import { HomeApiResponse, HomeService } from '@/features/home'

export async function getHomeDataAction(): Promise<HomeApiResponse> {
    const response = await HomeService.getHomeData()
    return response as unknown as HomeApiResponse
}



