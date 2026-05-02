import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Contact Us - Get in Touch',
        description: 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
        image: '/og/default.png',
    })
}

export default function ContactUsPage() {
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
                                <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-2">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                                    placeholder="John"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-2">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                                placeholder="+880 1XXX-XXXXXX"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="quote">Request a Quote</option>
                                                <option value="information">General Information</option>
                                                <option value="support">Technical Support</option>
                                                <option value="partnership">Business Partnership</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                                                placeholder="Tell us about your project or inquiry..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
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
                            {[
                                {
                                    q: "How much does a solar system cost?",
                                    a: "The cost varies depending on system size, your energy needs, and installation requirements. Contact us for a free site survey and customized quote."
                                },
                                {
                                    q: "How long does installation take?",
                                    a: "Most residential installations are completed within 1-3 days. Commercial projects may take 1-2 weeks depending on system size and complexity."
                                },
                                {
                                    q: "Do you offer warranties?",
                                    a: "Yes! We offer comprehensive warranties including 25-year performance warranty on panels and 5-10 year warranty on inverters and installation."
                                },
                                {
                                    q: "Do you provide maintenance services?",
                                    a: "Absolutely! We offer ongoing maintenance and support services to ensure your system operates at peak efficiency throughout its lifetime."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                                    <p className="text-slate-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
