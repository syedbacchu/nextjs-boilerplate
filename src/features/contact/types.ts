import {ApiResponse} from "@/types/api";

export interface ContactFormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    recaptchaToken?: string
}
export interface ContactResData {
    id: number
    name: string
    mobile: string
    email: string
    subject?: string | null
    message?: string | null
}

export type ContactSubmitResponse = ApiResponse<ContactResData | unknown[]>