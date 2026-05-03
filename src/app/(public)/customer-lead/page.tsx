import { Metadata } from 'next'
import CustomerLeadForm from '@/features/lead/components/CustomerLeadForm'

export const metadata: Metadata = {
    title: 'Customer Lead Form',
    description: 'Submit your information for a solar consultation',
}

export default function CustomerLeadPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Customer Lead Form
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Please fill out the form below and our team will contact you shortly.
                    </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <CustomerLeadForm />
                </div>
            </div>
        </div>
    )
}
