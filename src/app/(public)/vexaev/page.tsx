import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import VexaevHeroSlider from "@/features/vexaev/components/VexaevHeroSlider";
import VexaevServiceSection from "@/features/vexaev/components/VexaevServiceSection";
import VexaevSavingsSection from "@/features/vexaev/components/VexaevSavingsSection";
import VexaevProjectSection from "@/features/vexaev/components/VexaevProjectSection";
import VexaevTestimonialSection from "@/features/vexaev/components/VexaevTestimonialSection";

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
            image: "/image/slider/car3.png",
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
            image: "/image/slider/car4.jpg",
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
            image: "/image/slider/car2.webp",
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
            <VexaevHeroSlider slides={heroSlides} autoSlideInterval={5000} />

            {/* Services Section */}
            <VexaevServiceSection
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
            <VexaevSavingsSection
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

            <VexaevProjectSection
                projects={[
                    {
                        id: 1,
                        title: "50KW Industrial Project",
                        location: "Gazipur",
                        savings: "BDT 50,000/month",
                        image: "/image/slider/slider2.jpg",
                    },
                    {
                        id: 2,
                        title: "100KW Commercial Project",
                        location: "Dhaka",
                        savings: "BDT 95,000/month",
                        image: "/image/slider/slider3.avif",
                    },
                    {
                        id: 3,
                        title: "5KW Residential Project",
                        location: "Chattogram",
                        savings: "BDT 5,000/month",
                        image: "/image/slider/slider1.jpeg",
                    },
                ]}
            />

            <VexaevTestimonialSection
                testimonials={[
                    {
                        id: 1,
                        quote: "Our factory electricity bill reduced by almost 40%. Greensolar provided excellent service.",
                        authorRole: "Factory Owner, Gazipur",
                        initials: "FO",
                    },
                    {
                        id: 2,
                        quote: "Very professional team and smooth installation. Highly recommended!",
                        authorRole: "Business Owner, Dhaka",
                        initials: "BO",
                    },
                    {
                        id: 3,
                        quote: "Best decision for my home. Now I enjoy worry-free electricity and huge savings.",
                        authorRole: "Home Owner, Chattogram",
                        initials: "HO",
                    },
                ]}
            />

        </main>
    )
}
