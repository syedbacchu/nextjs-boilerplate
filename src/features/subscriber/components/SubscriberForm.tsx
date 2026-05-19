'use client'

import { useState, useTransition } from 'react'
import { subscribeAction } from '@/features/subscriber/actions/subscriber.actions'
import { toast } from 'sonner'

interface SubscriberFormProps {
    onSuccess?: () => void
    className?: string
    showTitle?: boolean
    title?: string
    description?: string
    buttonText?: string
    placeholder?: string
}

export default function SubscriberForm({
    onSuccess,
    className = '',
    showTitle = true,
    title = 'Subscribe to Our Newsletter',
    description = 'Get the latest updates, news, and exclusive offers delivered to your inbox.',
    buttonText = 'Subscribe',
    placeholder = 'Enter your email address',
}: SubscriberFormProps) {
    const [isPending, startTransition] = useTransition()
    const [email, setEmail] = useState('')
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email || !emailRegex.test(email)) {
            setSubmitStatus({
                type: 'error',
                message: 'Please enter a valid email address.',
            })
            return
        }

        startTransition(async () => {
            setSubmitStatus({ type: null, message: '' })

            const result = await subscribeAction(email)

            if (result.success) {
                toast.success(result.message || 'Successfully subscribed!')
                setEmail('')
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Thank you for subscribing!',
                })
                onSuccess?.()
            } else {
                toast.error(result.message || 'Failed to subscribe')
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Failed to subscribe. Please try again.',
                })
            }
        })
    }

    return (
        <div className={`bg-slate-50 rounded-3xl p-8 md:p-12 ${className}`}>
            {showTitle && (
                <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
                    {description && (
                        <p className="text-slate-600 mb-6">{description}</p>
                    )}
                </>
            )}

            {submitStatus.type && (
                <div
                    className={`mb-6 p-4 rounded-xl ${
                        submitStatus.type === 'success'
                            ? 'bg-green-50 text-green-800 border border-green-200'
                            : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                >
                    {submitStatus.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                        placeholder={placeholder}
                        disabled={isPending}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 px-8 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? 'Subscribing...' : buttonText}
                </button>
            </form>
        </div>
    )
}
