import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import VexaevHeroSlider from "@/features/vexaev/components/VexaevHeroSlider";
import VexaevServiceSection from "@/features/vexaev/components/VexaevServiceSection";
import VexaevSavingsSection from "@/features/vexaev/components/VexaevSavingsSection";
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
            title: "VEXA",
            highlightText: "EV",
            subtitle: "No fuel. No tension.\nJust pure electric.",
            buttons: [
                {
                    text: "Explore Models",
                    href: "/services",
                    variant: "primary" as const
                },
                {
                    text: "Book a Test Drive",
                    href: "/contact-us",
                    variant: "secondary" as const
                }
            ],
            trustBadges: [
                {
                    icon: "M7 7h10M9 4h6m-7 3l-1 11h10L15 7m-8 6h10m-8 4h6",
                    heading: "120 - 180 KM",
                    subHeading: "Range"
                },
                {
                    icon: "M13 2L6 14h5l-1 8 8-14h-5l0-6z",
                    heading: "Home Charging",
                    subHeading: "Easy & Convenient"
                },
                {
                    icon: "M9 7h6m-6 4h8m-8 4h6M8 3h8l3 4v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7l3-4z",
                    heading: "2 Years",
                    subHeading: "Warranty"
                },
                {
                    icon: "M12 14a3 3 0 100-6 3 3 0 000 6zm0 0l5.5 3.5M4.5 10a7.5 7.5 0 1115 0",
                    heading: "60 KM/H",
                    subHeading: "Top Speed"
                }
            ]
        },
        {
            image: "/image/slider/car4.jpg",
            title: "VEXA",
            highlightText: "EV",
            subtitle: "No fuel. No tension.\nJust pure electric.",
            buttons: [
                {
                    text: "Explore Models",
                    href: "/services",
                    variant: "primary" as const
                },
                {
                    text: "Book a Test Drive",
                    href: "/contact-us",
                    variant: "secondary" as const
                }
            ],
            trustBadges: [
                {
                    icon: "M7 7h10M9 4h6m-7 3l-1 11h10L15 7m-8 6h10m-8 4h6",
                    heading: "120 - 180 KM",
                    subHeading: "Range"
                },
                {
                    icon: "M13 2L6 14h5l-1 8 8-14h-5l0-6z",
                    heading: "Home Charging",
                    subHeading: "Easy & Convenient"
                },
                {
                    icon: "M9 7h6m-6 4h8m-8 4h6M8 3h8l3 4v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7l3-4z",
                    heading: "2 Years",
                    subHeading: "Warranty"
                },
                {
                    icon: "M12 14a3 3 0 100-6 3 3 0 000 6zm0 0l5.5 3.5M4.5 10a7.5 7.5 0 1115 0",
                    heading: "60 KM/H",
                    subHeading: "Top Speed"
                }
            ]
        },
        {
            image: "/image/slider/car2.webp",
            title: "VEXA",
            highlightText: "EV",
            subtitle: "No fuel. No tension.\nJust pure electric.",
            buttons: [
                {
                    text: "Explore Models",
                    href: "/services",
                    variant: "primary" as const
                },
                {
                    text: "Book a Test Drive",
                    href: "/contact-us",
                    variant: "secondary" as const
                }
            ],
            trustBadges: [
                {
                    icon: "M7 7h10M9 4h6m-7 3l-1 11h10L15 7m-8 6h10m-8 4h6",
                    heading: "120 - 180 KM",
                    subHeading: "Range"
                },
                {
                    icon: "M13 2L6 14h5l-1 8 8-14h-5l0-6z",
                    heading: "Home Charging",
                    subHeading: "Easy & Convenient"
                },
                {
                    icon: "M9 7h6m-6 4h8m-8 4h6M8 3h8l3 4v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7l3-4z",
                    heading: "2 Years",
                    subHeading: "Warranty"
                },
                {
                    icon: "M12 14a3 3 0 100-6 3 3 0 000 6zm0 0l5.5 3.5M4.5 10a7.5 7.5 0 1115 0",
                    heading: "60 KM/H",
                    subHeading: "Top Speed"
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
                        slug: "vexa-city",
                        image: "/image/slider/car2.webp",
                        title: "VEXA City",
                        description: "Smart. Compact. Efficient."
                    },
                    {
                        id: 2,
                        slug: "vexa-go",
                        image: "/image/slider/car2.webp",
                        title: "VEXA Go",
                        description: "Go Electric. Go Smart."
                    },
                    {
                        id: 3,
                        slug: "vexa-mini",
                        image: "/image/slider/car2.webp",
                        title: "VEXA Mini",
                        description: "Small Size. Big Impact."
                    },
                ]}
                sectionTitle="Made For City Life"
                sectionDescription="Compact, efficient and smart electric cars designed for your everyday journey."
            />

            {/* Savings/Benefits Section */}
            <VexaevSavingsSection
                items={[
                    {
                        key: "home",
                        title: "Charge at Home",
                        description: "Plug into any regular socket and charge overnight."
                    },
                    {
                        key: "public",
                        title: "Public Charging",
                        description: "Use our growing network of public charging stations."
                    },
                    {
                        key: "portable",
                        title: "Portable Charger",
                        description: "Comes with a portable charger for your convenience."
                    },
                    {
                        key: "cost",
                        title: "Low Electricity Cost",
                        description: "Charges less than ৳ 2 per 10 KM."
                    }
                ]}
            />

            <VexaevTestimonialSection
                testimonials={[
                    {
                        id: 1,
                        quote: "VEXA City changed the way I travel. No fuel cost, low maintenance and very comfortable for my family.",
                        name: "Alamin Hossain",
                        location: "Dhaka",
                    },
                    {
                        id: 2,
                        quote: "I use VEXA Go for my daily office commute, and it is saving me a lot of money every month.",
                        name: "Sadia Akter",
                        location: "Gazipur",
                    },
                    {
                        id: 3,
                        quote: "Best decision! Smooth driving, easy charging and great after-sales support.",
                        name: "Rashidul Islam",
                        location: "Chattogram",
                    },
                ]}
            />

        </main>
    )
}
