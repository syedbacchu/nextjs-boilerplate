import { Metadata } from 'next'
import CompanyDetailsForm from '@/features/lead/components/CompanyDetailsForm'

export const metadata: Metadata = {
    title: 'Company Details Form',
    description: 'Submit your company information for a commercial solar consultation',
}

export default function CompanyDetailsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Company Details Form
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Please provide your company information for a commercial solar assessment.
                    </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <CompanyDetailsForm />
                </div>
            </div>
        </div>
    )
}
