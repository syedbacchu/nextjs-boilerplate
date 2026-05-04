'use server'

import { ProductApiResponse, ProductDetailApiResponse, ProductListItem, Product } from '@/features/product'
import { ProductService } from '../services/product.service'

export async function getProductPublicListAction(
  page: number = 1,
  search: string = ''
): Promise<{
  success: boolean
  data: {
    data: ProductListItem[]
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}> {
  try {
    const response = await ProductService.getProductList(page, search)

    return {
      success: response.success,
      data: {
        data: response.data.data,
        current_page: response.data.current_page,
        last_page: response.data.total_page,
        per_page: response.data.per_page,
        total: response.data.total_count,
      },
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    return {
      success: false,
      data: {
        data: [],
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
      },
    }
  }
}

export async function getProductDetailAction(slug: string): Promise<{
  success: boolean
  data: Product | null
}> {
  try {
    const response = await ProductService.getProductDetail(slug)

    return {
      success: response.success,
      data: response.data || null,
    }
  } catch (error) {
    console.error('Error fetching product detail:', error)
    return {
      success: false,
      data: null,
    }
  }
}
