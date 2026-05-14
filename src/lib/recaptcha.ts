const RECAPTCHA_SECRET_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY || ''
const RECAPTCHA_ENABLED = process.env.NEXT_PUBLIC_RECAPTCHA_ENABLED === 'enabled'

export async function verifyRecaptchaToken(token: string): Promise<{ success: boolean; error?: string }> {
    if (!RECAPTCHA_ENABLED || !RECAPTCHA_SECRET_KEY) {
        return { success: true }
    }

    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
        })

        const result = await response.json()

        if (result.success) {
            return { success: true }
        }

        return {
            success: false,
            error: result['error-codes']?.join(', ') || 'reCAPTCHA validation failed'
        }
    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error)
        return { success: false, error: 'Failed to verify reCAPTCHA' }
    }
}

export const isRecaptchaEnabled = RECAPTCHA_ENABLED
