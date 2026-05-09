'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductGallerySliderProps {
  images: string[]
  productName: string
  videoLink?: string | null
  videoImage?: string | null
}

export default function ProductGallerySlider({ images, productName, videoLink, videoImage }: ProductGallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // If no gallery images, use a placeholder array with one empty slot that will show the main image
  const displayImages = images && images.length > 0 ? images : ['']

  // Add video to the end if video link exists
  const hasVideo = videoLink && videoLink.trim() !== ''
  const totalItems = hasVideo ? displayImages.length + 1 : displayImages.length

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  const isVideoSlide = hasVideo && currentIndex === displayImages.length

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch')) {
      const videoId = new URL(url).searchParams.get('v')
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }
    if (url.includes('youtube.com/embed/')) {
      return url
    }
    return null
  }

  const isLocalAsset = (url: string) => {
    return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
  }

  return (
    <div className="space-y-4">
      {/* Main Image/Video */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
        {isVideoSlide ? (
          <div className="relative w-full h-full">
            {getYouTubeEmbedUrl(videoLink!) ? (
              <iframe
                src={getYouTubeEmbedUrl(videoLink!)}
                title={`${productName} - Video`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoLink!}
                controls
                className="w-full h-full object-contain"
                poster={videoImage || undefined}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ) : displayImages[currentIndex] ? (
          <Image
            src={displayImages[currentIndex]}
            alt={`${productName} - Image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            quality={95}
            unoptimized={isLocalAsset(displayImages[currentIndex])}
            className="object-contain"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-slate-400">No image available</p>
          </div>
        )}

        {/* Navigation Buttons */}
        {totalItems > 1 && (
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

        {/* Image/Video Counter */}
        {totalItems > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
            <span>{currentIndex + 1}</span>
            <span>/</span>
            <span>{totalItems}</span>
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {totalItems > 1 && (
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

          {/* Video Thumbnail */}
          {hasVideo && (
            <button
              type="button"
              onClick={() => setCurrentIndex(displayImages.length)}
              className={`relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-xl border-2 transition-all ${
                isVideoSlide
                  ? 'border-emerald-500 scale-105 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {videoImage ? (
                <Image
                  src={videoImage}
                  alt={`${productName} - Video`}
                  fill
                  sizes="80px"
                  quality={75}
                  unoptimized={isLocalAsset(videoImage)}
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-red-500 to-pink-600">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90">
                    <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-red-600 border-b-4 border-b-transparent ml-0.5" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90">
                  <div className="w-0 h-0 border-t-2 border-t-transparent border-l-4 border-l-red-600 border-b-2 border-b-transparent ml-0.5" />
                </div>
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  )
}
