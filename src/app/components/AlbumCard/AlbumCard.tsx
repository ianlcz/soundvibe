import { useFavorites } from "@/app/contexts/FavoriteContext";
import AlbumType from "@/app/interfaces/AlbumType";
import Image from "next/image";
import { FC } from "react";

const AlbumCard: FC<AlbumType> = ({
  title,
  poster,
  artistName,
  releaseDate,
}) => {
  const { setFavoriteAlbums } = useFavorites();

  return (
    <div className='w-[200px]'>
      <Image
        className='rounded-xl w-full h-[200px] bg-cover'
        src={poster}
        width={100}
        height={100}
        alt={`Pochette de l'album ${title}`}
      />

      <div className='flex flex-row mt-2 w-full'>
        <div className='flex w-[80%] flex-col px-2 border-y border-l rounded-l-xl truncate'>
          <p className='bold text-lg truncate'>
            {title} ({releaseDate})
          </p>
          <p className='font-extralight text-sm'>{artistName}</p>
        </div>

        <button
          onClick={() => {
            const album: AlbumType = { title, poster, releaseDate, artistName };
            setFavoriteAlbums(album);
          }}
          className='w-[20%] border rounded-r-xl border-y border-r bold text-xl bg-green-500 text-white'
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AlbumCard;
