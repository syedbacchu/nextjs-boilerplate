
export interface ProjectCategory {
    id: number
    name: string
    slug: string
}

export interface ProjectListItem {
    id: number
    title: string
    slug: string
    short_description: string
    thumbnail: string | null
    project_url: string | null
    start_date: string
    end_date: string
    project_status: 'ongoing' | 'completed' | 'upcoming'
    status: boolean
    is_featured: boolean
    sort_order: number
    site_type: number
    category: ProjectCategory | null
}

export interface ProjectListResponse {
    success: boolean
    message: string
    data: {
        total_count: number
        total_page: number
        per_page: number
        current_page: number
        data: ProjectListItem[]
    }
}

export interface ProjectDetailsData extends ProjectListItem {
    description: string
    gallery: string[]
    meta_title?: string | null
    meta_keywords?: string | null
    meta_description?: string | null
    meta_image?: string | null
    created_at?: string
    updated_at?: string
}

export interface ProjectDetailsResponse {
    success: boolean
    message: string
    data: ProjectDetailsData
    status?: number
    error_message?: string
}

export interface SingleProjectItem {
    id: number
    slug: string
    image: string
    title: string
    description: string
    project_url?: string
}
