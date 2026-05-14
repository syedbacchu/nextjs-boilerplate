import { ContactFormData, ContactSubmitResponse } from '../types'
import { verifyRecaptchaToken } from '@/lib/recaptcha'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export async function submitContactForm(data: ContactFormData): Promise<ContactSubmitResponse> {
    try {
        // Verify reCAPTCHA token if provided and enabled
        if (data.recaptchaToken) {
            const recaptchaResult = await verifyRecaptchaToken(data.recaptchaToken)
            if (!recaptchaResult.success) {
                return {
                    success: false,
                    error: recaptchaResult.error || 'reCAPTCHA validation failed. Please try again.'
                }
            }
        }

        // Remove recaptchaToken from data before sending to API
        const { recaptchaToken, ...apiData } = data

        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(apiData),
        })

        const result = await response.json()
        console.log('Contact Form API Response:', result)

        if (!response.ok) {
            return { success: false, error: result.message || 'Failed to submit contact form' }
        }

        return {
            success: true,
            message: result.message || 'Thank you for contacting us! We will get back to you soon.'
        }
    } catch (error) {
        console.error('Error submitting contact form:', error)
        return { success: false, error: 'Network error. Please try again.' }
    }
}
