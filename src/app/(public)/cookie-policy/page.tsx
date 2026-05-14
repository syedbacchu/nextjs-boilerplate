import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { Cookie } from 'lucide-react'
import { getCompanyPolicyAction } from '@/features/companyPolicy/actions/companyPolicy.actions'
import PolicyContent from '@/features/companyPolicy/components/PolicyContent'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Cookie Policy - Greensolar',
        description: 'Learn about how Greensolar uses cookies and similar technologies to enhance your browsing experience.',
        image: '/og/default.png',
    })
}

export default async function CookiePolicyPage() {
    let policyData = null

    try {
        const response = await getCompanyPolicyAction('cookie_policy')

        if (response?.success && response.data) {
            policyData = response.data
        }
    } catch (error) {
        console.error('Error fetching cookie policy:', error)
    }

    // Default data if API fails
    if (!policyData) {
        policyData = {
            type: 'cookie_policy' as const,
            content: `
                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">What Are Cookies?</h2>
                    <div class="bg-slate-50 rounded-2xl p-6">
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by:
                        </p>
                        <ul class="list-disc list-inside text-slate-600 space-y-2 pl-4">
                            <li>Remembering your preferences and settings</li>
                            <li>Keeping you logged in during your visit</li>
                            <li>Understanding how you use our website</li>
                            <li>Improving website performance and functionality</li>
                            <li>Providing personalized content and recommendations</li>
                        </ul>
                    </div>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Types of Cookies We Use</h2>

                    <div class="border-l-4 border-red-500 bg-red-50 rounded-r-2xl p-6 mb-4">
                        <h3 class="text-lg font-bold text-slate-900 mb-3">Essential Cookies (Required)</h3>
                        <p class="text-slate-600 mb-3">These cookies are necessary for the website to function properly:</p>
                        <ul class="list-disc list-inside text-slate-600 space-y-1 text-sm">
                            <li>User authentication and account security</li>
                            <li>Payment processing</li>
                            <li>Security and fraud prevention</li>
                        </ul>
                        <p class="text-sm text-slate-500 mt-3">These cookies cannot be disabled.</p>
                    </div>

                    <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-2xl p-6 mb-4">
                        <h3 class="text-lg font-bold text-slate-900 mb-3">Performance Cookies</h3>
                        <p class="text-slate-600 mb-3">These cookies help us understand how visitors interact with our website:</p>
                        <ul class="list-disc list-inside text-slate-600 space-y-1 text-sm">
                            <li>Pages visited and time spent on pages</li>
                            <li>Error messages encountered</li>
                            <li>Browser type and device information</li>
                        </ul>
                    </div>

                    <div class="border-l-4 border-green-500 bg-green-50 rounded-r-2xl p-6 mb-4">
                        <h3 class="text-lg font-bold text-slate-900 mb-3">Functionality Cookies</h3>
                        <p class="text-slate-600 mb-3">These cookies remember your choices and preferences:</p>
                        <ul class="list-disc list-inside text-slate-600 space-y-1 text-sm">
                            <li>Language and region preferences</li>
                            <li>Font size and display settings</li>
                            <li>Remembering items in inquiry forms</li>
                        </ul>
                    </div>

                    <div class="border-l-4 border-amber-500 bg-amber-50 rounded-r-2xl p-6">
                        <h3 class="text-lg font-bold text-slate-900 mb-3">Targeting/Advertising Cookies</h3>
                        <p class="text-slate-600 mb-3">These cookies are used to deliver relevant advertisements:</p>
                        <ul class="list-disc list-inside text-slate-600 space-y-1 text-sm">
                            <li>Personalized ads based on your browsing</li>
                            <li>Tracking ad campaign performance</li>
                            <li>Limiting ad frequency</li>
                        </ul>
                    </div>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">How to Manage Cookies</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        Most web browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul class="list-disc list-inside text-slate-600 space-y-2 pl-4">
                        <li>Block all cookies</li>
                        <li>Accept only first-party cookies</li>
                        <li>Delete existing cookies</li>
                        <li>Set notifications when cookies are set</li>
                    </ul>
                    <p class="text-slate-600 leading-relaxed mt-4">
                        Blocking or deleting cookies may affect your browsing experience and some features of our website may not function properly.
                    </p>
                </div>

                <div class="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-3xl p-8">
                    <h2 class="text-2xl font-bold mb-4">Questions About Cookies?</h2>
                    <p class="text-blue-50 leading-relaxed mb-4">
                        If you have questions about our use of cookies or this policy, please contact us:
                    </p>
                    <div class="space-y-2">
                        <p><strong>Email:</strong> privacy@greensolar.com</p>
                        <p><strong>Phone:</strong> +880 1800-000000</p>
                        <p><strong>Address:</strong> House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh</p>
                    </div>
                </div>
            `
        }
    }

    return (
        <main className="w-full">
            <PolicyContent policy={policyData} title="Cookie Policy" />
        </main>
    )
}
