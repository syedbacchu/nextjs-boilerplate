import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import { HelpCircle } from "lucide-react"
import { getFAQAction } from "@/features/faq/actions/faq.actions"
import FAQPublicList from "@/features/faq/components/FAQPublicList"

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: "FAQ - Frequently Asked Questions",
        description: "Find answers to commonly asked questions about our products and services.",
        image: "/og/default.png",
    })
}

export default async function FAQPage() {
    let faqs = []
    let totalCount = 0

    try {
        const response = await getFAQAction(1, 20)

        if (response?.data && response.data.length > 0) {
            faqs = response.data
            totalCount = response.meta.total_count
        }
    } catch (error) {
        console.error('Error fetching FAQs:', error)
    }

    // Default FAQs if API fails
    if (faqs.length === 0) {
        faqs = [
            {
                id: 1,
                category_id: 1,
                question: "How long does installation take?",
                answer: "Installation usually takes around 10–20 days, depending on site conditions.",
                attestment: null,
                sort_order: 0,
                category: {
                    id: 1,
                    name: "General",
                    slug: null
                }
            },
            {
                id: 2,
                category_id: 1,
                question: "How much space is required for installation?",
                answer: "Typically, around 4,000–5,000 square feet of roof or open space is needed.",
                attestment: null,
                sort_order: 0,
                category: {
                    id: 1,
                    name: "General",
                    slug: null
                }
            },
            {
                id: 3,
                category_id: 1,
                question: "How much electricity can a 50kW system generate?",
                answer: "A 50kW solar system can generate approximately 180–220 kWh of electricity per day, depending on sunlight and location.",
                attestment: null,
                sort_order: 0,
                category: {
                    id: 1,
                    name: "General",
                    slug: null
                }
            }
        ]
        totalCount = 3
    }

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <HelpCircle className="w-10 h-10 text-blue-300" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            Find answers to commonly asked questions about our products and services.
                        </p>
                        <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                            <span className="text-2xl font-bold text-green-400">{totalCount}</span>
                            <span className="text-blue-100">Questions Answered</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Content Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <FAQPublicList faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* Still Have Questions Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Still Have Questions?
                            </h2>
                            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                                Can't find the answer you're looking for? Please reach out to our friendly team.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                                >
                                    Contact Us
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a
                                    href="tel:+8801800000000"
                                    className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-all duration-300 hover:-translate-y-0.5 border-2 border-white/20"
                                >
                                    Call Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
