import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AK — Developer",
    description: "Solo developer building Islamic apps, multiplayer games, language tools, and whatever else sparks an idea.",
    manifest: "/manifest.json",
    themeColor: "#050508",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "AK",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <SmoothScroll>
                    <ScrollProgress />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
