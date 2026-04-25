'use server'

import { cookies } from 'next/headers'
import { AuthService } from '@/features/auth'
export async function meAction() {
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value
    if (!token) return null

    const res = await AuthService.me(token)

    return res.success ? res.data.user : null
}

export async function loginAction(formData: FormData) {
    const res = await AuthService.login(formData)

    if (res.success === true) {
        const cookieStore = await cookies()

        cookieStore.set('access_token', res.data.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: res.data.expires_in,
            path: '/',
            sameSite: 'lax',
        })
    }

    return res
}


export async function logoutAction() {
    const cookieStore = await cookies()
    cookieStore.delete('access_token')
}