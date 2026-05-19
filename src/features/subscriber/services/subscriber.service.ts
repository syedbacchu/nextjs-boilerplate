import { request } from '@/lib/http/request'

export const SubscriberService = {
    subscribe(email: string) {
        return request({
            method: 'POST',
            url: '/subscriber/subscribe',
            data: { email },
        })
    },
}
