'use server'

import { AboutCompanyData, AboutCompanyItem } from '@/features/about'
import { AboutService } from '../services/about.service'

export async function getAboutCompanyAction(siteType: number = 1): Promise<{
  success: boolean
  data: AboutCompanyData | null
  coreValues: AboutCompanyItem[]
  companyStats: AboutCompanyItem[]
  whyChoose: AboutCompanyItem[]
}> {
  try {
    const response = await AboutService.getAboutCompany(siteType)

    if (!response.success || !response.data) {
      return {
        success: false,
        data: null,
        coreValues: [],
        companyStats: [],
        whyChoose: [],
      }
    }

    // Parse JSON strings
    const parseJsonSafely = (jsonString: string): AboutCompanyItem[] => {
      try {
        const parsed = JSON.parse(jsonString)
        return Array.isArray(parsed) ? parsed : []
      } catch {
        return []
      }
    }

    const coreValues = parseJsonSafely(response.data.core_values).sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))
    const companyStats = parseJsonSafely(response.data.company_stats).sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))
    const whyChoose = parseJsonSafely(response.data.why_choose).sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))

    return {
      success: true,
      data: response.data,
      coreValues,
      companyStats,
      whyChoose,
    }
  } catch (error) {
    console.error('Error fetching about company:', error)
    return {
      success: false,
      data: null,
      coreValues: [],
      companyStats: [],
      whyChoose: [],
    }
  }
}
