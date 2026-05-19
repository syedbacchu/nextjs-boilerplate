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

export default function TestimonialsHomeSection({
  testimonials,
}: TestimonialsHomeSectionProps) {
  return (
    <section className="bg-gradient-to-b from-emerald-50/70 to-white py-10 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600 sm:text-sm sm:tracking-[0.28em]">
            Client Feedback
          </p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 sm:mt-3 sm:w-24" />
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <button
            type="button"
            aria-label="Previous testimonials"
            className="hidden h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm lg:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 sm:gap-6">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-[18px] border border-emerald-100 bg-white p-4 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:rounded-[24px] sm:p-6"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4"
                    />
                  ))}
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-700 sm:mt-4 sm:text-base sm:leading-7">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="mt-4 flex items-end justify-between gap-3 sm:mt-6 sm:gap-4">
                  <p className="text-xs font-medium text-slate-600 sm:text-sm">
                    - {testimonial.authorRole}
                  </p>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-700 text-xs font-bold text-white shadow-lg sm:h-14 sm:w-14 sm:text-sm">
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

        <div className="mt-6 overflow-hidden rounded-[20px] bg-gradient-to-r from-emerald-700 to-green-600 p-4 text-white shadow-[0_18px_48px_rgba(5,68,36,0.28)] sm:mt-8 sm:rounded-[28px] sm:p-5 lg:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 sm:h-14 sm:w-14 sm:rounded-2xl">
                <Headphones className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
                  Ready to Switch to Solar?
                </h3>
                <p className="mt-1 text-xs text-emerald-50 sm:text-sm">
                  Get a free site survey and custom proposal today.
                </p>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffd54a] px-5 py-3 text-sm font-bold text-slate-900 transition-colors duration-200 hover:bg-[#ffcf2f] sm:px-6 sm:py-4 sm:text-base"
            >
              Get Free Site Survey
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
