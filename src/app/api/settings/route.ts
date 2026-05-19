import { NextResponse } from 'next/server'
import { getCommonSettingsAction } from '@/features/commonSettings/actions/commonSettings.actions'

export async function GET() {
    try {
        const settings = await getCommonSettingsAction()

        if (!settings) {
            return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
        }

        return NextResponse.json(settings)
    } catch (error) {
        console.error('Settings API error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
