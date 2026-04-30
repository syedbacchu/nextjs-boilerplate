import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import SolarHeroSlider from "@/features/solar/components/SolarHeroSlider";
import SolarServiceSection from "@/features/solar/components/SolarServiceSection";
import SolarSavingsSection from "@/features/solar/components/SolarSavingsSection";
import ProjectsSolarSection from "@/features/solar/components/ProjectsSolarSection";
import TestimonialsSolarSection from "@/features/solar/components/TestimonialsSolarSection";
import { getSolarPageSliderAction } from "@/features/slider";
import { transformSliderToHeroSlide, getDefaultSolarHeroSlides } from "@/features/solar/helpers/slider.helper";

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: `NextJs - Transform Data Into Actionable Insights`,
        description: `Transform your data into actionable insights with our powerful analytics platform. Make informed decisions and drive business growth.`,
        image: "/og/default.png",
    })
}

export default async function Page() {
    // Fetch slider data from API
    let heroSlides = getDefaultSolarHeroSlides()

    try {
        const sliderResponse = await getSolarPageSliderAction()

        if (sliderResponse?.success && sliderResponse?.data?.data?.length > 0) {
            heroSlides = sliderResponse.data.data
                .filter(slider => slider.photo) // Only include sliders with photos
                .map(transformSliderToHeroSlide)
        }
    } catch (error) {
        console.error('Error fetching slider data:', error)
        // Fall back to default slides
    }

    return (
        <main className="w-full">
            {/* Hero Slider Section */}
            <SolarHeroSlider slides={heroSlides} autoSlideInterval={5000} />

            {/* Services Section */}
            <SolarServiceSection
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
            <SolarSavingsSection
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

            <ProjectsSolarSection
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

            <TestimonialsSolarSection
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
