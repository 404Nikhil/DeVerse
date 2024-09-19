import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "De'Verse - Create Collaborate Contribute",
        template: `%s | De'Verse`
    },
    description: "De'Verse",
        icons: {
        icon: [
            {
                url: "/assets/osslogo.svg",
                href: "/assets/osslogo.svg",
            }
        ]
    },

    openGraph: {
        title: "De'Verse",
        description: "De'Verse",
                images: [
            {
               url: "/assets/imgbanner.png"
            }
        ]
  
    },
    twitter: {
        card: "summary_large_image",
        creator: "@deverse",
        title: "De'Verse",
        description: "De'Verse",
        images: [
            {
                url: "/assets/imgbanner.png",
            }
        ]
    },
    metadataBase: new URL("https://deverse-app.vercel.app"),
};
