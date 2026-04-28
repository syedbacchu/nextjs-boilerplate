'use client'

import {SingleServiceItem} from "@/features/service";
import ServicesCard from "@/features/service/components/ServicesCard";

interface ServicesSectionProps {
    services: SingleServiceItem[]
    sectionTitle?: string
    sectionDescription?: string
}

export default function VexaevServiceSection({
    services,
    sectionTitle = "Our Services",
    sectionDescription = "Comprehensive solar energy solutions tailored to your needs"
}: ServicesSectionProps) {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
                        {sectionTitle}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full" />
                        <div className="h-2 w-2 rounded-full bg-green-600" />
                        <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full" />
                    </div>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        {sectionDescription}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <ServicesCard key={service.id} item={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
