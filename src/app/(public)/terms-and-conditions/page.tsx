import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { FileText } from 'lucide-react'
import { getCompanyPolicyAction } from '@/features/companyPolicy/actions/companyPolicy.actions'
import PolicyContent from '@/features/companyPolicy/components/PolicyContent'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Terms and Conditions - Greensolar',
        description: 'Read our terms and conditions to understand your rights and responsibilities when using Greensolar services.',
        image: '/og/default.png',
    })
}

export default async function TermsAndConditionsPage() {
    let policyData = null

    try {
        const response = await getCompanyPolicyAction('terms_condition')

        if (response?.success && response.data) {
            policyData = response.data
        }
    } catch (error) {
        console.error('Error fetching terms and conditions:', error)
    }

    // Default data if API fails
    if (!policyData) {
        policyData = {
            type: 'terms_condition' as const,
            content: `
                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        Welcome to Greensolar. These Terms and Conditions ("Terms") govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
                    </p>
                    <p class="text-slate-600 leading-relaxed">
                        If you do not agree with these Terms, please do not use our website or services. We recommend reading these Terms carefully before proceeding.
                    </p>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Our Services</h2>
                    <div class="bg-slate-50 rounded-2xl p-6 space-y-3">
                        <p class="text-slate-700 mb-3">Greensolar provides the following services:</p>
                        <ul class="list-disc list-inside text-slate-600 space-y-2">
                            <li>Solar panel installation and maintenance</li>
                            <li>Solar system design and consultation</li>
                            <li>Residential, commercial, and industrial solar solutions</li>
                            <li>Solar irrigation systems</li>
                            <li>Technical support and after-sales service</li>
                            <li>Site surveys and energy assessments</li>
                        </ul>
                        <p class="text-slate-600 mt-4">
                            We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                        </p>
                    </div>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Your Responsibilities</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">As a user of our services, you agree to:</p>
                    <ul class="list-disc list-inside text-slate-600 space-y-2 pl-4">
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

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Orders and Payments</h2>
                    <div class="space-y-4 text-slate-600">
                        <p>All prices are quoted in Bangladeshi Taka (BDT) unless otherwise stated.</p>
                        <p>We require a deposit before commencing work. The deposit amount will be specified in your quote.</p>
                        <p>Final payment is due upon completion of installation and customer satisfaction.</p>
                        <p>Payment methods include bank transfer, mobile banking, and cash.</p>
                        <p>Installation timelines are estimates and may vary based on weather, material availability, and other factors.</p>
                    </div>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Warranties</h2>
                    <div class="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
                        <p class="text-slate-700 mb-3">We offer the following warranties:</p>
                        <ul class="list-disc list-inside text-slate-600 space-y-2">
                            <li><strong>Solar Panels:</strong> 25-year performance warranty</li>
                            <li><strong>Inverters:</strong> 5-10 year manufacturer warranty</li>
                            <li><strong>Installation:</strong> 1-3 year workmanship warranty</li>
                            <li><strong>Batteries:</strong> 5-10 year warranty (depending on manufacturer)</li>
                        </ul>
                        <p class="text-slate-600 mt-4 text-sm">
                            Warranty claims are subject to manufacturer terms and conditions. Improper use, negligence, or unauthorized modifications may void warranty coverage.
                        </p>
                    </div>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Limitation of Liability</h2>
                    <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                        <p class="text-slate-700 mb-3">
                            <strong>Important:</strong> Greensolar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                        </p>
                        <ul class="list-disc list-inside text-slate-600 space-y-2">
                            <li>Lost profits or revenue</li>
                            <li>Loss of data or business opportunities</li>
                            <li>Property damage (unless caused by our negligence)</li>
                            <li>Power outages or interruptions</li>
                            <li>Third-party actions or events beyond our control</li>
                        </ul>
                        <p class="text-slate-600 mt-4 text-sm">
                            Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                        </p>
                    </div>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Cancellation and Refunds</h2>
                    <div class="space-y-4 text-slate-600">
                        <p><strong>Cancellation Before Installation:</strong> You may cancel your order before installation begins. A cancellation fee may apply to cover administrative costs.</p>
                        <p><strong>Cancellation After Installation:</strong> Once installation has begun, cancellations are not accepted. You will be responsible for all work completed and materials ordered.</p>
                        <p><strong>Refunds:</strong> Refunds are processed within 14-30 business days. Deposits may be non-refundable if materials have been ordered or work has been scheduled.</p>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-3xl p-8">
                    <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
                    <p class="text-blue-50 leading-relaxed mb-4">
                        If you have questions about these Terms and Conditions, please contact us:
                    </p>
                    <div class="space-y-2">
                        <p><strong>Email:</strong> legal@greensolar.com</p>
                        <p><strong>Phone:</strong> +880 1800-000000</p>
                        <p><strong>Address:</strong> House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh</p>
                    </div>
                </div>
            `
        }
    }

    return (
        <main className="w-full">
            <PolicyContent policy={policyData} title="Terms and Conditions" />
        </main>
    )
}
