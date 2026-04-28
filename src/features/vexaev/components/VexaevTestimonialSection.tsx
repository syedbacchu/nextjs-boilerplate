import Link from "next/link"
import { ChevronLeft, ChevronRight, Headphones, Star } from "lucide-react"

interface TestimonialItem {
  id: number
  quote: string
  authorRole: string
  initials: string
}

interface TestimonialsHomeSectionProps {
  testimonials: TestimonialItem[]
}

export default function VexaevTestimonialSection({
  testimonials,
}: TestimonialsHomeSectionProps) {
  return (
    <section className="bg-gradient-to-b from-emerald-50/70 to-white py-16 sm:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">
            Client Feedback
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-green-600" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <button
            type="button"
            aria-label="Previous testimonials"
            className="hidden h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm lg:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-[24px] border border-emerald-100 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)]"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>

                <p className="mt-4 text-base leading-7 text-slate-700">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="mt-6 flex items-end justify-between gap-4">
                  <p className="text-sm font-medium text-slate-600">
                    - {testimonial.authorRole}
                  </p>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-700 text-sm font-bold text-white shadow-lg">
                    {testimonial.initials}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonials"
            className="hidden h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm lg:inline-flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] bg-gradient-to-r from-emerald-700 to-green-600 p-5 text-white shadow-[0_18px_48px_rgba(5,68,36,0.28)] sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Headphones className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Ready to Switch to Solar?
                </h3>
                <p className="mt-1 text-sm text-emerald-50 sm:text-base">
                  Get a free site survey and custom proposal today.
                </p>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffd54a] px-6 py-4 text-base font-bold text-slate-900 transition-colors duration-200 hover:bg-[#ffcf2f]"
            >
              Get Free Site Survey
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
