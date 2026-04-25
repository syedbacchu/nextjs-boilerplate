'use client'

import { useEffect } from 'react'
import {meAction, useAuthStore} from '@/features/auth'

export default function AuthHydrator() {
    const setUser = useAuthStore((s) => s.setUser)

    useEffect(() => {
        async function hydrate() {
            try {
                const user = await meAction()
                setUser(user) // ✅ sets loading = false
            } catch {
                setUser(null) // ✅ still stops loading
            }
        }

        hydrate()
    }, [setUser])

    return null
}
