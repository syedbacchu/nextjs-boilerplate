import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import ProductPublicList from '@/features/product/components/ProductPublicList'

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: 'Products',
    description: 'Explore our range of quality products including electric vehicles, solar panels, batteries and more',
    image: '/og/default.png',
  })
}

export default async function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProductPublicList />
    </div>
  )
}
