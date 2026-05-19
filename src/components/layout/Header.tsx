'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useAuthStore } from '@/features/auth'
import { useCommonSettingsStore } from '@/features/commonSettings/store/commonSettings.store'
import LogoutButton from '@/components/LogoutButton'
import { FaPhoneAlt, FaUserCircle, FaUserEdit } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

interface NavItem {
    name: string
    href?: string
    children?: NavItem[]
}

const navLinks: NavItem[] = [
    {
        name: 'Home',
        children: [
            { name: 'Main', href: '/' },
            { name: 'Solar', href: '/solar' },
            { name: 'Vexaev', href: '/vexaev' },
            { name: 'Battery', href: '/battery-water' },
        ],
    },
    { name: 'Features', href: '/features' },
    { name: 'Service', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Project', href: '/projects' },
    { name: 'Teams', href: '/team' },
    { name: 'About Us', href: '/about-us' },
    {
        name: 'Support',
        children: [
            { name: 'Contact Us', href: '/contact-us' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Blogs', href: '/blogs' },
        ],
    },
    {
        name: 'Legal',
        children: [
            { name: 'Privacy Policy', href: '/privacy-policy/' },
            { name: 'Terms & Conditions', href: '/terms-and-conditions' },
            { name: 'Cookie Policy', href: '/cookie-policy' },
            { name: 'Data Deletion', href: '/data-deletion' },
        ],
    },
]

export default function Header() {
    const pathname = usePathname()
    const { user, loading } = useAuthStore()
    const { getSettingsWithDefaults } = useCommonSettingsStore()
    const settings = getSettingsWithDefaults()
    const [authOpen, setAuthOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileSubmenus, setMobileSubmenus] = useState<string[]>([])
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    if (loading) return null

    const isActive = (href?: string) => {
        if (!href) return false
        return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
    }

    const toggleMobileSubmenu = (name: string) => {
        setMobileSubmenus((prev) =>
            prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
        )
    }

    const handleMouseEnter = (name: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setHoveredMenu(name)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredMenu(null)
        }, 180)
    }

    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-20 container items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        className="rounded-md p-2 transition hover:bg-emerald-50 lg:hidden"
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        <div className="flex h-5 w-5 flex-col justify-between">
                            <span className={`block h-0.5 w-5 bg-emerald-700 transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
                            <span className={`block h-0.5 w-5 bg-emerald-700 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 w-5 bg-emerald-700 transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                        </div>
                    </button>

                    <Link href="/" className="flex items-center">
                        <Image
                            src={settings.logo}
                            alt={settings.app_title}
                            width={180}
                            height={54}
                            className="h-11 w-auto"
                            priority
                            unoptimized
                        />
                    </Link>
                </div>

                <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
                    {navLinks.map((link) =>
                        !link.children ? (
                            <Link
                                key={link.name}
                                href={link.href!}
                                className={`relative px-4 py-2 text-[15px] font-medium transition-colors hover:text-emerald-600 ${isActive(link.href) ? 'text-emerald-600' : 'text-slate-700'} after:absolute after:left-4 after:right-4 after:bottom-0 after:h-0.5 after:bg-emerald-600 after:transition-transform after:duration-200 after:content-[''] ${isActive(link.href) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'} after:origin-center`}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(link.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    type="button"
                                    className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors hover:text-emerald-600 ${hoveredMenu === link.name ? 'text-emerald-600' : 'text-slate-700'}`}
                                >
                                    <span>{link.name}</span>
                                    <svg
                                        className={`h-4 w-4 transition-transform duration-200 ${hoveredMenu === link.name ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {hoveredMenu === link.name && (
                                    <div
                                        className="absolute left-0 top-full z-50 mt-2 min-w-[210px] overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
                                        onMouseEnter={() => handleMouseEnter(link.name)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {link.children.map((child, idx) => (
                                            <Link
                                                key={child.name}
                                                href={child.href!}
                                                className={`block px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 ${idx !== link.children!.length - 1 ? 'border-b border-black/5' : ''}`}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    )}
                </nav>

                <div className="hidden items-center gap-4 lg:flex">
                    <a
                        href={`tel:${settings.helpline}`}
                        className="flex items-center gap-2 text-[15px] font-semibold text-slate-700 transition-colors hover:text-emerald-600"
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                            <FaPhoneAlt className="text-sm" />
                        </span>
                        <span>{settings.helpline}</span>
                    </a>

                    {!user ? (
                        <Link
                            href="/login"
                            className="inline-flex h-11 items-center rounded-md bg-emerald-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                        >
                            Get Free Quote
                        </Link>
                    ) : (
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setAuthOpen((prev) => !prev)}
                                className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-2 shadow-sm transition hover:border-emerald-100 hover:shadow-md"
                            >
                                <Image
                                    src={user.image || '/default-user.png'}
                                    alt="user"
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 rounded-full border border-black/5 object-cover"
                                    unoptimized
                                />
                                <span className="max-w-28 truncate text-sm font-medium text-slate-700">{user.name}</span>
                                <svg
                                    className={`h-3 w-3 text-slate-500 transition-transform duration-200 ${authOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {authOpen && (
                                <div className="absolute right-0 mt-2 w-52 rounded-xl border border-black/5 bg-white p-2 shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
                                    {user.name && (
                                        <span className="flex items-center gap-2 px-2 py-2 text-sm text-slate-600">
                                            <FaUserCircle className="text-base" />
                                            {user.name}
                                        </span>
                                    )}
                                    {user.email && (
                                        <span className="flex items-center gap-2 px-2 py-2 text-sm text-slate-600">
                                            <MdEmail className="text-base" />
                                            {user.email}
                                        </span>
                                    )}
                                    <div className="border-t border-black/5 pt-2">
                                        <Link href="/admin/profile/update">
                                            <span className="flex items-center gap-2 px-2 py-2 text-sm text-slate-600 transition hover:text-emerald-700">
                                                <FaUserEdit className="text-base" />
                                                Update Profile
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="border-t border-black/5 pt-2">
                                        <LogoutButton />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className={`overflow-hidden border-t border-black/5 bg-white lg:hidden transition-all duration-300 ${mobileOpen ? 'max-h-[34rem]' : 'max-h-0'}`}>
                <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
                    <div className="flex flex-col">
                        {navLinks.map((link) =>
                            !link.children ? (
                                <Link
                                    key={link.name}
                                    href={link.href!}
                                    onClick={() => setMobileOpen(false)}
                                    className={`border-b border-black/5 py-3 text-sm font-medium ${isActive(link.href) ? 'text-emerald-600' : 'text-slate-700'}`}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <div key={link.name} className="border-b border-black/5">
                                    <button
                                        type="button"
                                        onClick={() => toggleMobileSubmenu(link.name)}
                                        className="flex w-full items-center justify-between py-3 text-sm font-medium text-slate-700"
                                    >
                                        <span>{link.name}</span>
                                        <svg
                                            className={`h-4 w-4 transition-transform duration-200 ${mobileSubmenus.includes(link.name) ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenus.includes(link.name) ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="pb-2">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href!}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block py-2 pl-4 text-sm text-slate-600"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        )}

                        <div className="flex items-center justify-between gap-4 pt-4">
                            <a
                                href={`tel:${settings.helpline}`}
                                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                            >
                                <FaPhoneAlt className="text-emerald-700" />
                                {settings.helpline}
                            </a>

                            {!user ? (
                                <Link
                                    href="/login"
                                    onClick={() => setMobileOpen(false)}
                                    className="inline-flex h-10 items-center rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white"
                                >
                                    Login
                                </Link>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setAuthOpen((prev) => !prev)}
                                    className="inline-flex h-10 items-center rounded-md border border-black/5 px-4 text-sm font-semibold text-slate-700"
                                >
                                    Account
                                </button>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
