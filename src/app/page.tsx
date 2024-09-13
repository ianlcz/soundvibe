"use client";

import { useEffect, useState } from "react";
import AlbumGrid from "./components/AlbumGrid/AlbumGrid";
import Input from "./components/Input/Input";
import { useAlbumContext } from "./contexts/AlbumContext";
import AlbumType from "./interfaces/AlbumType";

const Home = () => {
  const { albumTitle } = useAlbumContext();
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const res = await fetch(
          `https://itunes.apple.com/search?term=${albumTitle}&entity=album&limit=8`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch albums");
        }
        const data = await res.json();

        setAlbums(data.results);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    }
    fetchAlbums();
  }, [albumTitle]);

  if (!albums) return <div>Chargement...</div>;

  return (
    <div className='flex flex-row max-w-full h-screen'>
      <div className='border border-blue-700 p-8 w-full'>
        <Input />
        <AlbumGrid albums={albums} />
      </div>
      <div className='border border-green-700 w-1/2'></div>
    </div>
  );
};
export default Home;
