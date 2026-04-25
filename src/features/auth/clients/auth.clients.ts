'use client'

import { useAuthStore, loginAction } from '@/features/auth'

export async function loginClient(formData: FormData) {
    // call server action
    const res = await loginAction(formData)
    console.log('loginClient', res);
    // if login successful, update client store
    if (res.success && res.data?.user) {
        useAuthStore.getState().setUser(res.data.user)
    }

    return res
}
