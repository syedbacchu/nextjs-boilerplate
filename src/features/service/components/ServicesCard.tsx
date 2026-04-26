'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SingleServiceItem } from '@/features/service'

export default function ServicesCard({ item }: { item: SingleServiceItem }) {

    return (
        <Link
            href={`/services/${item.slug}`}
            className="group block h-full rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
        >
            {/* Service Image */}
            <div className="mb-5 h-24 w-full relative">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold text-gray-900">
                {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {item.description}
            </p>

            {/* Learn More CTA */}
            <div className="flex items-center text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                <span>Learn More</span>
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    )
}
