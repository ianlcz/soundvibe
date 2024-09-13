"use client";

import { useEffect, useState } from "react";
import AlbumGrid from "./components/AlbumGrid/AlbumGrid";
import Input from "./components/Input/Input";
import { useAlbumContext } from "./contexts/AlbumContext";
import { useFavorites } from "./contexts/FavoriteContext";
import AlbumType from "./interfaces/AlbumType";

const Home = () => {
  const { albumTitle } = useAlbumContext();
  const { favoriteAlbums } = useFavorites();
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const res = await fetch(
          `https://itunes.apple.com/search?term=${albumTitle}&entity=album&limit=6`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch albums");
        }
        const data = await res.json();

        setAlbums(
          data.results.map((album: any) => ({
            title: album.collectionName,
            artistName: album.artistName,
            poster: album.artworkUrl100,
            releaseDate: new Date(album.releaseDate).getFullYear(),
          })),
        );
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    }
    fetchAlbums();
  }, [albumTitle]);

  if (!albums) return <div>Chargement...</div>;

  return (
    <div className='flex flex-row max-w-full h-screen'>
      <div
        className={`pt-0 p-8 ${favoriteAlbums.length > 0 ? "w-[60%]" : "w-full"}`}
      >
        <Input />
        <AlbumGrid albums={albums} />
      </div>

      {favoriteAlbums.length > 0 ? (
        <div className='pt-0 p-8 w-[40%]'>
          <p className='block text-lg font-semibold mb-2 dark:text-white text-center'>
            Liste de mes favories
          </p>

          {favoriteAlbums.map((album, idx) => (
            <div key={idx} className='flex flex-row mt-2'>
              <div className='flex flex-col w-full px-2 border rounded-xl truncate'>
                <p className='bold text-lg truncate'>
                  {album.title} ({album.releaseDate})
                </p>
                <p className='font-extralight text-sm'>{album.artistName}</p>
              </div>
            </div>
          ))}
        </div>
      ) : undefined}
    </div>
  );
};
export default Home;
