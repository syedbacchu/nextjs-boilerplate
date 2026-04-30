import { request } from '@/lib/http/request'

export const SliderService = {
    async publicList(
        page: number = 1,
        search: string = '',
        status?: number | string,
        type?: number | string,
        site_type?: number | string,
    ) {
        return request({
            method: 'GET',
            url: '/sliders',
            params: {
                page,
                search,
                status,
                type,
                site_type,
            },
        })
    },

}
