import { Metadata } from 'next'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'

export const metadata: Metadata = {
    title: 'Thank You',
    description: 'Thank you for submitting the form',
}

export default function ThankYouPage() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <FaCheck className="text-4xl text-green-600" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-gray-900">Thank You!</h1>
                <p className="mb-8 text-lg text-gray-600">
                    Your form has been submitted successfully. Our team will contact you shortly.
                </p>
                <div className="flex flex-col gap-3">
                    <Link
                        href="/"
                        className="rounded-md bg-blue-600 px-6 py-3 text font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/contact-us"
                        className="rounded-md border border-gray-300 bg-white px-6 py-3 text font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}
