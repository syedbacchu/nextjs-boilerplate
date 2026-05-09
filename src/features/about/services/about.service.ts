import { request } from '@/lib/http/request'
import { AboutCompanyResponse } from '../types'

export const AboutService = {
  async getAboutCompany(siteType: number = 1): Promise<AboutCompanyResponse> {
    return request({
      method: 'GET',
      url: '/about-company',
      params: {
        site_tyep: siteType, // Note: keeping typo as per API
      },
    })
  },
}
