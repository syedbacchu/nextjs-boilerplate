import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { Shield, Eye, Lock, UserCheck } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Privacy Policy - Greensolar',
        description: 'Learn how Greensolar collects, uses, and protects your personal information. Your privacy is important to us.',
        image: '/og/default.png',
    })
}

export default function PrivacyPolicyPage() {
    const lastUpdated = "May 2025"

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-10 h-10 text-blue-300" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Privacy Policy
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
                                At Greensolar ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our company.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use our website or services.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
                            </div>

                            <div className="space-y-6 pl-16">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Personal Information</h3>
                                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                                        <li>Name, email address, phone number</li>
                                        <li>Home/business address</li>
                                        <li>Payment information (processed securely)</li>
                                        <li>Energy consumption data</li>
                                        <li>Communication preferences</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Technical Information</h3>
                                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                                        <li>IP address and browser type</li>
                                        <li>Device information and operating system</li>
                                        <li>Pages visited and time spent on our site</li>
                                        <li>Referring website information</li>
                                        <li>Cookies and similar technologies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <UserCheck className="w-6 h-6 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
                                <p className="text-slate-700">We use your information for:</p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2 pl-4">
                                    <li>Providing and improving our solar energy solutions</li>
                                    <li>Processing requests, quotes, and orders</li>
                                    <li>Communicating with you about our services</li>
                                    <li>Sending technical updates and promotional content (with your consent)</li>
                                    <li>Conducting market research and analytics</li>
                                    <li>Complying with legal obligations</li>
                                    <li>Preventing fraud and ensuring security</li>
                                </ul>
                            </div>
                        </div>

                        {/* Data Security */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-amber-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-4">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Our security measures include:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-3 pl-4">
                                <li>SSL/TLS encryption for data transmission</li>
                                <li>Secure payment processing through PCI-compliant providers</li>
                                <li>Regular security audits and updates</li>
                                <li>Restricted access to personal data</li>
                                <li>Secure data storage facilities</li>
                            </ul>
                        </div>

                        {/* Sharing Your Information */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sharing Your Information</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 pl-4">
                                <li><strong>Service Providers:</strong> With trusted partners who assist us in operating our business (e.g., payment processors, hosting services)</li>
                            </ul>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Privacy Rights</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 pl-4">
                                <li>Access and receive a copy of your personal data</li>
                                <li>Rectify inaccurate or incomplete data</li>
                                <li>Request deletion of your personal data</li>
                                <li>Object to processing of your personal data</li>
                                <li>Withdraw consent at any time</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-4">
                                To exercise these rights, please contact us at privacy@greensolar.com
                            </p>
                        </div>

                        {/* Cookies */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Cookies and Tracking</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                For more details, please refer to our Cookie Policy.
                            </p>
                        </div>

                        {/* Children's Privacy */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Children's Privacy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                            </p>
                        </div>

                        {/* Policy Changes */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Changes to This Policy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="space-y-2 text-slate-700">
                                <p><strong>Email:</strong> privacy@greensolar.com</p>
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
