'use client'

import { create } from 'zustand'
import { CommonSettings } from '@/features/commonSettings/types'
import { DEFAULT_SETTINGS, getSettingValue } from '@/features/commonSettings/constants/defaultSettings'

const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

interface SettingsState {
    settings: CommonSettings | null
    lastFetched: number
    loading: boolean
    setSettings: (settings: CommonSettings | null) => void
    setLoading: (loading: boolean) => void
    refreshSettings: () => Promise<void>
    isCacheStale: () => boolean
    getSettingsWithDefaults: () => CommonSettings
    getSetting: <K extends keyof CommonSettings>(key: K, customDefault?: string) => string
}

export const useCommonSettingsStore = create<SettingsState>((set, get) => ({
    settings: null,
    lastFetched: 0,
    loading: true,

    setSettings: (settings) =>
        set({
            settings,
            lastFetched: Date.now(),
            loading: false,
        }),

    setLoading: (loading) => set({ loading }),

    refreshSettings: async () => {
        set({ loading: true })
        try {
            const res = await fetch('/api/settings', {
                cache: 'no-store',
            })
            if (res.ok) {
                const data = await res.json()
                set({
                    settings: data,
                    lastFetched: Date.now(),
                    loading: false,
                })
            }
        } catch (error) {
            console.error('Failed to refresh settings:', error)
            set({ loading: false })
        }
    },

    isCacheStale: () => {
        const { lastFetched } = get()
        return Date.now() - lastFetched > CACHE_DURATION
    },

    getSettingsWithDefaults: () => {
        const { settings } = get()
        if (!settings) return DEFAULT_SETTINGS

        return {
            app_title: settings.app_title || DEFAULT_SETTINGS.app_title,
            tag_title: settings.tag_title || DEFAULT_SETTINGS.tag_title,
            company_email: settings.company_email || DEFAULT_SETTINGS.company_email,
            company_address: settings.company_address || DEFAULT_SETTINGS.company_address,
            helpline: settings.helpline || DEFAULT_SETTINGS.helpline,
            logo: settings.logo || DEFAULT_SETTINGS.logo,
            favicon: settings.favicon || DEFAULT_SETTINGS.favicon,
            copyright_text: settings.copyright_text || DEFAULT_SETTINGS.copyright_text,
            lang: settings.lang || DEFAULT_SETTINGS.lang,
            currency: settings.currency || DEFAULT_SETTINGS.currency,
            footer_about_us: settings.footer_about_us || DEFAULT_SETTINGS.footer_about_us,
        }
    },

    getSetting: (key, customDefault) => {
        const { settings } = get()
        return getSettingValue(settings, key, customDefault)
    },
}))
