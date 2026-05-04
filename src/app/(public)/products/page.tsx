import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import ProductPublicList from '@/features/product/components/ProductPublicList'

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: 'Products',
    description: 'Explore our range of quality products including solar panels, batteries, inverters and more',
    image: '/og/default.png',
  })
}

export default async function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="mx-auto px-4 py-8 -mt-6 relative z-10">
        <ProductPublicList />
      </div>
    </div>
  )
}
