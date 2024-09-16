import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for deverse a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "deverse - AI Powered Website Builder",
        template: `%s | deverse`
    },
    description: "deverse is an AI powered website builder that helps you create a website in minutes. No coding skills required. Register for free!",
    // icons: {
    //     icon: [
    //         {
    //             url: "/icons/favicon.ico",
    //             href: "/icons/favicon.ico",
    //         }
    //     ]
    // },
    openGraph: {
        title: "deverse - AI Powered Website Builder",
        description: "deverse is an AI powered website builder that helps you create a website in minutes. No coding skills required. Register for free!",
        // images: [
        //     {
        //         url: "/assets/og-image.png",
        //     }
        // ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@deverse",
        title: "deverse - AI Powered Website Builder",
        description: "deverse is an AI powered website builder that helps you create a website in minutes. No coding skills required. Register for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://deverse-app.vercel.app"),
};
