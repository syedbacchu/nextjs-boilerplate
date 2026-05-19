import { request } from '@/lib/http/request'

export const CommonSettingsService = {
    getSettings() {
        return request({
            method: 'GET',
            url: '/common-settings/web',
        })
    },
}
