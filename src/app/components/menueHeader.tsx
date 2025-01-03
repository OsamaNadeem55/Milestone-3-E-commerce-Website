'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuHeader() {
    const activeLink = usePathname()

    return (
        <main className="w-full h-auto">
            <section className=" w-full h-auto py-6  flex  flex-col ">

                <h1 className="sm:text-6xl text-5xl font-serif text-[#2C2F24] self-center">Our Menu </h1>
                <p className=" mt-4 px-9 text-center  text-[#495460]">
                We take into Account all the Forces Driving Transformation, Providing You with the Tools Necessary to bring About Meaningful Change and Make it a Reality.</p>
            </section>

            <section className="h-auto p-4 w-full flex justify-center sm:justify-around text-[#2c2f24]  items-center">
                <nav className="flex flex-wrap  items-center justify-center gap-y-2">
                    <Link
                        href={'/menue'}
                        className={`mr-1 sm:mr-4 ${activeLink == "/menue" ? "bg-[#AD343E] text-white py-1 px-3 sm:py-2  sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""} border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        All
                    </Link>
                    <Link
                        href={'/menue/breakfast'}
                        className={`mr-1 sm:mr-4 ${activeLink == "/menue/breakfast" ? "bg-[#AD343E] text-white py-1 px-3 sm:py-2 sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""}  border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        Breakfast
                    </Link>
                    <Link
                        href={'/menue/dishes'}
                        className={`mr-1 sm:mr-4 ${activeLink == "/menue/dishes" ? "bg-[#AD343E] text-white py-1 px-3 sm:py-2  sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""} border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        Fast Food
                    </Link>
                    <Link
                        href={'/menue/drinks'}
                        className={`mr-1 sm:mr-4 ${activeLink == "/menue/drinks" ? "bg-[#AD343E] text-white py-1 px-3 sm:py-2 sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""} border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        Drinks
                    </Link>
                    <Link
                        href={'/menue/desserts'}
                        className={` ${activeLink == "/menue/desserts" ? "bg-[#AD343E] text-white py-1 px-3  sm:py-2 sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""} border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        Desserts
                    </Link>
                </nav>
            </section>
        </main>
    )
}