import { request } from '@/lib/http/request'

export const AuthService = {
    login(formData: FormData) {
        return request({
            method: 'POST',
            url: '/auth/login',
            data: formData,
        })
    },

    me(token: string) {
        return request({
            method: 'GET',
            url: '/user/me',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    },
}
