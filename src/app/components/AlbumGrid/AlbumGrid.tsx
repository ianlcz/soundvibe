"use client";

import AlbumType from "@/app/interfaces/AlbumType";
import AlbumCard from "../AlbumCard/AlbumCard";

const AlbumGrid = ({ albums }: { albums: AlbumType[] }) => {
  return (
    <div className='grid grid-rows-2 grid-flow-col gap-16 w-fit justify-center mt-20 mx-auto items-center'>
      {albums.length > 0
        ? albums.map((album, idx) => (
            <AlbumCard
              key={idx}
              collectionName={album.collectionName}
              artworkUrl100={album.artworkUrl100}
              artistName={album.artistName}
              releaseDate={album.releaseDate}
            />
          ))
        : undefined}
    </div>
  );
};

export default AlbumGrid;
