'use client'

import { useEffect } from 'react'
import { useCommonSettingsStore } from '@/features/commonSettings/store/commonSettings.store'

export default function DynamicHead() {
    const { getSettingsWithDefaults, loading } = useCommonSettingsStore()

    useEffect(() => {
        if (loading) return

        const settings = getSettingsWithDefaults()

        // Update document title
        if (settings.app_title) {
            document.title = settings.app_title
        }

        // Update favicon
        if (settings.favicon) {
            const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link')
            link.type = 'image/x-icon'
            link.rel = 'shortcut icon'
            link.href = settings.favicon
            document.getElementsByTagName('head')[0].appendChild(link)
        }
    }, [getSettingsWithDefaults, loading])

    return null
}
