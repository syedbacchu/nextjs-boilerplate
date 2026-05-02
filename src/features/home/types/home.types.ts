export interface HomeService {
    id: number
    title: string
    slug: string
    short_description: string
    description: string
    thumbnail: string | null
    image: string | null
    category_id: number
    sort_order: number
    is_featured: boolean
    status: number
    site_type: number
    category: {
        id: number
        name: string
        slug: string
    } | null
}

export interface HomeProject {
    id: number
    title: string
    slug: string
    short_description: string
    description: string
    project_url: string | null
    start_date: string
    end_date: string
    thumbnail: string | null
    gallery: string[] | null
    category_id: number | null
    project_status: 'ongoing' | 'completed' | 'upcoming'
    sort_order: number
    is_featured: boolean
    site_type: number
    status: number
    category: {
        id: number
        name: string
        slug: string
    } | null
}

export interface HomeTestimonial {
    id: number
    name: string
    review_text: string
    review_star: number
    designation: string
    image: string | null
    sort_order: number
    status: number
    created_by: number
    updated_by: number | null
    site_type: number
}

export interface HomeStat {
    id: number
    image: string | null
    title: string
    subtitle: string
    description: string | null
    link: string | null
    sort_order: number
    status: number
    site_type: number
}

export interface HomeDataResponse {
    service_list: HomeService[]
    project_list: HomeProject[]
    testimonial_list: HomeTestimonial[]
    stat_list: HomeStat[]
}

export interface HomeApiResponse {
    success: boolean
    message: string
    data: HomeDataResponse
    status: number
    error_message: string
}

export interface SingleServiceItem {
    id: number
    slug: string
    image: string
    title: string
    description: string
    link?: string
}
