import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: `NextJs - Perfect Boilerplate`,
        description: `Keep track of your games with ease, anytime, anywhere.`,
        image: "/og/default.png",
    })
}

export default async function Page() {

    return (
        <section className="w-full bg-gray-50 min-h-screen">

            <div className="container mx-auto px-4 py-8">
                <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-9">
                        col-9
                    </div>

                    <div className="lg:col-span-3">
                        col-3
                    </div>
                </section>
            </div>
        </section>
    )
}
