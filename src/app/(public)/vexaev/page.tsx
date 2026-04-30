import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import VexaevHeroSlider from "@/features/vexaev/components/VexaevHeroSlider";
import VexaevServiceSection from "@/features/vexaev/components/VexaevServiceSection";
import VexaevSavingsSection from "@/features/vexaev/components/VexaevSavingsSection";
import VexaevTestimonialSection from "@/features/vexaev/components/VexaevTestimonialSection";
import { getVexaevPageSliderAction } from "@/features/slider";
import { transformSliderToHeroSlide, getDefaultVexaevHeroSlides } from "@/features/vexaev/helpers/slider.helper";

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: `NextJs - Transform Data Into Actionable Insights`,
        description: `Transform your data into actionable insights with our powerful analytics platform. Make informed decisions and drive business growth.`,
        image: "/og/default.png",
    })
}

export default async function Page() {
    // Fetch slider data from API
    let heroSlides = getDefaultVexaevHeroSlides()

    try {
        const sliderResponse = await getVexaevPageSliderAction()

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
