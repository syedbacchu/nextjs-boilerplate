import { request } from '@/lib/http/request'
import { ProductApiResponse, ProductDetailApiResponse } from '../types'

export const ProductService = {
  async getProductList(page: number = 1, search: string = ''): Promise<ProductApiResponse> {
    return request({
      method: 'GET',
      url: '/products',
      params: {
        page,
        search,
      },
    })
  },

  async getProductDetail(slug: string): Promise<ProductDetailApiResponse> {
    return request({
      method: 'GET',
      url: `/products/${slug}`,
    })
  },
}
