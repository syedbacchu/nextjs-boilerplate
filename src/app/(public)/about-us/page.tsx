import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import Image from 'next/image'
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: 'About Us - Solar Energy Solutions',
        description: 'Learn about our mission to provide sustainable solar energy solutions. Our team of experts is committed to powering a greener future.',
        image: '/og/default.png',
    })
}

export default function AboutUsPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Powering a Sustainable Future
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                            We're on a mission to make clean, renewable energy accessible to everyone. Join us in building a greener tomorrow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Our Story
                                </h2>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        Founded in 2018, Greensolar began with a simple vision: to make solar energy accessible and affordable for everyone in Bangladesh. What started as a small team of passionate engineers has grown into one of the country's leading solar energy providers.
                                    </p>
                                    <p>
                                        Over the years, we've successfully completed over 500 projects, from residential installations to large-scale industrial systems. Our commitment to quality and customer satisfaction has earned us the trust of homeowners, businesses, and industries across the nation.
                                    </p>
                                    <p>
                                        Today, we continue to innovate and push the boundaries of what's possible with solar technology, helping our clients save money while reducing their carbon footprint.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 shadow-2xl">
                                    <Image
                                        src="/image/slider/slider1.jpeg"
                                        alt="Solar installation team"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Mission */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    To provide high-quality, affordable solar energy solutions that empower individuals and businesses to take control of their energy future while contributing to a sustainable planet. We strive to make renewable energy accessible to all, regardless of scale or budget.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Eye className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    To be Bangladesh's leading provider of solar energy solutions, recognized for excellence in quality, innovation, and customer service. We envision a future where clean energy is the norm, not the exception, and where every rooftop has the potential to generate power.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Heart className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity</h3>
                                <p className="text-slate-600">
                                    We believe in honesty, transparency, and doing what's right for our customers, even when no one is watching.
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Users className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Focus</h3>
                                <p className="text-slate-600">
                                    Our customers are at the heart of every decision we make. Your success is our success.
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Award className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
                                <p className="text-slate-600">
                                    We never compromise on quality. Every installation meets the highest international standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-5xl font-black mb-2">500+</div>
                                <div className="text-blue-100">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-black mb-2">150+</div>
                                <div className="text-blue-100">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-black mb-2">50+</div>
                                <div className="text-blue-100">Team Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-black mb-2">6+</div>
                                <div className="text-blue-100">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-50">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Greensolar?</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                What sets us apart from the competition
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Zap,
                                    title: "Expert Team",
                                    description: "Our engineers and technicians are certified experts with years of experience in solar energy systems."
                                },
                                {
                                    icon: Award,
                                    title: "Quality Products",
                                    description: "We use only the highest quality solar panels and components from trusted manufacturers."
                                },
                                {
                                    icon: Users,
                                    title: "Custom Solutions",
                                    description: "Every project is designed to meet your specific energy needs and budget requirements."
                                },
                                {
                                    icon: Heart,
                                    title: "Ongoing Support",
                                    description: "We provide comprehensive after-sales service and maintenance to keep your system running optimally."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
