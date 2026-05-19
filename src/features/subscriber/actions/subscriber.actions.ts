'use server'

import { SubscriberService } from '@/features/subscriber/services/subscriber.service'
import { SubscribeResponse } from '@/features/subscriber/types'

export async function subscribeAction(email: string): Promise<SubscribeResponse> {
    try {
        const res = await SubscriberService.subscribe(email)
        return res
    } catch (error) {
        return {
            success: false,
            message: 'Failed to subscribe. Please try again.',
            data: {} as any,
            status: 500,
            error_message: error instanceof Error ? error.message : 'Unknown error',
        }
    }
}
