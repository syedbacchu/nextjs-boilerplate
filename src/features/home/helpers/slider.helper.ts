import { HeroSlide } from '@/components/ui/HeroSlider'
import { SliderListItem } from '@/features/slider'

export function transformSliderToHeroSlide(slider: SliderListItem): HeroSlide {
    const title = slider.title || 'POWER YOUR FUTURE'
    const subtitle = slider.subtitle || 'Save up to 80% on your electricity bills with reliable, cost-effective solar solutions in Bangladesh.'

    // Split title to find highlight text (text after "WITH" or last word if no "WITH")
    let highlightText = ''
    let mainTitle = title

    if (title.toUpperCase().includes(' WITH ')) {
        const parts = title.split(/ WITH /i)
        mainTitle = parts[0]
        highlightText = 'WITH ' + parts.slice(1).join(' WITH ')
    } else {
        const words = title.split(' ')
        if (words.length > 1) {
            mainTitle = words.slice(0, -1).join(' ')
            highlightText = words[words.length - 1]
        }
    }

    // Transform CTA buttons
    const buttons = slider.cta_button?.map(btn => ({
        text: btn.label,
        href: btn.link || '/contact-us',
        variant: btn.sort_order === '1' ? ('primary' as const) : ('secondary' as const)
    })) || [
        {
            text: 'Get Free Consultation',
            href: '/contact-us',
            variant: 'primary' as const
        }
    ]

    // Transform stats to trust badges
    const trustBadges = slider.stat?.map(stat => ({
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        heading: stat.title,
        subHeading: stat.subtitle
    })) || []

    return {
        image: slider.photo,
        title: mainTitle,
        highlightText: highlightText,
        subtitle: subtitle,
        buttons: buttons,
        trustBadges: trustBadges
    }
}

export function getDefaultHeroSlides(): HeroSlide[] {
    return [
        {
            image: "/image/slider/slider2.jpg",
            title: "POWER YOUR FUTURE",
            highlightText: " SOLAR ENERGY",
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
}
