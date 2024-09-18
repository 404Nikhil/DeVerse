import Icons from "@/components/global/icons"
import { Heart } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-between border-t border-border pt-12 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-12">

            <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-none -z-10 blur-[14rem]"></div>
            <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-none -z-10 blur-[14rem]"></div>

            <div className="flex flex-col lg:flex-row lg:justify-between w-full">

                <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                    <div className="flex items-start">
                        <Image src="/assets/osslogo.svg" alt="OSS Logo" width={28} height={28} className="w-7 h-7" />
                    </div>

                    <span className="mt-4 text-neutral-200 text-sm flex items-center">
                        Made with
                        <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
                    </span>
                </div>

                <div className="flex flex-col lg:items-end lg:justify-end md:max-w-[200px]">
                    <div className="mt-10 md:mt-0 flex flex-col">
                        <h3 className="text-base font-medium text-white">
                            Socials
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="">
                                <Link href="" className="hover:text-foreground transition-all duration-300">
                                    Facebook
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="" className="hover:text-foreground transition-all duration-300">
                                    Instagram
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="" className="hover:text-foreground transition-all duration-300">
                                    Twitter
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="" className="hover:text-foreground transition-all duration-300">
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer
