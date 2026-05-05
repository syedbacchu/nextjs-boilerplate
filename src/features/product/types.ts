export interface ProductCategory {
  id: number
  name: string
  slug: string
  image?: string | null
}

export interface ProductFeature {
  title: string
  value: string
}

export interface ProductQuantityDiscount {
  type: string
  min_qty: string
  discount: string
}

export interface ProductVariation {
  id: number
  sku: string
  price: number
  stock: number
  status: boolean
  name: string
  attribute_value: {
    id: number
    name: string
    value: string
    attribute_type: {
      id: number
      name: string
    }
  }
  attributes: Record<string, string>
}

export interface Product {
  id: number
  name: string
  slug: string
  tagline: string
  short_description: string
  description: string
  usage_instructions: string
  image: string
  gallery: string[]
  video_img: string | null
  video_link: string | null
  price: number
  final_price: number
  discount: number
  discount_type: string
  tax: number
  tax_type: string
  stock: number
  sold: number
  is_featured: boolean
  status: boolean
  categories: ProductCategory[]
  features: ProductFeature[]
  quantity_discounts: ProductQuantityDiscount[]
  variations: ProductVariation[]
  attributes: any[]
  meta_title: string | null
  meta_description: string | null
  meta_keywords: string | null
  created_at: string
  updated_at: string | null
}

export interface ProductListItem {
  id: number
  name: string
  slug: string
  tagline: string
  short_description: string
  image: string
  price: number
  final_price: number
  discount: number
  discount_type: string
  stock: number
  sold: number
  is_featured: boolean
  status: boolean
  categories: ProductCategory[]
  features: ProductFeature[]
  created_at: string
}

export interface ProductApiResponse {
  success: boolean
  message: string
  data: {
    data: ProductListItem[]
    total_count: number
    total_page: number
    per_page: number
    current_page: number
  }
  status: number
  error_message: string
}

export interface ProductDetailApiResponse {
  success: boolean
  message: string
  data: Product
  status: number
  error_message: string
}
