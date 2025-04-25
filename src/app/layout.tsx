import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./redux/StoreProvider";
import { Nav } from "./components/Nav/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Users",
  description: "Users Test App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <header className="header"></header>
          <main className="main">
            <div className="container">
              <div className="main__wrapper">
                <Nav />
                <div className="main__content">{children}</div>
              </div>
            </div>
          </main>
          <footer className="footer"></footer>
        </body>
      </html>
    </StoreProvider>
  );
}
