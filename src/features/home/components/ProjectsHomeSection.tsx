import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

interface ProjectItem {
  id: number
  title: string
  location: string
  savings: string
  image: string
}

interface ProjectsHomeSectionProps {
  projects: ProjectItem[]
}

export default function ProjectsHomeSection({
  projects,
}: ProjectsHomeSectionProps) {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 border-b border-emerald-100 pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:pb-6">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600 sm:text-sm sm:tracking-[0.28em]">
              Featured Work
            </p>
            <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
              Our Recent Projects
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 sm:mt-3 sm:w-24 sm:mx-0" />
          </div>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-100 sm:px-5 sm:py-2.5 sm:text-sm sm:self-auto"
          >
            View All Projects
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_14px_36px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:rounded-[24px]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-2.5 p-4 sm:space-y-3 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {project.title}
                  </h3>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 sm:text-sm">Savings</p>
                    <p className="text-sm font-bold text-emerald-600 sm:text-base">
                      {project.savings}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
                  <MapPin className="h-3.5 w-3.5 text-slate-400 sm:h-4 sm:w-4" />
                  <span>{project.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
