'use server'

import { submitContactForm } from '../services/contact.service'
import { ContactFormData, ContactSubmitResponse } from '../types'

export async function submitContactFormAction(data: ContactFormData): Promise<ContactSubmitResponse> {
    try {
        return await submitContactForm(data)
    } catch (error) {
        console.error('Error in submitContactFormAction:', error)
        return { success: false, error: 'An error occurred while submitting the form' }
    }
}
