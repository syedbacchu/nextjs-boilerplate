export default function LoadingPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_34%),linear-gradient(180deg,_#f8fafc_0%,_#eef6ff_45%,_#f8fafc_100%)]">
            <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-12">
                <section className="grid w-full gap-8 overflow-hidden rounded-[2rem] border border-sky-100 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500" />
                            Preparing page
                        </div>

                        <div className="space-y-4">
                            <div className="h-4 w-32 animate-pulse rounded-full bg-slate-200" />
                            <div className="h-14 w-full max-w-xl animate-pulse rounded-2xl bg-slate-200" />
                            <div className="h-5 w-full max-w-2xl animate-pulse rounded-full bg-slate-100" />
                            <div className="h-5 w-full max-w-xl animate-pulse rounded-full bg-slate-100" />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                <div className="mb-4 h-4 w-24 animate-pulse rounded-full bg-slate-200" />
                                <div className="space-y-3">
                                    <div className="h-3 w-full animate-pulse rounded-full bg-slate-200" />
                                    <div className="h-3 w-5/6 animate-pulse rounded-full bg-slate-200" />
                                    <div className="h-3 w-2/3 animate-pulse rounded-full bg-slate-200" />
                                </div>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                <div className="mb-4 h-4 w-28 animate-pulse rounded-full bg-slate-200" />
                                <div className="space-y-3">
                                    <div className="h-3 w-full animate-pulse rounded-full bg-slate-200" />
                                    <div className="h-3 w-4/5 animate-pulse rounded-full bg-slate-200" />
                                    <div className="h-3 w-3/5 animate-pulse rounded-full bg-slate-200" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(145deg,_#0f172a,_#1e3a8a_55%,_#38bdf8)] p-5">
                        <div className="flex h-full min-h-[320px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                            <div className="space-y-4">
                                <div className="h-5 w-32 animate-pulse rounded-full bg-white/25" />
                                <div className="h-28 animate-pulse rounded-[1.25rem] bg-white/15" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-3 w-full animate-pulse rounded-full bg-white/20" />
                                <div className="h-3 w-5/6 animate-pulse rounded-full bg-white/20" />
                                <div className="h-3 w-2/3 animate-pulse rounded-full bg-white/20" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
