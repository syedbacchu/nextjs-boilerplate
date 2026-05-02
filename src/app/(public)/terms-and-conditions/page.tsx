import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Terms and Conditions - Greensolar',
        description: 'Read our terms and conditions to understand your rights and responsibilities when using Greensolar services.',
        image: '/og/default.png',
    })
}

export default function TermsAndConditionsPage() {
    const lastUpdated = "May 2025"

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <FileText className="w-10 h-10 text-blue-300" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Terms and Conditions
                        </h1>
                        <p className="text-xl text-blue-100">
                            Last updated: {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Introduction */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Welcome to Greensolar. These Terms and Conditions ("Terms") govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                If you do not agree with these Terms, please do not use our website or services. We recommend reading these Terms carefully before proceeding.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Our Services</h2>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
                                <p className="text-slate-700 mb-3">Greensolar provides the following services:</p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2">
                                    <li>Solar panel installation and maintenance</li>
                                    <li>Solar system design and consultation</li>
                                    <li>Residential, commercial, and industrial solar solutions</li>
                                    <li>Solar irrigation systems</li>
                                    <li>Technical support and after-sales service</li>
                                    <li>Site surveys and energy assessments</li>
                                </ul>
                                <p className="text-slate-600 mt-4">
                                    We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                                </p>
                            </div>
                        </div>

                        {/* User Responsibilities */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <AlertCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Your Responsibilities</h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-4">As a user of our services, you agree to:</p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 pl-4">
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Not use our services for any illegal or unauthorized purpose</li>
                                <li>Not interfere with or disrupt our services or systems</li>
                                <li>Obtain all necessary permits and approvals for installations</li>
                                <li>Ensure your property meets installation requirements</li>
                                <li>Provide safe access to your property for our technicians</li>
                            </ul>
                        </div>

                        {/* Orders and Payments */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Orders and Payments</h2>
                            <div className="space-y-4 text-slate-600">
                                <p>All prices are quoted in Bangladeshi Taka (BDT) unless otherwise stated.</p>
                                <p>We require a deposit before commencing work. The deposit amount will be specified in your quote.</p>
                                <p>Final payment is due upon completion of installation and customer satisfaction.</p>
                                <p>Payment methods include bank transfer, mobile banking, and cash.</p>
                                <p>Installation timelines are estimates and may vary based on weather, material availability, and other factors.</p>
                            </div>
                        </div>

                        {/* Warranties */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Warranties</h2>
                            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
                                <p className="text-slate-700 mb-3">We offer the following warranties:</p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2">
                                    <li><strong>Solar Panels:</strong> 25-year performance warranty</li>
                                    <li><strong>Inverters:</strong> 5-10 year manufacturer warranty</li>
                                    <li><strong>Installation:</strong> 1-3 year workmanship warranty</li>
                                    <li><strong>Batteries:</strong> 5-10 year warranty (depending on manufacturer)</li>
                                </ul>
                                <p className="text-slate-600 mt-4 text-sm">
                                    Warranty claims are subject to manufacturer terms and conditions. Improper use, negligence, or unauthorized modifications may void warranty coverage.
                                </p>
                            </div>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                    <Scale className="w-6 h-6 text-amber-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                                <p className="text-slate-700 mb-3">
                                    <strong>Important:</strong> Greensolar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2">
                                    <li>Lost profits or revenue</li>
                                    <li>Loss of data or business opportunities</li>
                                    <li>Property damage (unless caused by our negligence)</li>
                                    <li>Power outages or interruptions</li>
                                    <li>Third-party actions or events beyond our control</li>
                                </ul>
                                <p className="text-slate-600 mt-4 text-sm">
                                    Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                                </p>
                            </div>
                        </div>

                        {/* Cancellation and Refunds */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Cancellation and Refunds</h2>
                            <div className="space-y-4 text-slate-600">
                                <p><strong>Cancellation Before Installation:</strong> You may cancel your order before installation begins. A cancellation fee may apply to cover administrative costs.</p>
                                <p><strong>Cancellation After Installation:</strong> Once installation has begun, cancellations are not accepted. You will be responsible for all work completed and materials ordered.</p>
                                <p><strong>Refunds:</strong> Refunds are processed within 14-30 business days. Deposits may be non-refundable if materials have been ordered or work has been scheduled.</p>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Intellectual Property</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                All content on our website, including text, graphics, logos, images, and software, is the property of Greensolar or our licensors and is protected by copyright and other intellectual property laws.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                You may not reproduce, modify, distribute, or create derivative works without our prior written consent.
                            </p>
                        </div>

                        {/* Force Majeure */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Force Majeure</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We are not liable for delays or failures to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, war, strikes, government actions, or supply chain disruptions.
                            </p>
                        </div>

                        {/* Governing Law */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Governing Law and Dispute Resolution</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                These Terms are governed by the laws of Bangladesh. Any disputes shall be resolved through negotiation in good faith. If negotiation fails, disputes shall be settled in the courts of Dhaka, Bangladesh.
                            </p>
                        </div>

                        {/* Modifications */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Modifications to Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services after changes constitutes acceptance of the new Terms.
                            </p>
                        </div>

                        {/* Severability */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Severability</h2>
                            <p className="text-slate-600 leading-relaxed">
                                If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-3xl p-8">
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <p className="text-blue-50 leading-relaxed mb-4">
                                If you have questions about these Terms and Conditions, please contact us:
                            </p>
                            <div className="space-y-2">
                                <p><strong>Email:</strong> legal@greensolar.com</p>
                                <p><strong>Phone:</strong> +880 1800-000000</p>
                                <p><strong>Address:</strong> House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
