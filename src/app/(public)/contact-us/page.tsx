import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { getFAQAction } from '@/features/faq/actions/faq.actions'
import ContactForm from '@/features/contact/components/ContactForm'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Contact Us - Get in Touch',
        description: 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
        image: '/og/default.png',
    })
}

export default async function ContactUsPage() {
    // Fetch FAQs from API
    let faqs = []

    try {
        const response = await getFAQAction(1, 20)

        if (response?.data && response.data.length > 0) {
            faqs = response.data
        }
    } catch (error) {
        console.error('Error fetching FAQs:', error)
    }

    // Default FAQs if API fails or returns no data
    if (faqs.length === 0) {
        faqs = [
            {
                id: 1,
                question: "How much does a solar system cost?",
                answer: "The cost varies depending on system size, your energy needs, and installation requirements. Contact us for a free site survey and customized quote.",
                category: { name: "General" }
            },
            {
                id: 2,
                question: "How long does installation take?",
                answer: "Most residential installations are completed within 1-3 days. Commercial projects may take 1-2 weeks depending on system size and complexity.",
                category: { name: "General" }
            },
            {
                id: 3,
                question: "Do you offer warranties?",
                answer: "Yes! We offer comprehensive warranties including 25-year performance warranty on panels and 5-10 year warranty on inverters and installation.",
                category: { name: "General" }
            },
            {
                id: 4,
                question: "Do you provide maintenance services?",
                answer: "Absolutely! We offer ongoing maintenance and support services to ensure your system operates at peak efficiency throughout its lifetime.",
                category: { name: "General" }
            }
        ]
    }

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Get in Touch
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                            Have questions about solar energy? We're here to help. Reach out to us and let's start your solar journey today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Contact Information */}
                            <div className="lg:col-span-1 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                                    <p className="text-slate-600 mb-8">
                                        Fill out the form and our team will get back to you within 24 hours.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                                            <p className="text-slate-600">
                                                House 12, Road 5, Dhanmondi<br />
                                                Dhaka 1205, Bangladesh
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                                            <p className="text-slate-600">
                                                <a href="tel:+8801800000000" className="hover:text-blue-600 transition-colors">
                                                    +880 1800-000000
                                                </a><br />
                                                <a href="tel:+8801900000000" className="hover:text-blue-600 transition-colors">
                                                    +880 1900-000000
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                                            <p className="text-slate-600">
                                                <a href="mailto:info@greensolar.com" className="hover:text-blue-600 transition-colors">
                                                    info@greensolar.com
                                                </a><br />
                                                <a href="mailto:support@greensolar.com" className="hover:text-blue-600 transition-colors">
                                                    support@greensolar.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                                            <p className="text-slate-600">
                                                Sat - Thu: 9:00 AM - 6:00 PM<br />
                                                Friday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 bg-slate-200">
                <div className="w-full h-full flex items-center justify-center bg-slate-300">
                    <div className="text-center">
                        <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600 text-lg">Map integration would go here</p>
                        <p className="text-slate-500 text-sm mt-2">Google Maps or other map service</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-lg text-slate-600">
                                Quick answers to common questions
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <div key={faq.id} className="bg-white rounded-2xl p-6 shadow-md">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                                    <p className="text-slate-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
