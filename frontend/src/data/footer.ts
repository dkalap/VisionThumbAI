import type { IFooter } from "../types";

export const footerData: IFooter[] = [
    {
        title: "Product",
        links: [
            { name: "Home", href: "/#home" },
            { name: "Generate Thumbnail", href: "/generate" },
            { name: "Features", href: "/#features" },
            { name: "Pricing", href: "/#pricing" },
        ],
    },
    {
        title: "Project",
        links: [
            { name: "About VisionThumbAI", href: "/about" },
            { name: "How It Works", href: "/how-it-works" },
            { name: "Tech Stack", href: "/tech-stack" },
            { name: "Roadmap", href: "/roadmap" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Use", href: "/terms-of-use" },
        ],
    },
];
