import { request } from '@/lib/http/request'

export const ProjectService = {
    async publicList(
        page: number = 1,
        search: string = '',
        is_featured?: number | string,
    ) {
        return request({
            method: 'GET',
            url: '/projects',
            params: { page, search, is_featured },
        })
    },

    details(slug: string) {
        return request({
            method: 'GET',
            url: `/projects/${slug}`,
        })
    },
}
