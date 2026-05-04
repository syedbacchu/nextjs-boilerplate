import { HeroSlide } from '../components/BatteryHeroSlider'
import { SliderListItem } from '@/features/slider'

export function transformSliderToHeroSlide(slider: SliderListItem): HeroSlide {
  const title = slider.title || 'Battery Life+'
  const highlightText = slider.subtitle || 'ব্যাটারির পানি'
  const subtitle = slider.description || 'প্যারামিটার অনুযায়ী সঠিক পানি'

  const badgeSource = slider.stat?.slice(0, 4) || []
  const trustBadges = badgeSource.length > 0
    ? badgeSource.map((stat, index) => ({
        icon: ['droplet', 'shield', 'zap', 'leaf'][index % 4],
        heading: stat.title || 'Feature',
        subHeading: stat.subtitle || 'Battery care',
        image: stat.image || null,
      }))
    : [
        { icon: 'droplet', heading: '100% Pure', subHeading: 'Distilled Water', image: null },
        { icon: 'shield', heading: 'Safe for', subHeading: 'Battery', image: null },
        { icon: 'zap', heading: 'Improves', subHeading: 'Performance', image: null },
        { icon: 'leaf', heading: 'Extends', subHeading: 'Battery Life', image: null },
      ]

  const buttons = slider.cta_button?.slice(0, 2).map(btn => ({
    text: btn.label,
    href: btn.link || '/contact-us',
    variant: btn.sort_order === '1' ? ('primary' as const) : ('secondary' as const)
  })) || [
    {
      text: 'Buy Now',
      href: '/contact-us',
      variant: 'primary' as const
    },
    {
      text: 'Learn More',
      href: '/about-us',
      variant: 'secondary' as const
    }
  ]

  return {
    image: slider.photo || '/image/slider/battery_slider.jpg',
    mobileImage: slider.mobile_banner || undefined,
    tagline: 'Premium Battery Water',
    title: title,
    highlightText: highlightText,
    subtitle: subtitle,
    buttons: buttons,
    trustBadges: trustBadges
  }
}

export function getDefaultBatteryHeroSlides(): HeroSlide[] {
  return [
    {
      image: "/image/slider/battery_slider.jpg",
      tagline: "Premium Battery Water",
      title: "Battery Life+",
      highlightText: "ব্যাটারির পানি",
      subtitle: "আপনার ব্যাটারির সেরা সঙ্গী",
      trustBadges: [
        { icon: 'droplet', heading: '100% Pure', subHeading: 'Distilled Water' },
        { icon: 'shield', heading: 'Safe for', subHeading: 'Battery' },
        { icon: 'zap', heading: 'Improves', subHeading: 'Performance' },
        { icon: 'leaf', heading: 'Extends', subHeading: 'Battery Life' }
      ],
      buttons: [
        {
          text: 'Buy Now',
          href: '/contact-us',
          variant: 'primary'
        },
        {
          text: 'Learn More',
          href: '/about-us',
          variant: 'secondary'
        }
      ]
    },
    {
      image: "/image/slider/battery_slider.jpg",
      tagline: "Premium Battery Water",
      title: "Premium Quality",
      highlightText: "সর্বোচ্চ মানের পানি",
      subtitle: "দীর্ঘস্থায়ী ব্যাটারি পারফরম্যান্স",
      trustBadges: [
        { icon: 'shield', heading: 'ISO', subHeading: 'Certified' },
        { icon: 'zap', heading: 'Fast Charging', subHeading: 'Support' },
        { icon: 'leaf', heading: 'Eco', subHeading: 'Friendly' },
        { icon: 'check', heading: 'Zero', subHeading: 'Impurities' }
      ],
      buttons: [
        {
          text: 'Buy Now',
          href: '/contact-us',
          variant: 'primary'
        },
        {
          text: 'Learn More',
          href: '/about-us',
          variant: 'secondary'
        }
      ]
    },
    {
      image: "/image/slider/battery_slider.jpg",
      tagline: "Premium Battery Water",
      title: "Trusted Brand",
      highlightText: "বিশ্বস্ত মানের",
      subtitle: "হাজার হাজার সন্তুষ্ট গ্রাহক",
      trustBadges: [
        { icon: 'check', heading: 'Laboratory', subHeading: 'Tested' },
        { icon: 'shield', heading: 'Safe to', subHeading: 'Use' },
        { icon: 'leaf', heading: 'Long Battery', subHeading: 'Life' },
        { icon: 'zap', heading: 'Enhanced', subHeading: 'Efficiency' }
      ],
      buttons: [
        {
          text: 'Buy Now',
          href: '/contact-us',
          variant: 'primary'
        },
        {
          text: 'Learn More',
          href: '/about-us',
          variant: 'secondary'
        }
      ]
    }
  ]
}
