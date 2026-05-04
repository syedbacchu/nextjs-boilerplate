'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductGallerySliderProps {
  images: string[]
  productName: string
}

export default function ProductGallerySlider({ images, productName }: ProductGallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // If no gallery images, use a placeholder array with one empty slot that will show the main image
  const displayImages = images && images.length > 0 ? images : ['']

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)
  }

  const isLocalAsset = (url: string) => {
    return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
        {displayImages[currentIndex] ? (
          <Image
            src={displayImages[currentIndex]}
            alt={`${productName} - Image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            quality={95}
            unoptimized={isLocalAsset(displayImages[currentIndex])}
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-slate-400">No image available</p>
          </div>
        )}

        {/* Navigation Buttons */}
        {displayImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:bg-white hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:bg-white hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {displayImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
            <span>{currentIndex + 1}</span>
            <span>/</span>
            <span>{displayImages.length}</span>
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {displayImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-xl border-2 transition-all ${
                idx === currentIndex
                  ? 'border-emerald-500 scale-105 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {img ? (
                <Image
                  src={img}
                  alt={`${productName} - Thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  quality={75}
                  unoptimized={isLocalAsset(img)}
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-slate-100">
                  <span className="text-xs text-slate-400">No img</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
