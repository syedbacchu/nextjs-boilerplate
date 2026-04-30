import { HeroSlide } from '@/components/ui/HeroSlider'
import { SliderListItem } from '@/features/slider'

export function transformSliderToHeroSlide(slider: SliderListItem): HeroSlide {
    const title = slider.title || 'VEXA'
    const subtitle = slider.subtitle || 'No fuel. No tension.\nJust pure electric.'

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
        variant: btn.sort_order === '1' ? ('primary' as const) : ('secondary' as const),
        color: btn.colour_code || undefined
    })) || [
        {
            text: 'Explore Models',
            href: '/services',
            variant: 'primary' as const,
            color: undefined
        }
    ]

    // Transform stats to trust badges
    const trustBadges = slider.stat?.map(stat => ({
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        heading: stat.title,
        subHeading: stat.subtitle,
        image: stat.image || undefined
    })) || []

    return {
        image: slider.photo,
        tagline: slider.tagline || undefined,
        title: mainTitle,
        highlightText: highlightText,
        subtitle: subtitle,
        buttons: buttons,
        trustBadges: trustBadges
    }
}

export function getDefaultVexaevHeroSlides(): HeroSlide[] {
    return [
        {
            image: "/image/slider/car3.png",
            tagline: undefined,
            title: "VEXA",
            highlightText: "EV",
            subtitle: "No fuel. No tension.\nJust pure electric.",
            buttons: [
                {
                    text: "Explore Models",
                    href: "/services",
                    variant: "primary" as const,
                    color: undefined
                },
                {
                    text: "Book a Test Drive",
                    href: "/contact-us",
                    variant: "secondary" as const,
                    color: undefined
                }
            ],
            trustBadges: [
                {
                    icon: "M7 7h10M9 4h6m-7 3l-1 11h10L15 7m-8 6h10m-8 4h6",
                    heading: "120 - 180 KM",
                    subHeading: "Range",
                    image: undefined
                },
                {
                    icon: "M13 2L6 14h5l-1 8 8-14h-5l0-6z",
                    heading: "Home Charging",
                    subHeading: "Easy & Convenient",
                    image: undefined
                },
                {
                    icon: "M9 7h6m-6 4h8m-8 4h6M8 3h8l3 4v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7l3-4z",
                    heading: "2 Years",
                    subHeading: "Warranty",
                    image: undefined
                },
                {
                    icon: "M12 14a3 3 0 100-6 3 3 0 000 6zm0 0l5.5 3.5M4.5 10a7.5 7.5 0 1115 0",
                    heading: "60 KM/H",
                    subHeading: "Top Speed",
                    image: undefined
                }
            ]
        },
        {
            image: "/image/slider/car4.jpg",
            tagline: undefined,
            title: "VEXA",
            highlightText: "EV",
            subtitle: "No fuel. No tension.\nJust pure electric.",
            buttons: [
                {
                    text: "Explore Models",
                    href: "/services",
                    variant: "primary" as const,
                    color: undefined
                },
                {
                    text: "Book a Test Drive",
                    href: "/contact-us",
                    variant: "secondary" as const,
                    color: undefined
                }
            ],
            trustBadges: [
                {
                    icon: "M7 7h10M9 4h6m-7 3l-1 11h10L15 7m-8 6h10m-8 4h6",
                    heading: "120 - 180 KM",
                    subHeading: "Range",
                    image: undefined
                },
                {
                    icon: "M13 2L6 14h5l-1 8 8-14h-5l0-6z",
                    heading: "Home Charging",
                    subHeading: "Easy & Convenient",
                    image: undefined
                },
                {
                    icon: "M9 7h6m-6 4h8m-8 4h6M8 3h8l3 4v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7l3-4z",
                    heading: "2 Years",
                    subHeading: "Warranty",
                    image: undefined
                },
                {
                    icon: "M12 14a3 3 0 100-6 3 3 0 000 6zm0 0l5.5 3.5M4.5 10a7.5 7.5 0 1115 0",
                    heading: "60 KM/H",
                    subHeading: "Top Speed",
                    image: undefined
                }
            ]
        },
        {
            image: "/image/slider/car2.webp",
            tagline: undefined,
            title: "VEXA",
            highlightText: "EV",
            subtitle: "No fuel. No tension.\nJust pure electric.",
            buttons: [
                {
                    text: "Explore Models",
                    href: "/services",
                    variant: "primary" as const,
                    color: undefined
                },
                {
                    text: "Book a Test Drive",
                    href: "/contact-us",
                    variant: "secondary" as const,
                    color: undefined
                }
            ],
            trustBadges: [
                {
                    icon: "M7 7h10M9 4h6m-7 3l-1 11h10L15 7m-8 6h10m-8 4h6",
                    heading: "120 - 180 KM",
                    subHeading: "Range",
                    image: undefined
                },
                {
                    icon: "M13 2L6 14h5l-1 8 8-14h-5l0-6z",
                    heading: "Home Charging",
                    subHeading: "Easy & Convenient",
                    image: undefined
                },
                {
                    icon: "M9 7h6m-6 4h8m-8 4h6M8 3h8l3 4v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7l3-4z",
                    heading: "2 Years",
                    subHeading: "Warranty",
                    image: undefined
                },
                {
                    icon: "M12 14a3 3 0 100-6 3 3 0 000 6zm0 0l5.5 3.5M4.5 10a7.5 7.5 0 1115 0",
                    heading: "60 KM/H",
                    subHeading: "Top Speed",
                    image: undefined
                }
            ]
        }
    ]
}
