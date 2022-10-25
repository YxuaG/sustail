import {useState} from "react";
import Navbar from "../components/Navbar";

const features = [
    {name: 'Transparency', description: 'description'},
    {name: 'Sustainability', description: 'description'},
    {name: 'Support', description: 'description'},
    {name: 'Fair Trade', description: 'description'},
    {name: 'Flexibility', description: 'description'},
    {name: 'Community', description: 'description'},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function aboutUs() {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex-col">
            <Navbar/>
            <div className="bg-white">
                {/* Text */}
                <div className="bg-white">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is Sustail
                                about?</h2>
                            <p className="mt-4 text-gray-500">
                                Sustail is a very cool new company.
                            </p>

                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                {features.map((feature) => (
                                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                            <img
                                src="/Sustail.png"
                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                className="rounded-lg bg-gray-100"
                            />
                            <img
                                src="/Sustail.png"
                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                className="rounded-lg bg-gray-100"
                            />
                            <img
                                src="/Sustail.png"
                                alt="Side of walnut card tray with card groove and recessed card area."
                                className="rounded-lg bg-gray-100"
                            />
                            <img
                                src="/Sustail.png"
                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                className="rounded-lg bg-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
