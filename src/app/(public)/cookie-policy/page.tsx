import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { Cookie, Settings, Shield, Info } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Cookie Policy - Greensolar',
        description: 'Learn about how Greensolar uses cookies and similar technologies to enhance your browsing experience.',
        image: '/og/default.png',
    })
}

export default function CookiePolicyPage() {
    const lastUpdated = "May 2025"

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <Cookie className="w-10 h-10 text-blue-300" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Cookie Policy
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
                        {/* What are Cookies */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Cookie className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">What Are Cookies?</h2>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6">
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 space-y-2 pl-4">
                                    <li>Remembering your preferences and settings</li>
                                    <li>Keeping you logged in during your visit</li>
                                    <li>Understanding how you use our website</li>
                                    <li>Improving website performance and functionality</li>
                                    <li>Providing personalized content and recommendations</li>
                                </ul>
                            </div>
                        </div>

                        {/* Types of Cookies We Use */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Settings className="w-6 h-6 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Types of Cookies We Use</h2>
                            </div>

                            <div className="space-y-6">
                                {/* Essential Cookies */}
                                <div className="border-l-4 border-red-500 bg-red-50 rounded-r-2xl p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Essential Cookies (Required)</h3>
                                    <p className="text-slate-600 mb-3">
                                        These cookies are necessary for the website to function properly. They enable core functionality such as:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                                        <li>User authentication and account security</li>
                                        <li>Shopping cart and payment processing</li>
                                        <li>Security and fraud prevention</li>
                                        <li>Compliance with regulations</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 mt-3">These cookies cannot be disabled.</p>
                                </div>

                                {/* Performance Cookies */}
                                <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-2xl p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Performance Cookies</h3>
                                    <p className="text-slate-600 mb-3">
                                        These cookies help us understand how visitors interact with our website by collecting anonymous analytics data:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                                        <li>Pages visited and time spent on pages</li>
                                        <li>Error messages encountered</li>
                                        <li>Browser type and device information</li>
                                        <li>Geographic location (approximate)</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 mt-3">Used for: Google Analytics, internal analytics</p>
                                </div>

                                {/* Functionality Cookies */}
                                <div className="border-l-4 border-green-500 bg-green-50 rounded-r-2xl p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Functionality Cookies</h3>
                                    <p className="text-slate-600 mb-3">
                                        These cookies remember your choices and preferences to provide enhanced features:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                                        <li>Language and region preferences</li>
                                        <li>Font size and display settings</li>
                                        <li>Remembering items in inquiry forms</li>
                                        <li>Social media integration</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 mt-3">Used for: User experience enhancements</p>
                                </div>

                                {/* Targeting Cookies */}
                                <div className="border-l-4 border-amber-500 bg-amber-50 rounded-r-2xl p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Targeting/Advertising Cookies</h3>
                                    <p className="text-slate-600 mb-3">
                                        These cookies are used to deliver relevant advertisements and measure campaign effectiveness:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                                        <li>Personalized ads based on your browsing</li>
                                        <li>Tracking ad campaign performance</li>
                                        <li>Limiting ad frequency</li>
                                        <li>Cross-site behavioral tracking</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 mt-3">Used for: Google Ads, Facebook Pixel, retargeting</p>
                                </div>
                            </div>
                        </div>

                        {/* Third-Party Cookies */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-purple-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Third-Party Cookies</h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-4">
                                We may allow trusted third parties to place cookies on your device for the services described above. Third-party services we use include:
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Analytics</h4>
                                        <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                                            <li>Google Analytics</li>
                                            <li>Facebook Pixel</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Marketing</h4>
                                        <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                                            <li>Google Ads</li>
                                            <li>LinkedIn Insights</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Social Media</h4>
                                        <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                                            <li>Facebook</li>
                                            <li>YouTube</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Communication</h4>
                                        <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                                            <li>WhatsApp Chat</li>
                                            <li>Email Services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4">
                                These third parties have their own privacy policies and we encourage you to review them.
                            </p>
                        </div>

                        {/* Managing Cookies */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                    <Settings className="w-6 h-6 text-amber-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">How to Manage Cookies</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Browser Settings</h3>
                                    <p className="text-slate-600 mb-4">
                                        Most web browsers allow you to control cookies through their settings. You can:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                                        <li>Block all cookies</li>
                                        <li>Accept only first-party cookies</li>
                                        <li>Delete existing cookies</li>
                                        <li>Set notifications when cookies are set</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Browser-Specific Instructions</h3>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <strong className="text-slate-900">Chrome:</strong>
                                            <span className="text-slate-600"> Settings → Privacy and security → Cookies and other site data</span>
                                        </div>
                                        <div>
                                            <strong className="text-slate-900">Firefox:</strong>
                                            <span className="text-slate-600"> Options → Privacy & Security → Cookies and Site Data</span>
                                        </div>
                                        <div>
                                            <strong className="text-slate-900">Safari:</strong>
                                            <span className="text-slate-600"> Preferences → Privacy → Manage Website Data</span>
                                        </div>
                                        <div>
                                            <strong className="text-slate-900">Edge:</strong>
                                            <span className="text-slate-600"> Settings → Cookies and site permissions → Manage cookies</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                                    <div className="flex gap-3">
                                        <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-2">Important Note</h4>
                                            <p className="text-slate-600 text-sm">
                                                Blocking or deleting cookies may affect your browsing experience and some features of our website may not function properly. Essential cookies cannot be disabled as they are required for the website to operate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cookie Consent Banner */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Cookie Consent Banner</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                When you first visit our website, you will see a cookie consent banner that allows you to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 pl-4">
                                <li>Accept all cookies</li>
                                <li>Decline non-essential cookies</li>
                                <li>Customize your cookie preferences</li>
                                <li>View detailed cookie information</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-4">
                                Your preferences will be saved and respected for future visits. You can change your cookie settings at any time by accessing the cookie settings link in our website footer.
                            </p>
                        </div>

                        {/* Updates to Policy */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Updates to This Policy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We encourage you to review this policy periodically to stay informed about how we use cookies.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-3xl p-8">
                            <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
                            <p className="text-blue-50 leading-relaxed mb-4">
                                If you have questions about our use of cookies or this policy, please contact us:
                            </p>
                            <div className="space-y-2">
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
