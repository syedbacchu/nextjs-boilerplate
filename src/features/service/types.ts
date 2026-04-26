
export interface ServiceCategory {
    id: number
    name: string
    slug: string
}

export interface ServiceListItem {
    id: number
    title: string
    slug: string
    short_description: string
    thumbnail: string | null
    image?: string | null
    status: boolean
    is_featured: boolean
    sort_order: number
    category: ServiceCategory | null
}

export interface ServiceListResponse {
    success: boolean
    message: string
    data: {
        total_count: number
        total_page: number
        per_page: number
        current_page: number
        data: ServiceListItem[]
    }
}

export interface ServiceDetailsData extends ServiceListItem {
    description: string
    meta_title?: string | null
    meta_keywords?: string | null
    meta_description?: string | null
    meta_image?: string | null
    created_at?: string
    updated_at?: string
}

export interface ServiceDetailsResponse {
    success: boolean
    message: string
    data: ServiceDetailsData
    status?: number
    error_message?: string
}

export interface SingleServiceItem {
    id: number
    slug: string
    image: string
    title: string
    description: string
    link?: string
}