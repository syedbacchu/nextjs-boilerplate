import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import {getDefaultBatteryHeroSlides, transformSliderToHeroSlide} from "@/features/batteryWater/helpers/slider.helper";
import {getBatteryPageSliderAction} from "@/features/slider";
import {getHomeDataAction} from "@/features/home";
import BatteryHeroSlider from "@/features/batteryWater/components/BatteryHeroSlider";
import BatteryServiceSection from "@/features/batteryWater/components/BatteryServiceSection";
import BatterySavingsSection from "@/features/batteryWater/components/BatterySavingsSection";
import BatteryTestimonialSection from "@/features/batteryWater/components/BatteryTestimonialSection";
import {HomeFeature, HomeStat, HomeService} from "@/features/home";


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

    // Fetch home data from API
    let featureList: HomeFeature[] = []
    let statList: HomeStat[] = []
    let serviceList: HomeService[] = []

    try {
        const homeResponse = await getHomeDataAction()

        if (homeResponse?.success && homeResponse?.data) {
            featureList = homeResponse.data.feature_list || []
            statList = homeResponse.data.stat_list || []
            serviceList = homeResponse.data.service_list || []
        }
    } catch (error) {
        console.error('Error fetching home data:', error)
        // Components will use their default data
    }

    return (
        <main className="w-full">
            {/* Hero Slider Section */}
            <BatteryHeroSlider slides={heroSlides} autoSlideInterval={5000} />

            {/* Services Section - using feature_list */}
            <BatteryServiceSection
                sectionDescription="নিরাপদ, বিশুদ্ধ ও কার্যকর সমাধান যা ব্যাটারির দীর্ঘস্থায়ী পারফরম্যান্স নিশ্চিত করে"
                features={featureList}
            />

            {/* Savings/Benefits Section - using stat_list */}
            <BatterySavingsSection
                sectionTitle="কখন ব্যবহার করবেন?"
                sectionSubtitle="নিয়মিত ব্যাটারির পানি চেক করুন এবং প্রয়োজন অনুযায়ী Battery Life+ ব্যবহার করুন"
                productImage="/image/service/batter-wtr.webp"
                stats={statList}
            />

            <BatteryTestimonialSection
                sectionDescription="ব্যবহারবিধি অনুসরণ করুন এবং Battery Life+ দিয়ে ব্যাটারির দীর্ঘস্থায়ী সুরক্ষা নিশ্চিত করুন"
                ctaTitle="আপনার ব্যাটারির দিন সেরা যাক"
                ctaDescription="Battery Life+ ব্যাটারির পানি ব্যবহার করে ব্যাটারির আয়ু বাড়ান ও সর্বোচ্চ পারফরম্যান্স নিশ্চিত করুন"
                productImage="/image/service/water-bottle.jpg"
                services={serviceList}
            />

        </main>
    )
}
