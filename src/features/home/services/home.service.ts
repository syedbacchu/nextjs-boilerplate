import { request } from '@/lib/http/request'

export const HomeService = {
    async getHomeData() {
        return request({
            method: 'GET',
            url: '/home',
        })
    },
}