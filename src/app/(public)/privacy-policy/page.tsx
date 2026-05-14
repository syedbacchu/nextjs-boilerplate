import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { Shield } from 'lucide-react'
import { getCompanyPolicyAction } from '@/features/companyPolicy/actions/companyPolicy.actions'
import PolicyContent from '@/features/companyPolicy/components/PolicyContent'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Privacy Policy - Greensolar',
        description: 'Learn how Greensolar collects, uses, and protects your personal information. Your privacy is important to us.',
        image: '/og/default.png',
    })
}

export default async function PrivacyPolicyPage() {
    let policyData = null

    try {
        const response = await getCompanyPolicyAction('privacy_policy')

        if (response?.success && response.data) {
            policyData = response.data
        }
    } catch (error) {
        console.error('Error fetching privacy policy:', error)
    }

    // Default data if API fails
    if (!policyData) {
        policyData = {
            type: 'privacy_policy' as const,
            content: `
                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        At Greensolar ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our company.
                    </p>
                    <p class="text-slate-600 leading-relaxed">
                        By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use our website or services.
                    </p>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                    <h3 class="text-lg font-semibold text-slate-900 mb-2">Personal Information</h3>
                    <ul class="list-disc list-inside text-slate-600 space-y-2 mb-4">
                        <li>Name, email address, phone number</li>
                        <li>Home/business address</li>
                        <li>Payment information (processed securely)</li>
                        <li>Energy consumption data</li>
                        <li>Communication preferences</li>
                    </ul>
                    <h3 class="text-lg font-semibold text-slate-900 mb-2">Technical Information</h3>
                    <ul class="list-disc list-inside text-slate-600 space-y-2">
                        <li>IP address and browser type</li>
                        <li>Device information and operating system</li>
                        <li>Pages visited and time spent on our site</li>
                        <li>Referring website information</li>
                        <li>Cookies and similar technologies</li>
                    </ul>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">How We Use Your Information</h2>
                    <div class="bg-slate-50 rounded-2xl p-6 space-y-3">
                        <p class="text-slate-700">We use your information for:</p>
                        <ul class="list-disc list-inside text-slate-600 space-y-2 pl-4">
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

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Your Privacy Rights</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">You have the right to:</p>
                    <ul class="list-disc list-inside text-slate-600 space-y-2 pl-4">
                        <li>Access and receive a copy of your personal data</li>
                        <li>Rectify inaccurate or incomplete data</li>
                        <li>Request deletion of your personal data</li>
                        <li>Object to processing of your personal data</li>
                        <li>Withdraw consent at any time</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>
                    <p class="text-slate-600 leading-relaxed mt-4">
                        To exercise these rights, please contact us at privacy@greensolar.com
                    </p>
                </div>

                <div class="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div class="space-y-2 text-slate-700">
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
            <PolicyContent policy={policyData} title="Privacy Policy" />
        </main>
    )
}
