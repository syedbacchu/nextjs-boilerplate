'use client'

import { useState, useEffect, useRef } from 'react'
import {createContactClient} from "@/features/contact";
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


interface ContactFormProps {
    onSuccess?: () => void
}

declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void
            render: (container: string | HTMLElement, options: any) => string
            reset: (widgetId?: string) => void
            getResponse: (widgetId?: string) => string
            execute: (siteKey: string, options: { action: string }) => Promise<string>
        }
    }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
const RECAPTCHA_ENABLED = process.env.NEXT_PUBLIC_RECAPTCHA_ENABLED === 'enabled'

export default function ContactForm({ onSuccess }: ContactFormProps) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
    const recaptchaRef = useRef<HTMLDivElement>(null)
    const [recaptchaWidgetId, setRecaptchaWidgetId] = useState<string | null>(null)

    useEffect(() => {
        if (RECAPTCHA_ENABLED && RECAPTCHA_SITE_KEY && !window.grecaptcha) {
            // Load Google reCAPTCHA script for v2 (checkbox)
            const script = document.createElement('script')
            script.src = `https://www.google.com/recaptcha/api.js`
            script.async = true
            script.defer = true
            script.onload = () => {
                if (window.grecaptcha) {
                    window.grecaptcha.ready(() => {
                        setRecaptchaLoaded(true)
                    })
                }
            }
            document.head.appendChild(script)
        } else if (RECAPTCHA_ENABLED && window.grecaptcha) {
            setRecaptchaLoaded(true)
        }
    }, [])

    useEffect(() => {
        if (recaptchaLoaded && RECAPTCHA_ENABLED && recaptchaRef.current && !recaptchaWidgetId) {
            // Check if element is empty before rendering
            if (recaptchaRef.current.children.length === 0) {
                // Render the reCAPTCHA widget
                const widgetId = window.grecaptcha.render(recaptchaRef.current, {
                    sitekey: RECAPTCHA_SITE_KEY,
                    theme: 'light',
                })
                setRecaptchaWidgetId(widgetId)
            }
        }

        // Cleanup function
        return () => {
            if (recaptchaWidgetId && window.grecaptcha) {
                try {
                    window.grecaptcha.reset(recaptchaWidgetId)
                } catch (error) {
                    // Widget might already be reset, ignore error
                }
            }
        }
    }, [recaptchaLoaded])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            const formData = new FormData(event.currentTarget)
            const data: any = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
                subject: formData.get('subject') as string,
                message: formData.get('message') as string,
            }

            // Get reCAPTCHA token if enabled
            if (RECAPTCHA_ENABLED && recaptchaWidgetId && window.grecaptcha) {
                const token = window.grecaptcha.getResponse(recaptchaWidgetId)
                if (!token) {
                    setSubmitStatus({
                        type: 'error',
                        message: 'Please complete the reCAPTCHA verification.'
                    })
                    setIsSubmitting(false)
                    return
                }
                data.recaptchaToken = token
            }

            const result = await createContactClient(data)
            console.log('res', result);
            if (result.success) {
                toast.success(result.message || 'Email send successfully')
                router.refresh();
                event.currentTarget.reset()
                // Reset reCAPTCHA
                if (recaptchaWidgetId && window.grecaptcha) {
                    window.grecaptcha.reset(recaptchaWidgetId)
                }
            } else {
                toast.error(result.message || 'Failed to send email')
                if (recaptchaWidgetId && window.grecaptcha) {
                    window.grecaptcha.reset(recaptchaWidgetId)
                }
            }

        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : 'Server error'
            toast.error(message)
            // Reset reCAPTCHA on error
            if (recaptchaWidgetId && window.grecaptcha) {
                window.grecaptcha.reset(recaptchaWidgetId)
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

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

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="+880 1XXX-XXXXXX"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                        Subject *
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="Enter your subject"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your project or inquiry..."
                    />
                </div>

                {RECAPTCHA_ENABLED && (
                    <div className="flex justify-start">
                        <div ref={recaptchaRef} className="transform scale-100 origin-left"></div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    )
}
