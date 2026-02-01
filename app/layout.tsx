import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/context/cart-context";
import { AdminProvider } from "@/context/admin-context";
import { MenuManagementProvider } from "@/context/menu-management-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umik's Kitchen - Catering Rumahan Situbondo",
  description:
    "Catering rumahan berkualitas dengan resep warisan dan bahan segar. Melayani nasi kotak, tumpeng, dan jajanan pasar di Situbondo.",
  keywords: [
    "catering",
    "situbondo",
    "nasi kotak",
    "tumpeng",
    "jajanan pasar",
    "makanan rumahan",
  ],
  authors: [{ name: "Umik's Kitchen" }],
  openGraph: {
    title: "Umik's Kitchen - Catering Rumahan Situbondo",
    description: "Catering rumahan dengan cita rasa autentik",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AdminProvider>
            <MenuManagementProvider>
              <CartProvider>
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">{children}</main>
                  <Footer />
                </div>
              </CartProvider>
            </MenuManagementProvider>
          </AdminProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
