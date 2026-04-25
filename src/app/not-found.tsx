import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_32%),linear-gradient(180deg,_#f0fdf4_0%,_#f8fafc_46%,_#ffffff_100%)]">
            <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-12">
                <section className="grid w-full gap-8 overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.05fr_0.95fr] md:p-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            404 page
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-500">
                                Page not found
                            </p>
                            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                                That route does not exist.
                            </h1>
                            <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                                The page may have moved, the link may be outdated, or the URL may be incorrect.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/"
                                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                                Back to home
                            </Link>
                            <Link
                                href="/services"
                                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                            >
                                Browse services
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-emerald-200 bg-[linear-gradient(145deg,_#022c22,_#047857_55%,_#34d399)] p-5">
                        <div className="flex h-full min-h-[320px] flex-col justify-between rounded-[1.5rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
                            <div>
                                <div className="mb-6 text-[88px] font-black leading-none text-white/95">
                                    404
                                </div>
                                <h2 className="text-2xl font-bold">Try a known route</h2>
                                <p className="mt-3 max-w-md text-sm leading-7 text-emerald-50/90">
                                    Start from the homepage or jump into your public service pages to continue navigating.
                                </p>
                            </div>

                            <div className="grid gap-3 text-sm text-emerald-50/90">
                                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                                    Check the URL spelling if you typed it manually.
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                                    Use the site navigation to reach a valid page.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
