
export interface ServiceCategory {
    id: number
    name: string
    slug: string
}

export interface ServiceListItem {
    id: number
    title: string
    slug: string
    excerpt: string
    thumbnail_img: string | null
    featured_img?: string | null
    status?: string
    is_comment_allow?: boolean
    published_at?: string | null
    author?: BlogAuthor | null
    categories?: BlogCategory[]
    tags?: BlogTag[]
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
    content: string
    post_type?: string
    visibility?: number
    is_featured?: number
    featured_order?: number
    total_hit?: number
    meta_title?: string | null
    meta_keywords?: string | null
    meta_description?: string | null
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
