import { HomeService, HomeProject, HomeTestimonial, HomeStat, SingleServiceItem } from '@/features/home'

function isLocalAsset(url: string) {
    return url?.startsWith('http://localhost:8000/') || url?.startsWith('http://127.0.0.1:8000/')
}

export function transformHomeService(service: HomeService): SingleServiceItem {
    return {
        id: service.id,
        slug: service.slug,
        image: service.image || service.thumbnail || '/image/service/service1.png',
        title: service.title,
        description: service.short_description || service.description || '',
        link: service.slug ? `/services/${service.slug}` : undefined
    }
}

export function transformHomeProject(project: HomeProject) {
    return {
        id: project.id,
        title: project.title,
        location: project.category?.name || 'Bangladesh',
        savings: 'BDT 50,000/month', // Default as API doesn't provide this
        image: project.thumbnail || project.image || '/image/slider/slider2.jpg',
        slug: project.slug
    }
}

export function transformHomeTestimonial(testimonial: HomeTestimonial) {
    // Get initials from name
    const initials = testimonial.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)

    return {
        id: testimonial.id,
        quote: testimonial.review_text,
        authorRole: `${testimonial.name}, ${testimonial.designation}`,
        initials
    }
}

export function transformHomeStat(stat: HomeStat) {
    return {
        id: stat.id,
        icon: stat.image || '/image/service/money.png',
        title: stat.title,
        description: stat.subtitle || stat.description || ''
    }
}

export function getDefaultServices(): SingleServiceItem[] {
    return [
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
    ]
}

export function getDefaultProjects() {
    return [
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
    ]
}

export function getDefaultTestimonials() {
    return [
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
    ]
}

export function getDefaultStats() {
    return [
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
    ]
}
