import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import { getCompanyPolicyAction } from '@/features/companyPolicy/actions/companyPolicy.actions'
import PolicyContent from '@/features/companyPolicy/components/PolicyContent'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'Data Deletion Policy - Greensolar',
        description: 'Learn about your rights to request deletion of your personal data from Greensolar systems.',
        image: '/og/default.png',
    })
}

export default async function DataDeletionPage() {
    let policyData = null

    try {
        const response = await getCompanyPolicyAction('data_deletion')

        if (response?.success && response.data) {
            policyData = response.data
        }
    } catch (error) {
        console.error('Error fetching data deletion policy:', error)
    }

    // Default data if API fails
    if (!policyData) {
        policyData = {
            type: 'data_deletion' as const,
            content: `
                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        At Greensolar, we respect your right to privacy and understand that you may want your personal data to be deleted from our systems. This Data Deletion Policy explains how you can request the deletion of your personal information and how we handle such requests.
                    </p>
                    <p class="text-slate-600 leading-relaxed">
                        This policy applies to all personal data that we collect and process, including data collected through our website, contact forms, customer inquiries, and service requests.
                    </p>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Your Right to Data Deletion</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        You have the right to request the deletion of your personal data in the following circumstances:
                    </p>
                    <ul class="list-disc list-inside text-slate-600 space-y-2 pl-4">
                        <li>The personal data is no longer necessary for the purposes for which it was collected</li>
                        <li>You withdraw your consent and we have no other legal basis for processing the data</li>
                        <li>You object to the processing and there are no overriding legitimate grounds for processing</li>
                        <li>The personal data has been processed unlawfully</li>
                        <li>The personal data must be erased to comply with a legal obligation</li>
                    </ul>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">How to Request Data Deletion</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        To request the deletion of your personal data, please follow these steps:
                    </p>
                    <div class="bg-slate-50 rounded-2xl p-6 space-y-4">
                        <div class="flex gap-4">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-blue-600 font-bold text-sm">1</span>
                            </div>
                            <div>
                                <h3 class="font-semibold text-slate-900 mb-2">Send a Written Request</h3>
                                <p class="text-slate-600">Send an email to <strong>privacy@greensolar.com</strong> with the subject line "Data Deletion Request"</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-blue-600 font-bold text-sm">2</span>
                            </div>
                            <div>
                                <h3 class="font-semibold text-slate-900 mb-2">Provide Required Information</h3>
                                <p class="text-slate-600">Include your full name, email address, phone number, and specify what data you want deleted</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-blue-600 font-bold text-sm">3</span>
                            </div>
                            <div>
                                <h3 class="font-semibold text-slate-900 mb-2">Verification Process</h3>
                                <p class="text-slate-600">We will verify your identity before processing the request</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-blue-600 font-bold text-sm">4</span>
                            </div>
                            <div>
                                <h3 class="font-semibold text-slate-900 mb-2">Confirmation</h3>
                                <p class="text-slate-600">We will send you a confirmation once your data has been deleted</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Processing Time</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        We will process your data deletion request within <strong>30 days</strong> of receipt. In some cases, this may be extended by an additional 60 days if the request is complex or if we have received multiple requests.
                    </p>
                    <p class="text-slate-600 leading-relaxed">
                        You will be notified if we require additional time to process your request.
                    </p>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Data We Can Delete</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        We can delete the following types of personal data:
                    </p>
                    <ul class="list-disc list-inside text-slate-600 space-y-2 pl-4">
                        <li>Contact information (name, email, phone number)</li>
                        <li>Address and location data</li>
                        <li>Inquiry and correspondence history</li>
                        <li>Service request information</li>
                        <li>Communication preferences</li>
                        <li>Marketing and analytics data</li>
                    </ul>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Exceptions to Data Deletion</h2>
                    <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                        <p class="text-slate-700 mb-3">
                            <strong>Please note:</strong> We may not be able to delete your personal data if we are required to retain it for the following reasons:
                        </p>
                        <ul class="list-disc list-inside text-slate-600 space-y-2">
                            <li>Compliance with legal obligations</li>
                            <li>Establishing, exercising, or defending legal claims</li>
                            <li>Financial record-keeping requirements</li>
                            <li>Public interest purposes</li>
                            <li>Public health purposes</li>
                            <li>Archiving purposes in the public interest</li>
                            <li>Scientific or historical research purposes</li>
                            <li>Warranty and service support obligations</li>
                        </ul>
                        <p class="text-slate-600 mt-4 text-sm">
                            In such cases, we will only retain the data necessary for these specific purposes and will delete all other data.
                        </p>
                    </div>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">What Happens After Deletion</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        Once your data is deleted:
                    </p>
                    <ul class="list-disc list-inside text-slate-600 space-y-2 pl-4">
                        <li>The data will be permanently removed from our active systems</li>
                        <li>Any backups will also be deleted according to our retention schedule</li>
                        <li>You will no longer receive marketing communications from us</li>
                        <li>Your account and access to our services may be affected</li>
                    </ul>
                </div>

                <div class="mb-16">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">Data Retention Period</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        We retain personal data for different periods depending on the purpose:
                    </p>
                    <div class="bg-slate-50 rounded-2xl p-6">
                        <ul class="list-disc list-inside text-slate-600 space-y-2">
                            <li><strong>Customer inquiries:</strong> 2 years from last contact</li>
                            <li><strong>Service records:</strong> 5 years from service completion</li>
                            <li><strong>Financial records:</strong> 7 years as required by law</li>
                            <li><strong>Marketing data:</strong> Until consent is withdrawn</li>
                            <li><strong>Website analytics:</strong> 26 months</li>
                        </ul>
                    </div>
                    <p class="text-slate-600 leading-relaxed mt-4">
                        After these periods, the data is securely deleted or anonymized.
                    </p>
                </div>

                <div class="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        If you have questions about data deletion or want to submit a deletion request, please contact us:
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
            <PolicyContent policy={policyData} title="Data Deletion Policy" />
        </main>
    )
}
