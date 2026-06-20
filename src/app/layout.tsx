import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Noor Ahammad | Full Stack Engineer",
  description: "Senior Full Stack Engineer, DevOps Engineer, and Product Designer. View my premium portfolio and featured projects.",
  keywords: ["Noor Ahammad", "Full Stack Engineer", "React", "Next.js", "Java", "Python", "DevOps"],
  authors: [{ name: "Noor Ahammad" }],
  openGraph: {
    title: "Noor Ahammad | Full Stack Engineer",
    description: "Premium software engineer portfolio showcasing full-stack projects, AI, and DevOps.",
    url: "https://pnoorahammad.github.io/my-portifolio",
    siteName: "Noor Ahammad Portfolio",
    images: [
      {
        url: "https://pnoorahammad.github.io/my-portifolio/noorpic1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Ahammad | Full Stack Engineer",
    description: "Premium software engineer portfolio showcasing full-stack projects.",
    images: ["https://pnoorahammad.github.io/my-portifolio/noorpic1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#0a0a0a] text-gray-100 selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}
