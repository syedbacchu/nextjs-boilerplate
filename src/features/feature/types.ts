
export interface FeatureCategory {
    id: number
    name: string
    slug: string
}

export interface FeatureListItem {
    id: number
    title: string
    slug: string
    short_description: string
    thumbnail: string | null
    image?: string | null
    link: string | null
    status: boolean
    is_featured: boolean
    sort_order: number
    site_type: number
    category: FeatureCategory | null
}

export interface FeatureListResponse {
    success: boolean
    message: string
    data: {
        total_count: number
        total_page: number
        per_page: number
        current_page: number
        data: FeatureListItem[]
    }
}

export interface FeatureDetailsData extends FeatureListItem {
    description: string
    meta_title?: string | null
    meta_keywords?: string | null
    meta_description?: string | null
    meta_image?: string | null
    created_at?: string
    updated_at?: string
}

export interface FeatureDetailsResponse {
    success: boolean
    message: string
    data: FeatureDetailsData
    status?: number
    error_message?: string
}

export interface SingleFeatureItem {
    id: number
    slug: string
    image: string
    title: string
    description: string
    link?: string
}
