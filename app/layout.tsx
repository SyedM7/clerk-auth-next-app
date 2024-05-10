import Header from "@/components/ui/Header";
import "./globals.css";
import inter from "@clerk/nextjs"

import { ClerkProvider } from '@clerk/nextjs'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >          
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}