import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

// Optimize font loading with next/font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Founderlings | Beginner Investor Hub",
  description: "Join the first 1,000 founding members of Beginner Investor Hub - AI-powered investing education platform built by a self-taught developer in 10 months on a 4GB laptop.",
  keywords: ["investing", "beginner investors", "AI education", "financial literacy", "founder", "early access", "investment platform"],
  authors: [{ name: "Beginner Investor Hub" }],
  creator: "Beginner Investor Hub",
  publisher: "Beginner Investor Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://founderlings.beginnerinvestorhub.com"), // Update with your actual URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Founderlings | Join the First 1,000",
    description: "Exclusive founding membership with lifetime benefits. Shape the future of AI-powered investing education.",
    url: "https://founderlings.beginnerinvestorhub.com", // Update with your actual URL
    siteName: "Beginner Investor Hub",
    images: [
      {
        url: "/og-image.png", // Create an OG image
        width: 1200,
        height: 630,
        alt: "Founderlings - Beginner Investor Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founderlings | Beginner Investor Hub",
    description: "Join the first 1,000 founding members. Exclusive early access, lifetime benefits.",
    creator: "@BeginnerInvestorHub", // Update with your Twitter handle
    images: ["/twitter-image.png"], // Create a Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // yahoo: "yahoo-site-verification",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4f738e" },
    { media: "(prefers-color-scheme: dark)", color: "#1c2833" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning // Optional: if you plan to add dark mode toggle
    >
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Founderlings" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Founderlings | Beginner Investor Hub",
              "description": "Join the first 1,000 founding members of Beginner Investor Hub",
              "url": "https://founderlings.beginnerinvestorhub.com",
              "publisher": {
                "@type": "Organization",
                "name": "Beginner Investor Hub",
                "description": "AI-powered investing education platform"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* You could add a top-level loading indicator here if needed */}
        {children}
        
        {/* Add any global scripts here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simple dark mode detection
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
      </body>
    </html>
  );
}