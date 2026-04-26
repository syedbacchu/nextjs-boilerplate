import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaGlobe, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Service', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Teams', href: '/teams' },
    { label: 'About Us', href: '/about-us' },
]

const services = [
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'FAQ', href: '/faqs' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
]

const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF },
    { label: 'YouTube', href: 'https://www.youtube.com', icon: FaYoutube },
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn },
    { label: 'WhatsApp', href: 'https://www.whatsapp.com', icon: FaWhatsapp },
]

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73217.64248420105!2d90.28991004863279!3d23.837171899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14a5e0e9b03%3A0xa10956869d25a813!2sBio-Xin%20Cosmeceuticals%20-%20Mirpur%20DOHS!5e1!3m2!1sen!2sbd!4v1777200211713!5m2!1sen!2sbd'
const mapLinkUrl = 'https://maps.google.com/?q=Bio-Xin%20Cosmeceuticals%20-%20Mirpur%20DOHS'

export default function Footer() {
    return (
        <footer className="bg-[#04453d] text-white">
            <div className="mx-auto container px-4 py-6 pb-8 ">
                <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
                    <div className="xl:pr-6">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={190}
                                height={56}
                                className="h-12 w-auto"
                                priority={false}
                            />
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
                            A clean, scalable starter built to help you launch fast and keep your product presentation consistent across the site.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white hover:text-[#04453d]"
                                >
                                    <Icon className="text-sm" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:border-l md:border-white/10 md:pl-6 xl:pl-8">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/75">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <Link className="transition-colors hover:text-white" href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="xl:border-l xl:border-white/10 xl:pl-8">
                        <h3 className="text-lg font-semibold">Our Services</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/75">
                            {services.map((item) => (
                                <li key={item.label}>
                                    <Link className="transition-colors hover:text-white" href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:border-l md:border-white/10 md:pl-6 xl:pl-8">
                        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                            <div>
                                <h3 className="text-lg font-semibold">Contact Us</h3>

                                <div className="mt-4 space-y-4 text-sm text-white/75">
                                    <div className="flex items-start gap-3">
                                        <FaPhoneAlt className="mt-1 shrink-0 text-white" />
                                        <span>+880 1712 345 678</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MdEmail className="mt-1 shrink-0 text-lg text-white" />
                                        <span>info@example.com</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaMapMarkerAlt className="mt-1 shrink-0 text-white" />
                                        <span>House # 12, Road # 5<br />Dhanmondi, Dhaka-1205</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaGlobe className="mt-1 shrink-0 text-white" />
                                        <a
                                            href={mapLinkUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="transition-colors hover:text-white"
                                        >
                                            www.greensolar.com.bd
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="md:border-l md:border-white/10 md:pl-6 xl:pl-8">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                            <div className="relative aspect-[4/3] w-full min-h-[220px]">
                                <iframe
                                    src={mapEmbedUrl}
                                    title="Bio-Xin Cosmeceuticals - Mirpur DOHS"
                                    className="absolute inset-0 h-full w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                            <a
                                href={mapLinkUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
                                aria-label="Open location in Google Maps"
                            >
                                <FaMapMarkerAlt className="shrink-0" />
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>

                <div className="py-4 text-center text-sm text-white/70">
                    © {new Date().getFullYear()} Company Name. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
