import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface TestimonialItem {
  id: number
  quote: string
  name: string
  location: string
  avatar?: string
}

interface TestimonialsHomeSectionProps {
  testimonials: TestimonialItem[]
}

export default function BatteryTestimonialSection({
  testimonials,
}: TestimonialsHomeSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#69c84a]">
            What Our Customers Say
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Real People, Real Stories
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 bg-[#69c84a]" />
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[auto_1fr_auto]">
          <button
            type="button"
            aria-label="Previous testimonials"
            className="hidden h-12 w-12 items-center justify-center text-slate-500 transition-colors hover:text-slate-900 lg:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="flex gap-1 text-[#69c84a]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>

                <p className="mt-5 min-h-[120px] text-[1.05rem] leading-8 text-slate-700">
                  {testimonial.quote}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-100">
                    <Image
                      src={testimonial.avatar ?? '/default-user.png'}
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-950">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonials"
            className="hidden h-12 w-12 items-center justify-center text-slate-500 transition-colors hover:text-slate-900 lg:inline-flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <span
              key={testimonial.id}
              className={`h-3 w-3 rounded-full ${
                index === 0 ? 'bg-[#69c84a]' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
