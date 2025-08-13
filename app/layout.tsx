import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { EnhancedBackground } from "@/components/enhanced-background"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Himanshu Sharma - Full Stack Developer | React.js, Next.js, Node.js Expert",
    template: "%s | Himanshu Sharma - Full Stack Developer",
  },
  description:
    "Experienced Full Stack Developer with 4+ years building scalable web applications. Expert in React.js, Next.js, TypeScript, Node.js, GraphQL, and modern web technologies. Based in Surat, India.",
  keywords: [
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "Node.js Developer",
    "GraphQL Developer",
    "JavaScript Expert",
    "Web Developer Surat",
    "Frontend Developer India",
    "Backend Developer",
    "MERN Stack Developer",
    "Progressive Web Apps",
    "API Development",
    "Database Design",
    "Performance Optimization",
    "Himanshu Sharma Developer",
  ],
  authors: [{ name: "Himanshu Sharma", url: "https://himanshu-portfolio.vercel.app" }],
  creator: "Himanshu Sharma",
  publisher: "Himanshu Sharma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://himanshu-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Himanshu Sharma - Full Stack Developer | React.js, Next.js Expert",
    description:
      "Experienced Full Stack Developer specializing in React.js, Next.js, TypeScript, and Node.js. Building performant, scalable web applications with 4+ years of expertise.",
    url: "https://himanshu-portfolio.vercel.app",
    siteName: "Himanshu Sharma - Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/himanshu-profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Himanshu Sharma - Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Sharma - Full Stack Developer",
    description: "Building performant, scalable web applications with React.js, Next.js, and modern technologies",
    images: ["/images/himanshu-profile.jpeg"],
    creator: "@himanshu_dev",
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
    google: "your-google-verification-code",
  },
  category: "technology",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00d4ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Himanshu Sharma",
              jobTitle: "Full Stack Web Developer",
              description: "Experienced Full Stack Developer with 4+ years building scalable web applications",
              url: "https://himanshu-portfolio.vercel.app",
              image: "https://himanshu-portfolio.vercel.app/images/himanshu-profile.jpeg",
              email: "himanshu15101998@gmail.com",
              telephone: "+91-6352559089",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surat",
                addressRegion: "Gujarat",
                addressCountry: "India",
                postalCode: "395005",
              },
              sameAs: [
                "https://github.com/himanshu-sharma",
                "https://linkedin.com/in/himanshu-sharma",
                "https://himanshu-portfolio.vercel.app",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Node.js",
                "GraphQL",
                "JavaScript",
                "Full Stack Development",
                "Web Development",
                "Frontend Development",
                "Backend Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Government Engineering College (GEC)",
              },
              worksFor: [
                {
                  "@type": "Organization",
                  name: "SyncSignature",
                },
                {
                  "@type": "Organization",
                  name: "Space-O Infoweb Pvt. Ltd.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <EnhancedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
