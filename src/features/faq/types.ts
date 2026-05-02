export interface FAQCategory {
  id: number
  name: string
  slug: string | null
}

export interface FAQItem {
  id: number
  category_id: number
  question: string
  answer: string
  attestment: string | null
  sort_order: number
  category: FAQCategory
}

export interface FAQResponse {
  success: boolean
  message: string
  data: {
    total_count: number
    total_page: number
    per_page: number
    current_page: number
    data: FAQItem[]
  }
  status: number
  error_message: string
}

export interface FAQListResponse {
  data: FAQItem[]
  meta: {
    total_count: number
    total_page: number
    per_page: number
    current_page: number
  }
}
