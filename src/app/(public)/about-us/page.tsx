import { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'
import Image from 'next/image'
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react'
import { getAboutCompanyAction } from '@/features/about'

function isLocalAsset(url: string) {
  return url.startsWith('http://localhost:8000/') || url.startsWith('http://127.0.0.1:8000/')
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await getAboutCompanyAction(1)

    if (response.success && response.data) {
      return constructMetadata({
        title: 'About Us',
        description: response.data.subtitle,
        image: response.data.banner_image || '/og/default.png',
      })
    }
  } catch (error) {
    console.error('Error generating about metadata:', error)
  }

  return constructMetadata({
    title: 'About Us - Solar Energy Solutions',
    description: 'Learn about our mission to provide sustainable solar energy solutions.',
    image: '/og/default.png',
  })
}

export default async function AboutUsPage() {
  const response = await getAboutCompanyAction(1)

  if (!response.success || !response.data) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Content Not Available</h1>
          <p className="text-slate-600">Unable to load about company information.</p>
        </div>
      </main>
    )
  }

  const { data, coreValues, companyStats, whyChoose } = response

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
        {data.banner_image && (
          <div className="absolute inset-0">
            <Image
              src={data.banner_image}
              alt="About Us Banner"
              fill
              className="object-cover opacity-20"
              unoptimized={isLocalAsset(data.banner_image)}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      {data.our_story && (
        <section className="py-20 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Our Story
                  </h2>
                  <div
                    className="prose prose-slate max-w-none text-slate-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: data.our_story }}
                  />
                </div>
                {data.story_image && (
                  <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 shadow-2xl">
                      <Image
                        src={data.story_image}
                        alt="Our Story"
                        fill
                        className="object-cover"
                        unoptimized={isLocalAsset(data.story_image)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mission & Vision */}
      {(data.mission || data.vision) && (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Mission */}
                {data.mission && (
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                    <div
                      className="prose prose-slate max-w-none text-slate-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: data.mission }}
                    />
                  </div>
                )}

                {/* Vision */}
                {data.vision && (
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                      <Eye className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                    <div
                      className="prose prose-slate max-w-none text-slate-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: data.vision }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Values */}
      {coreValues.length > 0 && (
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
                {coreValues.map((item, index) => (
                  <div key={index} className="text-center group">
                    {item.image ? (
                      <div className="w-20 h-20 mb-6 mx-auto">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="rounded-3xl group-hover:scale-110 transition-transform object-cover"
                          unoptimized={isLocalAsset(item.image)}
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-sm font-semibold text-emerald-600 mb-2">{item.subtitle}</p>
                    )}
                    {item.description && (
                      <p className="text-slate-600">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {companyStats.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {companyStats.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-black mb-2">{item.title}</div>
                    <div className="text-blue-100">{item.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {whyChoose.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  What sets us apart from the competition
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {whyChoose.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex gap-4">
                    {item.image ? (
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={48}
                          height={48}
                          className="object-cover"
                          unoptimized={isLocalAsset(item.image)}
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-sm font-semibold text-emerald-600 mb-2">{item.subtitle}</p>
                      )}
                      {item.description && (
                        <p className="text-slate-600">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
