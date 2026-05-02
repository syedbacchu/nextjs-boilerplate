
export interface StatListItem {
    id: number
    image: string | null
    title: string
    subtitle: string
    sort_order: number
    link: string | null
}

export interface StatListResponse {
    success: boolean
    message: string
    data: {
        total_count: number
        total_page: number
        per_page: number
        current_page: number
        data: StatListItem[]
    }
}
