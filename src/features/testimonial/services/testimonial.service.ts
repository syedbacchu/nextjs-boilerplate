import { request } from '@/lib/http/request'

export const TestimonialService = {
    async publicList(
        page: number = 1,
        search: string = '',
    ) {
        return request({
            method: 'GET',
            url: '/testimonials',
            params: { page, search },
        })
    },
}
