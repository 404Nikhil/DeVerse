import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "deverse - Create Collaborate Contribute",
        template: `%s | deverse`
    },
    description: "deverse",

    openGraph: {
        title: "deverse",
        description: "deverse",
  
    },
    twitter: {
        card: "summary_large_image",
        creator: "@deverse",
        title: "deverse",
        description: "deverse",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://deverse-app.vercel.app"),
};
