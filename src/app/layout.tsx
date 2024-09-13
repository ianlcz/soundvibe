import type { Metadata } from "next";
import { ReactNode } from "react";
import PrelineScript from "./components/PrelineScript";
import { AlbumProvider } from "./contexts/AlbumContext";
import "./globals.css";

export const metadata: Metadata = {
  collectionName: "SoundVibe",
  description: "Search your music albums",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang='en'>
    <body>
      <AlbumProvider>{children}</AlbumProvider>
    </body>
    <PrelineScript />
  </html>
);

export default RootLayout;
