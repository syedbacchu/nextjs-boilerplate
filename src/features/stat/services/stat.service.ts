import { request } from '@/lib/http/request'

export const StatService = {
    async publicList(
        page: number = 1,
        search: string = '',
    ) {
        return request({
            method: 'GET',
            url: '/stat',
            params: { page, search },
        })
    },
}
