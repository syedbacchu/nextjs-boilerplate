import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import HeroSlider from "@/components/ui/HeroSlider"
import ServiceHomeSection from "@/features/home/components/ServiceHomeSection"
import ProjectsHomeSection from "@/features/home/components/ProjectsHomeSection"
import SavingsSection from "@/features/home/components/SavingsSection"
import TestimonialsHomeSection from "@/features/home/components/TestimonialsHomeSection"
import NewsletterSubscribe from "@/features/subscriber/components/NewsletterSubscribe"
import { getHomePageSliderAction } from "@/features/slider"
import { getHomeDataAction } from "@/features/home"
import {
    transformSliderToHeroSlide,
    getDefaultHeroSlides
} from "@/features/home/helpers/slider.helper"
import {
    transformHomeService,
    transformHomeProject,
    transformHomeTestimonial,
    transformHomeStat,
    getDefaultServices,
    getDefaultProjects,
    getDefaultTestimonials,
    getDefaultStats
} from "@/features/home/helpers/home-data.helper"

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: `NextJs - Transform Data Into Actionable Insights`,
        description: `Transform your data into actionable insights with our powerful analytics platform. Make informed decisions and drive business growth.`,
        image: "/og/default.png",
    })
}

export default async function Page() {
    // Fetch slider data from API
    let heroSlides = getDefaultHeroSlides()

    try {
        const sliderResponse = await getHomePageSliderAction()
console.log(sliderResponse)
        if (sliderResponse?.success && sliderResponse?.data?.data?.length > 0) {
            heroSlides = sliderResponse.data.data
                .filter(slider => slider.photo) // Only include sliders with photos
                .map(transformSliderToHeroSlide)
        }
    } catch (error) {
        console.error('Error fetching slider data:', error)
        // Fall back to default slides
    }

    // Fetch home page data from API
    let services = getDefaultServices()
    let projects = getDefaultProjects()
    let testimonials = getDefaultTestimonials()
    let stats = getDefaultStats()

    try {
        const homeResponse = await getHomeDataAction()

        if (homeResponse?.success && homeResponse?.data) {
            const { service_list, project_list, testimonial_list, stat_list } = homeResponse.data

            // Use API data if available, otherwise keep defaults
            if (service_list && service_list.length > 0) {
                services = service_list.map(transformHomeService)
            }

            if (project_list && project_list.length > 0) {
                projects = project_list.slice(0, 3).map(transformHomeProject)
            }

            if (testimonial_list && testimonial_list.length > 0) {
                testimonials = testimonial_list.slice(0, 3).map(transformHomeTestimonial)
            }

            if (stat_list && stat_list.length > 0) {
                stats = stat_list.map(transformHomeStat)
            }
        }
    } catch (error) {
        console.error('Error fetching home data:', error)
        // Fall back to default data
    }

    return (
        <main className="w-full">
            {/* Hero Slider Section */}
            <HeroSlider slides={heroSlides} autoSlideInterval={5000} />

            {/* Services Section */}
            <ServiceHomeSection
                services={services}
                sectionTitle="Our Services"
                sectionDescription="Comprehensive solar energy solutions tailored to meet your specific needs and maximize your energy savings"
            />

            {/* Savings/Benefits Section */}
            <SavingsSection items={stats} />

            <ProjectsHomeSection projects={projects} />

            <TestimonialsHomeSection testimonials={testimonials} />

            {/* Newsletter Subscribe Section */}
            <div className="container mx-auto px-4 py-12">
                <NewsletterSubscribe layout="horizontal" />
            </div>
        </main>
    )
}
