import products from "../product"

const Footer = () => {
    return (
        <div>












            <div className="bg-[#7F011F] text-[#F5EBD0] p-8 md:p-16">

                <p className="text-5xl font-bold mb-12">
                    MAISON.
                </p>

                <p className="font-out text-lg md:text-2xl text-[#F5EBD0]  max-w-3xl leading-relaxed mb-20">
                    Thoughtfully curated essentials for people who
                    believe that good design lives in the details.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div>
                        <p className="text-2xl font-ply mb-6">
                            Explore
                        </p>

                        <div className="flex flex-col gap-5 text-[#D5A8AC]">
                            <p>Home</p>
                            <p>Collections</p>
                            <p>Our Story</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-2xl font-ply mb-6">
                            Get in touch
                        </p>

                        <div className="flex flex-col gap-5 text-[#D5A8AC]">
                            <p>Email us</p>
                            <p>Instagram ↗️</p>
                            <p>Pinterest ↗️</p>
                        </div>
                    </div>

                </div>

                <div className="bg-[#7F011F] h-[1px] mt-20 mb-8"></div>

                <p className="text-sm text-[#D5A8AC]">
                    © 2026 MAISON. All rights reserved.
                </p>

                <p className="text-sm text-[#D5A8AC] mt-4">
                    Made with intention. Designed for everyday living.
                </p>

            </div>

        </div>
    )
}

export default Footer