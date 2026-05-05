'use client'

import DynamicGrid from '@/components/ui/DynamicGrid'
import ProductCard from '@/features/product/components/ProductCard'
import { getProductPublicListAction, ProductListItem } from '@/features/product'

export default function ProductPublicList() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#66c747]">
            Our Products
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Explore Our Range
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#66c747]" />
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Discover our quality products including electric vehicles, solar panels, batteries and more.
          </p>
        </div>

        <div className="mt-12">
          <DynamicGrid
            title=""
            showStats={false}
            fetchData={(page, search) => getProductPublicListAction(page, search)}
            gridClassName="grid-cols-1 lg:grid-cols-3 gap-7"
            renderItem={(item: ProductListItem) => <ProductCard item={item} />}
          />
        </div>
      </div>
    </div>
  )
}
