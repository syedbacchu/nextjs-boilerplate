'use client'

import DynamicGrid from '@/components/ui/DynamicGrid'
import TestimonialCard from '@/features/testimonial/components/TestimonialCard'
import { getTestimonialPublicListAction, TestimonialListItem } from '@/features/testimonial'

export default function TestimonialPublicList() {
    return (
        <div className="p-2">
            <div className="mb-6">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">Client Testimonials</h1>
                <p className="text-slate-600 mt-2">What our clients say about us</p>
            </div>

            <DynamicGrid
                title=""
                showStats={false}
                fetchData={(page, search) => getTestimonialPublicListAction(page, search)}
                gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                renderItem={(item: TestimonialListItem) => <TestimonialCard item={item} />}
            />
        </div>
    )
}
