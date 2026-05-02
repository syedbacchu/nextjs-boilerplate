import { request } from '@/lib/http/request'

export const TeamService = {
    async publicList(
        page: number = 1,
        search: string = '',
    ) {
        return request({
            method: 'GET',
            url: '/team',
            params: { page, search },
        })
    },

    details(slug: string) {
        return request({
            method: 'GET',
            url: `/team/${slug}`,
        })
    },
}
