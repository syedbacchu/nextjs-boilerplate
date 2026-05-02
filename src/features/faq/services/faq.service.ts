import { FAQResponse, FAQListResponse } from '../types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export async function getFAQs(page: number = 1, perPage: number = 20): Promise<FAQListResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/faq?page=${page}&per_page=${perPage}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: FAQResponse = await response.json()

    if (result.success && result.data) {
      return {
        data: result.data.data,
        meta: {
          total_count: result.data.total_count,
          total_page: result.data.total_page,
          per_page: result.data.per_page,
          current_page: result.data.current_page,
        },
      }
    }

    throw new Error(result.message || 'Failed to fetch FAQs')
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    throw error
  }
}
