export interface AboutCompanyItem {
  image: string | null
  title: string
  sort_order: string
  subtitle: string | null
  description: string | null
}

export interface AboutCompanyData {
  id: number
  banner_image: string
  title: string
  subtitle: string
  our_story: string
  story_image: string
  mission: string
  vision: string
  core_values: string // JSON string
  company_stats: string // JSON string
  why_choose: string // JSON string
  added_by: string | null
  updated_by: number
  created_at: string
  updated_at: string
  site_type: number
}

export interface AboutCompanyResponse {
  success: boolean
  message: string
  data: AboutCompanyData
  status: number
  error_message: string
}
