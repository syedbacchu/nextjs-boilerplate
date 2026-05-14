import { CompanyPolicyData } from '../types'

interface PolicyContentProps {
    policy: CompanyPolicyData
    title: string
}

export default function PolicyContent({ policy, title }: PolicyContentProps) {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            {title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: policy.content
                            }}
                            className="prose prose-lg max-w-none
                                prose-headings:text-slate-900 prose-headings:font-bold
                                prose-h1:text-3xl prose-h1:mb-4 prose-h1:mt-8
                                prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-6
                                prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-4
                                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
                                prose-ul:text-slate-600 prose-ul:space-y-2
                                prose-ol:text-slate-600 prose-ol:space-y-2
                                prose-li:text-slate-600
                                prose-strong:text-slate-900 prose-strong:font-semibold
                                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:my-4
                                prose-code:text-slate-800 prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                                prose-pre:bg-slate-900 prose-pre:text-slate-50
                            "
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
