'use client'

import {
    submitContactFormAction,
    ContactSubmitResponse
} from '@/features/contact'

export async function createContactClient(
    formData: FormData,
): Promise<ContactSubmitResponse> {
    return submitContactFormAction(formData)
}

