'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function ErrorPage({
    error,
    unstable_retry,
}: {
    error: Error & { digest?: string }
    unstable_retry: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.14),_transparent_34%),linear-gradient(180deg,_#fff7ed_0%,_#fffaf5_42%,_#ffffff_100%)]">
            <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-12">
                <section className="grid w-full gap-8 overflow-hidden rounded-[2rem] border border-orange-100 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.05fr_0.95fr] md:p-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-700">
                            <span className="h-2 w-2 rounded-full bg-orange-500" />
                            Something broke
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-500">
                                Application error
                            </p>
                            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                                The page failed while loading.
                            </h1>
                            <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                                This is usually temporary. Retry the current segment or return to a stable page.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => unstable_retry()}
                                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                                Try again
                            </button>
                            <Link
                                href="/"
                                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                            >
                                Go home
                            </Link>
                        </div>

                        {error.digest && (
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                                Reference ID: <span className="font-mono font-semibold text-slate-900">{error.digest}</span>
                            </div>
                        )}
                    </div>

                    <div className="rounded-[1.75rem] border border-orange-200 bg-[linear-gradient(145deg,_#7c2d12,_#ea580c_55%,_#fdba74)] p-5">
                        <div className="flex h-full min-h-[320px] flex-col justify-between rounded-[1.5rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
                            <div>
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl">
                                    !
                                </div>
                                <h2 className="text-2xl font-bold">Recovery options</h2>
                                <p className="mt-3 max-w-md text-sm leading-7 text-orange-50/90">
                                    If this error keeps happening, check the server logs using the reference ID above and verify the latest API response shape for this route.
                                </p>
                            </div>

                            <div className="grid gap-3 text-sm text-orange-50/90">
                                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                                    Retry to re-fetch and re-render the failed segment.
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                                    Return home if you want a safe path back into the app.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
