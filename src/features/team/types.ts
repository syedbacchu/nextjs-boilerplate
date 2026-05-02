
export interface TeamListItem {
    id: number
    name: string
    slug: string
    designation: string
    image: string | null
    status: number
}

export interface TeamListResponse {
    success: boolean
    message: string
    data: {
        total_count: number
        total_page: number
        per_page: number
        current_page: number
        data: TeamListItem[]
    }
}

export interface TeamDetailsData extends TeamListItem {
    email: string
    phone: string
    cover_image: string | null
    bio: string
    facebook_url: string | null
    twitter_url: string | null
    linkedin_url: string | null
    instagram_url: string | null
    github_url: string | null
    youtube_url: string | null
    join_date: string | null
    site_type: number
    is_featured: number
    created_by: number
    updated_by: number | null
    created_at: string
    updated_at: string
}

export interface TeamDetailsResponse {
    success: boolean
    message: string
    data: TeamDetailsData
    status?: number
    error_message?: string
}
