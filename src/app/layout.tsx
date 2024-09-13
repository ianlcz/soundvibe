import type { Metadata } from "next";
import PrelineScript from "./components/PrelineScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoundVibe",
  description: "Search your music albums",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='en'>
    <body>{children}</body>
    <PrelineScript />
  </html>
);

export default RootLayout;
