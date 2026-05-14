'use server'

import {ContactService, ContactSubmitResponse} from "@/features/contact";

export async function submitContactFormAction(
    formData: FormData,
): Promise<ContactSubmitResponse> {
    const res = await ContactService.create(formData)

    return res
}