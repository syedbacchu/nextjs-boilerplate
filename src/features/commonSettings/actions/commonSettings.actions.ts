'use server'

import { CommonSettingsService } from '@/features/commonSettings/services/commonSettings.service'

export async function getCommonSettingsAction() {
    const res = await CommonSettingsService.getSettings()

    return res.success ? res.data : null
}
