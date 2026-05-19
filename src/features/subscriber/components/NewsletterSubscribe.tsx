'use client'

import { useState, useTransition } from 'react'
import { subscribeAction } from '@/features/subscriber/actions/subscriber.actions'
import { toast } from 'sonner'

interface NewsletterSubscribeProps {
    className?: string
    layout?: 'horizontal' | 'vertical'
    showDescription?: boolean
    onSuccess?: () => void
}

export default function NewsletterSubscribe({
    className = '',
    layout = 'horizontal',
    showDescription = true,
    onSuccess,
}: NewsletterSubscribeProps) {
    const [isPending, startTransition] = useTransition()
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email || !emailRegex.test(email)) {
            toast.error('Please enter a valid email address.')
            return
        }

        startTransition(async () => {
            const result = await subscribeAction(email)

            if (result.success) {
                toast.success(result.message || 'Successfully subscribed!')
                setEmail('')
                onSuccess?.()
            } else {
                toast.error(result.message || 'Failed to subscribe')
            }
        })
    }

    return (
        <div className={`bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 md:p-8 ${className}`}>
            <div className={`${layout === 'horizontal' ? 'md:flex md:items-center md:gap-8' : 'space-y-4'}`}>
                <div className={`${layout === 'horizontal' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Subscribe to Our Newsletter</h3>
                    {showDescription && (
                        <p className="text-slate-600 text-sm">
                            Get the latest updates, news, and exclusive offers delivered to your inbox.
                        </p>
                    )}
                </div>

                <form onSubmit={handleSubmit} className={`${layout === 'horizontal' ? 'flex-1 flex gap-3' : 'space-y-3'}`}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                        className={`flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all ${layout === 'horizontal' ? 'min-w-[200px]' : 'w-full'}`}
                        disabled={isPending}
                    />
                    <button
                        type="submit"
                        disabled={isPending}
                        className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                        {isPending ? '...' : 'Subscribe'}
                    </button>
                </form>
            </div>
        </div>
    )
}
