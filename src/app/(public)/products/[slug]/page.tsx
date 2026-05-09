import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { notFound } from 'next/navigation'
import ProductGallerySlider from '@/features/product/components/ProductGallerySlider'
import { getProductDetailAction } from '@/features/product'
import { ChevronRight, Check, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const response = await getProductDetailAction(slug)

    if (!response.success || !response.data) {
      return constructMetadata({
        title: 'Product Not Found',
        description: 'The requested product could not be found.',
        image: '/og/default.png',
      })
    }

    const product = response.data

    return constructMetadata({
      title: product.name,
      description: product.meta_description || product.short_description,
      keywords: product.meta_keywords || undefined,
      image: product.image || '/og/default.png',
    })
  } catch {
    return constructMetadata({
      title: 'Product',
      description: 'View product details',
      image: '/og/default.png',
    })
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const response = await getProductDetailAction(slug)

  if (!response.success || !response.data) {
    notFound()
  }

  const product = response.data

  // Prepare gallery images - use gallery if available, otherwise fallback to main image
  const galleryImages = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image]

  const hasDiscount = product.discount > 0 && product.final_price < product.price
  const discountPercent = product.discount_type === 'percent'
    ? product.discount
    : Math.round((1 - product.final_price / product.price) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="mx-auto px-2 py-2">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-600">
          <a href="/" className="hover:text-emerald-600 transition">Home</a>
          <ChevronRight className="h-4 w-4" />
          <a href="/products" className="hover:text-emerald-600 transition">Products</a>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-slate-900">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Left Column - Gallery */}
          <div>
            <ProductGallerySlider
              images={galleryImages}
              productName={product.name}
              videoLink={product.video_link}
              videoImage={product.video_img}
            />
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Title & Tagline */}
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              {product.tagline && (
                <p className="mt-2 text-lg text-emerald-600 font-semibold">
                  {product.tagline}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-green-600">
                  ৳{product.final_price.toLocaleString()}
                </span>
                {hasDiscount && (
                  <>
                    <span className="text-2xl text-slate-400 line-through">
                      ৳{product.price.toLocaleString()}
                    </span>
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600">
                      {discountPercent}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Tax Info */}
              {product.tax > 0 && (
                <p className="text-sm text-slate-500">
                  + {product.tax_type === 'percent' ? `${product.tax}%` : `৳${product.tax}`} tax applicable
                </p>
              )}
            </div>

            {/* Short Description */}
            <p className="text-slate-700 leading-relaxed text-justify">
              {product.short_description}
            </p>

            {/* Stock Status */}
            <div className="flex items-center gap-3">
              {product.stock > 0 ? (
                <>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <span className="font-medium text-emerald-700">
                    {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left in stock!`}
                  </span>
                </>
              ) : (
                <>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-red-500">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <span className="font-medium text-red-700">Out of Stock</span>
                </>
              )}
            </div>

            {/* Categories */}
            {product.categories && product.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.categories.map((category) => (
                  <span
                    key={category.id}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button
                disabled={product.stock === 0}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed hover:shadow-xl hover:-translate-y-0.5"
              >
                <ShoppingCart className="h-5 w-5" />
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-6 w-6 text-emerald-600" />
                <span className="text-xs font-medium text-slate-700">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="h-6 w-6 text-emerald-600" />
                <span className="text-xs font-medium text-slate-700">Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="h-6 w-6 text-emerald-600" />
                <span className="text-xs font-medium text-slate-700">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Info Section */}
        <div className="mt-12 space-y-8">
          {/* Description */}
          {product.description && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Description</h2>
              <div
                className="prose prose-slate max-w-none text-slate-700 text-justify"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          )}

          {/* Usage Instructions */}
          {product.usage_instructions && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Usage Instructions</h2>
              <div
                className="prose prose-slate max-w-none text-slate-700 text-justify"
                dangerouslySetInnerHTML={{ __html: product.usage_instructions }}
              />
            </div>
          )}
        </div>

        {/* Variations */}
        {product.variations && product.variations.length > 0 && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Available Variations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.variations.map((variation) => (
                <div
                  key={variation.id}
                  className={`rounded-xl border p-4 transition ${
                    variation.stock > 0
                      ? 'border-slate-200 hover:border-emerald-300 cursor-pointer'
                      : 'border-slate-100 bg-slate-50 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">{variation.name}</span>
                    {variation.attribute_value?.value && (
                      <span
                        className="h-6 w-6 rounded-full border-2 border-slate-200"
                        style={{ backgroundColor: variation.attribute_value.value }}
                      />
                    )}
                  </div>
                  <p className="text-lg font-bold text-emerald-600">
                    ৳{variation.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-500">
                    SKU: {variation.sku}
                  </p>
                  <p className={`text-sm font-medium ${
                    variation.stock > 0 ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {variation.stock > 0 ? `${variation.stock} in stock` : 'Out of stock'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Discounts */}
        {product.quantity_discounts && product.quantity_discounts.length > 0 && (
          <div className="mt-8 mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Bulk Discounts</h2>
            <div className="space-y-3">
              {product.quantity_discounts.map((discount, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg bg-emerald-50 px-4 py-3"
                >
                  <span className="font-medium text-slate-700">
                    Buy {discount.min_qty}+ items
                  </span>
                  <span className="text-lg font-bold text-emerald-600">
                    {discount.discount_type === 'percent'
                      ? `${discount.discount}% OFF`
                      : `৳${discount.discount} OFF`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feature Groups */}
        {product.features && product.features.length > 0 && (
          <div className="space-y-12 mt-4">
            {product.features.map((featureGroup) => (
              <div key={featureGroup.product_feature_id} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                {/* Feature Header */}
                <div className="mb-8 text-center">
                  {featureGroup.feature_image && (
                    <div className="mb-6 flex justify-center">
                      <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-emerald-100 shadow-lg">
                        <img
                          src={featureGroup.feature_image}
                          alt={featureGroup.feature_title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{featureGroup.feature_title}</h2>
                  {featureGroup.feature_sub_title && (
                    <p className="text-lg text-slate-600 mb-4">{featureGroup.feature_sub_title}</p>
                  )}
                  {featureGroup.feature_description && (
                    <div
                      className="max-w-3xl mx-auto text-slate-700 leading-relaxed prose prose-slate max-w-none"
                      dangerouslySetInnerHTML={{ __html: featureGroup.feature_description }}
                    />
                  )}
                </div>

                {/* Feature Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featureGroup.items
                    .filter(item => item.status === 1)
                    .sort((a, b) => a.sort_order - b.sort_order)
                    .map((item, idx) => (
                    <div
                      key={idx}
                      className="group rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1"
                    >
                      {/* Item Image */}
                      {item.image && (
                        <div className="mb-4 flex justify-center">
                          <div className="relative h-24 w-24 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      )}

                      {/* Item Content */}
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        {item.sub_title && (
                          <p className="text-sm font-semibold text-emerald-600 mb-3">{item.sub_title}</p>
                        )}
                        {item.description && (
                          <div
                            className="text-sm text-slate-600 leading-relaxed line-clamp-3 prose prose-slate max-w-none"
                            dangerouslySetInnerHTML={{ __html: item.description }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
