import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import {getDefaultBatteryHeroSlides, transformSliderToHeroSlide} from "@/features/batteryWater/helpers/slider.helper";
import {getBatteryPageSliderAction} from "@/features/slider";
import BatteryHeroSlider from "@/features/batteryWater/components/BatteryHeroSlider";
import BatteryServiceSection from "@/features/batteryWater/components/BatteryServiceSection";
import BatterySavingsSection from "@/features/batteryWater/components/BatterySavingsSection";
import BatteryTestimonialSection from "@/features/batteryWater/components/BatteryTestimonialSection";


export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: `NextJs - Transform Data Into Actionable Insights`,
        description: `Transform your data into actionable insights with our powerful analytics platform. Make informed decisions and drive business growth.`,
        image: "/og/default.png",
    })
}

export default async function Page() {
    // Fetch slider data from API
    let heroSlides = getDefaultBatteryHeroSlides()

    try {
        const sliderResponse = await getBatteryPageSliderAction()

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
            <BatteryHeroSlider slides={heroSlides} autoSlideInterval={5000} />

            {/* Services Section */}
            <BatteryServiceSection
                sectionTitle="এটি Battery Life+ মাল্টিপ্লাস কেন বেছে নেবেন?"
                sectionDescription="Why choose Battery Life+ Multiplus?"
                features={[
                    {
                        title: "দীর্ঘ স্থায়ীত্ব",
                        description: "দীর্ঘ সময় ধরে কাজ করে"
                    },
                    {
                        title: "100% নিরাপদ ব্যবহার",
                        description: "কোনো পার্শ্ব প্রতিক্রিয়া নেই"
                    },
                    {
                        title: "উচ্চ ক্ষমতা",
                        description: "সর্বোচ্চ পারফরম্যান্স নিশ্চিত করে"
                    },
                    {
                        title: "পরিবেশবান্ধব",
                        description: "পরিবেশের জন্য ক্ষতিকর নয়"
                    }
                ]}
                benefits={[
                    {
                        icon: "battery",
                        title: "দীর্ঘ স্থায়ীত্ব",
                        subtitle: "Long Durability"
                    },
                    {
                        icon: "sun",
                        title: "উচ্চ ক্ষমতা",
                        subtitle: "High Capacity"
                    },
                    {
                        icon: "shield",
                        title: "নিরাপদ ব্যবহার",
                        subtitle: "Safe Use"
                    },
                    {
                        icon: "recycle",
                        title: "পরিবেশবান্ধব",
                        subtitle: "Eco-Friendly"
                    }
                ]}
                productImage="/image/battery-water-product.png"
            />

            {/* Savings/Benefits Section */}
            <BatterySavingsSection
                sectionTitle="ব্যাটারির আয়ুষ্কাল বৃদ্ধি করুন"
                sectionSubtitle="Extend Your Battery Life"
                productImage="/image/battery-water-product.png"
            />

            <BatteryTestimonialSection
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
