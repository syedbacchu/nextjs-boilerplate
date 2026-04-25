'use server'

import { cookies } from 'next/headers'
import {API_HEADERS} from "@/lib/config/api.config";

interface FetchArgs {
    method: string
    url: string
    params?: Record<string, any>
    data?: any
    headers?: HeadersInit
}

export async function apiFetchServer({
     method,
     url,
     params,
     data,
     headers: customHeaders = {},
 }: FetchArgs): Promise<Response> {

    const baseUrl = process.env.API_BASE_URL
    if (!baseUrl) throw new Error('API_BASE_URL is not defined')

    const queryParams = new URLSearchParams()
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value === undefined || value === null) return
            queryParams.append(key, String(value))
        })
    }
    const queryString = queryParams.toString()
    const query = queryString ? `?${queryString}` : ''
    const fullUrl = `${baseUrl}${url}${query}`

    const headers: Record<string, string> = {
        ...API_HEADERS(true), // Pass true for server
        ...customHeaders as Record<string, string>,
    }

    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    let body: BodyInit | undefined = undefined
    if (data instanceof FormData) {
        body = data
        delete headers['Content-Type']
    } else if (data) {
        body = JSON.stringify(data)
        headers['Content-Type'] = 'application/json'
    }

    return fetch(fullUrl, {
        method,
        headers,
        body,
        cache: 'no-store',
    })
}
