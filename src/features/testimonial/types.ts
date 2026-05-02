
export interface TestimonialListItem {
    id: number
    name: string
    review_text: string
    review_star: number
    sort_order: number
    designation: string
    image: string | null
}

export interface TestimonialListResponse {
    success: boolean
    message: string
    data: {
        total_count: number
        total_page: number
        per_page: number
        current_page: number
        data: TestimonialListItem[]
    }
}
