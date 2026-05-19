import { CommonSettings } from '../types'

export const DEFAULT_SETTINGS: CommonSettings = {
    app_title: 'Next Js',
    tag_title: '',
    company_email: 'info@example.com',
    company_address: 'House # 12, Road # 5<br />Dhanmondi, Dhaka-1205',
    helpline: '+880 1712 345 678',
    logo: '/logo.png',
    favicon: '/favicon.ico',
    copyright_text: `© ${new Date().getFullYear()} Company Name. All Rights Reserved.`,
    lang: 'en',
    currency: 'USD',
    footer_about_us: 'A clean, scalable starter built to help you launch fast and keep your product presentation consistent across the site.',
}

export const getSettingValue = <T extends keyof CommonSettings>(
    settings: CommonSettings | null,
    key: T,
    customDefault?: string
): string => {
    if (!settings) return customDefault || DEFAULT_SETTINGS[key]

    const value = settings[key]

    // Return value if it exists and is not empty string
    if (value && value.trim() !== '') {
        return value
    }

    // Otherwise return custom default or default from DEFAULT_SETTINGS
    return customDefault || DEFAULT_SETTINGS[key]
}
