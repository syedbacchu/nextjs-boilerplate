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

export default function VexaevProjectSection({
  projects,
}: ProjectsHomeSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-emerald-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-4xl">
              Our Recent Projects
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 sm:mx-0" />
          </div>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-100 sm:self-auto"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_14px_36px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
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

              <div className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Savings</p>
                    <p className="text-sm font-bold text-emerald-600 sm:text-base">
                      {project.savings}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-slate-400" />
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
