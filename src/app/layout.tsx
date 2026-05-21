import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Hotel Silk - Premium Luxury Stay in Rajkot',
  description: 'Book your stay at Hotel Silk, Rajkot. Luxury rooms, modern amenities, and prime location at Field Marshal Rd. Perfect for 2 adults.',
  openGraph: {
    "title": "Hotel Silk - Luxury Hotel Rajkot",
    "description": "Elegant hotel accommodations in Mota Mava, Rajkot.",
    "siteName": "Hotel Silk"
  },
};

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
