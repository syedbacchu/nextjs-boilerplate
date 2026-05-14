import { request } from '@/lib/http/request'
import {ContactResData, ContactSubmitResponse} from "@/features/contact";


export const ContactService = {

    create(data: FormData): Promise<ContactSubmitResponse> {
        return request<ContactResData>({
            method: 'POST',
            url: `/contact`,
            data,
        })
    },

}