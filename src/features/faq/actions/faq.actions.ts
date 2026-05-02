'use server'

import { getFAQs } from '../services/faq.service'
import { FAQListResponse } from '../types'

export async function getFAQAction(page: number = 1, perPage: number = 20): Promise<FAQListResponse | null> {
  try {
    return await getFAQs(page, perPage)
  } catch (error) {
    console.error('Error in getFAQAction:', error)
    return null
  }
}
