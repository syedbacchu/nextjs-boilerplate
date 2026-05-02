'use server'

import { TestimonialListResponse, TestimonialService } from '@/features/testimonial'

export async function getTestimonialPublicListAction(
    page: number,
    search: string,
): Promise<TestimonialListResponse> {
    const response = await TestimonialService.publicList(
        page,
        search,
    )
    return response as unknown as TestimonialListResponse
}
