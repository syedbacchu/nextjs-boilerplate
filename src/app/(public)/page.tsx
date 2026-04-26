import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: `NextJs - Transform Data Into Actionable Insights`,
        description: `Transform your data into actionable insights with our powerful analytics platform. Make informed decisions and drive business growth.`,
        image: "/og/default.png",
    })
}

export default async function Page() {

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="absolute inset-0 bg-grid-slate-200/[0.5] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                                    Transform Data Into
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
                                        Actionable Insights
                                    </span>
                                </h1>
                                <p className="max-w-2xl text-lg text-slate-600 sm:text-xl">
                                    Unlock the power of your data with our advanced analytics platform. Make smarter decisions, identify trends, and drive business growth with real-time dashboards and reports.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/40"
                                >
                                    Get Started Free
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
                                >
                                    Learn More
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="pt-8">
                                <p className="text-sm font-medium text-slate-500 mb-4">Trusted by leading companies worldwide</p>
                                <div className="flex flex-wrap gap-8 items-center opacity-60">
                                    <div className="text-2xl font-bold text-slate-400">TechCorp</div>
                                    <div className="text-2xl font-bold text-slate-400">DataFlow</div>
                                    <div className="text-2xl font-bold text-slate-400">Analytics Pro</div>
                                    <div className="text-2xl font-bold text-slate-400">CloudScale</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Hero Image */}
                        <div className="relative">
                            <div className="relative mx-auto w-full max-w-lg">
                                {/* Decorative elements */}
                                <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
                                <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

                                {/* Main illustration placeholder */}
                                <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 shadow-2xl shadow-blue-600/30">
                                    <div className="aspect-square rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                        <div className="text-center text-white space-y-4">
                                            {/* Analytics dashboard icon representation */}
                                            <div className="flex justify-center gap-2">
                                                <div className="h-20 w-8 rounded bg-white/30 animate-pulse" />
                                                <div className="h-32 w-8 rounded bg-white/50 animate-pulse delay-100" />
                                                <div className="h-24 w-8 rounded bg-white/40 animate-pulse delay-200" />
                                                <div className="h-16 w-8 rounded bg-white/20 animate-pulse delay-300" />
                                            </div>
                                            <p className="text-lg font-semibold">Real-time Analytics</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Everything you need to succeed
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Powerful features to help you analyze, visualize, and act on your data
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="group rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-slate-900">Real-time Analytics</h3>
                            <p className="text-slate-600">Monitor your data in real-time with interactive dashboards and live updates.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-slate-900">Data Integration</h3>
                            <p className="text-slate-600">Connect all your data sources seamlessly and unify your analytics.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-slate-900">Enterprise Security</h3>
                            <p className="text-slate-600">Bank-grade security to keep your data safe and compliant.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-slate-900">Lightning Fast</h3>
                            <p className="text-slate-600">Optimized performance for quick insights and rapid decision-making.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="group rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-slate-900">Mobile Ready</h3>
                            <p className="text-slate-600">Access your analytics anywhere with our responsive mobile interface.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="group rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-slate-900">Team Collaboration</h3>
                            <p className="text-slate-600">Share insights and collaborate with your team in real-time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to transform your data?
                    </h2>
                    <p className="mt-4 text-lg text-blue-100">
                        Join thousands of companies already using our platform to drive growth.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Start Free Trial
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600"
                        >
                            Schedule Demo
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
