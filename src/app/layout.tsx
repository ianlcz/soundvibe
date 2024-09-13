import type { Metadata } from "next";
import { ReactNode } from "react";
import PrelineScript from "./components/PrelineScript";
import { AlbumProvider } from "./contexts/AlbumContext";
import { FavoriteProvider } from "./contexts/FavoriteContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoundVibe",
  description: "Search your music albums",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang='en'>
    <body>
      <AlbumProvider>
        <FavoriteProvider>{children}</FavoriteProvider>
      </AlbumProvider>
    </body>
    <PrelineScript />
  </html>
);

export default RootLayout;
