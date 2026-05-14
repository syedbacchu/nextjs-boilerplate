export interface ContactFormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    recaptchaToken?: string
}

export interface ContactSubmitResponse {
    success: boolean
    message?: string
    error?: string
}
