
export interface SliderCtaButton {
    link: string | null
    label: string
    sort_order: string
    colour_code: string | null
}

export interface SliderStat {
    link: string | null
    image: string | null
    title: string
    subtitle: string
    sort_order: string
}

export interface SliderListItem {
    id: number
    title: string | null
    subtitle: string | null
    tagline: string | null
    description: string | null
    photo: string
    mobile_banner: string | null
    link: string | null
    serial: number
    type: number
    cta_button: SliderCtaButton[] | null
    stat: SliderStat[] | null
}

export interface SliderListResponse {
    success: boolean
    message: string
    data: {
        total_count: number
        total_page: number
        per_page: number
        current_page: number
        data: SliderListItem[]
    }
    status: number
    error_message: string
}