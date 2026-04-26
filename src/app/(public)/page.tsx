import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import Link from "next/link"
import HeroSlider from "@/components/ui/HeroSlider"
import ServiceHomeSection from "@/features/home/components/ServiceHomeSection"
import SavingsSection from "@/features/home/components/SavingsSection"

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: `NextJs - Transform Data Into Actionable Insights`,
        description: `Transform your data into actionable insights with our powerful analytics platform. Make informed decisions and drive business growth.`,
        image: "/og/default.png",
    })
}

export default async function Page() {
    // Define your hero slides here
    const heroSlides = [
        {
            image: "/image/slider/slider2.jpg",
            title: "POWER YOUR FUTURE",
            highlightText: "WITH SOLAR ENERGY",
            subtitle: "Save up to 80% on your electricity bills with reliable, cost-effective solar solutions in Bangladesh.",
            buttons: [
                {
                    text: "Get Free Consultation",
                    href: "/contact-us",
                    variant: "primary" as const
                },
                {
                    text: "View Our Projects",
                    href: "/services",
                    variant: "secondary" as const
                }
            ],
            trustBadges: [
                {
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    heading: "500+ Successful Projects",
                    subHeading: "Completed installations"
                },
                {
                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                    heading: "5–10 Year Warranty",
                    subHeading: "Guaranteed performance"
                },
                {
                    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                    heading: "High ROI in 3–5 Years",
                    subHeading: "Maximum returns"
                }
            ]
        },
        {
            image: "/image/slider/slider3.avif",
            title: "POWER YOUR FUTURE",
            highlightText: "WITH SOLAR ENERGY",
            subtitle: "Save up to 80% on your electricity bills with reliable, cost-effective solar solutions in Bangladesh.",
            buttons: [
                {
                    text: "Get Free Consultation",
                    href: "/contact-us",
                    variant: "primary" as const
                },
                {
                    text: "View Our Projects",
                    href: "/services",
                    variant: "secondary" as const
                }
            ],
            trustBadges: [
                {
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    heading: "500+ Successful Projects",
                    subHeading: "Completed installations"
                },
                {
                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                    heading: "5–10 Year Warranty",
                    subHeading: "Guaranteed performance"
                },
                {
                    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                    heading: "High ROI in 3–5 Years",
                    subHeading: "Maximum returns"
                }
            ]
        },
        {
            image: "/image/slider/slider1.jpeg",
            title: "POWER YOUR FUTURE",
            highlightText: "WITH SOLAR ENERGY",
            subtitle: "Save up to 80% on your electricity bills with reliable, cost-effective solar solutions in Bangladesh.",
            buttons: [
                {
                    text: "Get Free Consultation",
                    href: "/contact-us",
                    variant: "primary" as const
                },
                {
                    text: "View Our Projects",
                    href: "/services",
                    variant: "secondary" as const
                }
            ],
            trustBadges: [
                {
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    heading: "500+ Successful Projects",
                    subHeading: "Completed installations"
                },
                {
                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                    heading: "5–10 Year Warranty",
                    subHeading: "Guaranteed performance"
                },
                {
                    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                    heading: "High ROI in 3–5 Years",
                    subHeading: "Maximum returns"
                }
            ]
        }
    ]

    return (
        <main className="w-full">
            {/* Hero Slider Section */}
            <HeroSlider slides={heroSlides} autoSlideInterval={5000} />

            {/* Services Section */}
            <ServiceHomeSection
                services={[
                    {
                        id: 1,
                        slug: "residential-solar",
                        image: "/image/service/service1.png",
                        title: "Residential Solar",
                        description: "Power your home with clean, renewable energy and reduce your electricity bills by up to 80%."
                    },
                    {
                        id: 2,
                        slug: "commercial-solar",
                        image: "/image/service/service1.png",
                        title: "Commercial Solar",
                        description: "Scalable solar solutions for businesses of all sizes. Cut operational costs and boost sustainability."
                    },
                    {
                        id: 3,
                        slug: "industrial-solar",
                        image: "/image/service/service1.png",
                        title: "Industrial Solar",
                        description: "High-capacity solar systems designed for industrial facilities and manufacturing plants."
                    },
                    {
                        id: 4,
                        slug: "solar-irrigation",
                        image: "/image/service/service1.png",
                        title: "Solar Irrigation",
                        description: "Comprehensive maintenance services to keep your solar system operating at peak efficiency."
                    },

                ]}
                sectionTitle="Our Services"
                sectionDescription="Comprehensive solar energy solutions tailored to meet your specific needs and maximize your energy savings"
            />

            {/* Savings/Benefits Section */}
            <SavingsSection
                items={[
                    {
                        icon: "/image/service/money.png",
                        title: "10 kW",
                        description: "Recommended System Size"
                    },
                    {
                        icon: "/image/service/solar-panel.png",
                        title: "BDT 8000",
                        description: "Estimated Monthly Savings"
                    },
                    {
                        icon: "/image/service/time-left.png",
                        title: "4.2 Years",
                        description: "Payback Period"
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="mt-8 py-24 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.1] [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.3))]" />

                <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to Go Solar?
                    </h2>
                    <p className="mt-4 text-lg text-green-100">
                        Join hundreds of satisfied customers in Bangladesh who are already saving money and helping the environment with our solar solutions.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-green-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Get Free Quote
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-green-600"
                        >
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
