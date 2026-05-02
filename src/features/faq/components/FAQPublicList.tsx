'use client'

import { FAQItem } from '../types'
import FAQCard from './FAQCard'

interface FAQPublicListProps {
  faqs: FAQItem[]
  categoryName?: string
}

export default function FAQPublicList({ faqs, categoryName }: FAQPublicListProps) {
  if (faqs.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">No FAQs Found</h3>
        <p className="text-slate-600">Check back later for updates.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {categoryName && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">{categoryName}</h2>
          <div className="h-1 w-20 bg-green-500 mt-2 rounded-full" />
        </div>
      )}
      {faqs.map((faq) => (
        <FAQCard key={faq.id} faq={faq} />
      ))}
    </div>
  )
}
