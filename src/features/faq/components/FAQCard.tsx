'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FAQItem } from '../types'

interface FAQCardProps {
  faq: FAQItem
}

export default function FAQCard({ faq }: FAQCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-start justify-between text-left gap-4 hover:bg-slate-50 transition-colors rounded-t-2xl"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
              <span className="text-sm font-bold text-green-600">Q</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">
              {faq.question}
            </h3>
          </div>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-5 pt-0">
          <div className="flex items-start gap-3 pl-11">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-sm font-bold text-blue-600">A</span>
            </div>
            <div className="flex-1">
              <p className="text-base text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
              {faq.category && (
                <div className="mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                    {faq.category.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
