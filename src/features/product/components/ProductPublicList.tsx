'use client'

import DynamicGrid from '@/components/ui/DynamicGrid'
import ProductCard from '@/features/product/components/ProductCard'
import { getProductPublicListAction, ProductListItem } from '@/features/product'

export default function ProductPublicList() {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">Our Products</h1>
      </div>

      <DynamicGrid
        title=""
        showStats={false}
        fetchData={(page, search) => getProductPublicListAction(page, search)}
        gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        renderItem={(item: ProductListItem) => <ProductCard item={item} />}
      />
    </div>
  )
}
