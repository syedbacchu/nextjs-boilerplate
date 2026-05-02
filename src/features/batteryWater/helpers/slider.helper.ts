import { HeroSlide } from '../components/BatteryHeroSlider'
import { SliderListItem } from '@/features/slider'

export function transformSliderToHeroSlide(slider: SliderListItem): HeroSlide {
  const title = slider.title || 'Battery Life+'
  const subtitle = slider.subtitle || 'ব্যাটারি জীবন সম্প্রসারণ'
  const description = slider.description || 'প্যারামিটার অনুযায়ী সঠিক পানি'

  // Transform features from stats or use defaults
  const features = slider.stat?.slice(0, 4).map(stat => ({
    icon: ['droplet', 'shield', 'zap', 'leaf'][Math.floor(Math.random() * 4)],
    text: stat.title || stat.subtitle || 'Feature'
  })) || [
    { icon: 'droplet', text: '100% Pure Distilled Water' },
    { icon: 'shield', text: 'Safe for Battery' },
    { icon: 'zap', text: 'Improves Performance' },
    { icon: 'leaf', text: 'Extends Battery Life' }
  ]

  // Transform CTA buttons
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
    image: slider.photo || '/image/battery-water-default.png',
    title: title,
    subtitle: subtitle,
    description: description,
    features: features,
    buttons: buttons
  }
}

export function getDefaultBatteryHeroSlides(): HeroSlide[] {
  return [
    {
      image: "/image/battery-water-product.png",
      title: "Battery Life+",
      subtitle: "ব্যাটারি জীবন সম্প্রসারণ",
      description: "প্যারামিটার অনুযায়ী সঠিক পানি",
      features: [
        { icon: 'droplet', text: '100% Pure Distilled Water' },
        { icon: 'shield', text: 'Safe for Battery' },
        { icon: 'zap', text: 'Improves Performance' },
        { icon: 'leaf', text: 'Extends Battery Life' }
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
      image: "/image/battery-water-product.png",
      title: "Premium Quality",
      subtitle: "সর্বোচ্চ মানের পানি",
      description: "দীর্ঘস্থায়ী ব্যাটারি পারফরম্যান্স",
      features: [
        { icon: 'shield', text: 'ISO Certified' },
        { icon: 'zap', text: 'Fast Charging Support' },
        { icon: 'droplet', text: 'Zero Impurities' },
        { icon: 'leaf', text: 'Eco-Friendly' }
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
      image: "/image/battery-water-product.png",
      title: "Trusted Brand",
      subtitle: "বিশ্বস্ত মানের",
      description: "হাজার হাজার সন্তুষ্ট গ্রাহক",
      features: [
        { icon: 'check', text: 'Laboratory Tested' },
        { icon: 'shield', text: 'Safe to Use' },
        { icon: 'zap', text: 'Enhanced Efficiency' },
        { icon: 'leaf', text: 'Long Battery Life' }
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
