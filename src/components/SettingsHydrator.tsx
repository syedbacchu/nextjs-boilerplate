'use client'

import { useEffect } from 'react'
import { useCommonSettingsStore } from '@/features/commonSettings/store/commonSettings.store'

export default function SettingsHydrator() {
    const { setSettings, setLoading, isCacheStale, refreshSettings } = useCommonSettingsStore()

    useEffect(() => {
        async function hydrate() {
            try {
                const res = await fetch('/api/settings', {
                    cache: 'no-store',
                })

                if (res.ok) {
                    const data = await res.json()
                    setSettings(data)
                } else {
                    setSettings(null)
                }
            } catch {
                setSettings(null)
            } finally {
                setLoading(false)
            }
        }

        hydrate()

        // Set up auto-refresh interval (check every 30 seconds if cache is stale)
        const interval = setInterval(() => {
            if (isCacheStale()) {
                refreshSettings()
            }
        }, 30000)

        return () => clearInterval(interval)
    }, [setSettings, setLoading, isCacheStale, refreshSettings])

    return null
}
