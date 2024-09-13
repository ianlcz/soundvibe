import AlbumType from "@/app/interfaces/AlbumType";
import Image from "next/image";
import { FC } from "react";

const AlbumCard: FC<AlbumType> = ({
  collectionName,
  artworkUrl100,
  artistName,
  releaseDate,
}) => {
  return (
    <div className='w-[200px]'>
      <Image
        className='rounded-xl w-full h-[200px] bg-cover'
        src={artworkUrl100}
        width={100}
        height={100}
        alt={`Pochette de l'album ${collectionName}`}
      />

      <div className='flex flex-row mt-2 w-full'>
        <div className='flex w-[80%] flex-col px-2 border-y border-l rounded-l-xl truncate'>
          <p className='bold text-lg truncate'>
            {collectionName} ({releaseDate})
          </p>
          <p className='font-extralight text-sm'>{artistName}</p>
        </div>

        <button className='w-[20%] border rounded-r-xl border-y border-r bold text-xl bg-green-500 text-white'>
          +
        </button>
      </div>
    </div>
  );
};

export default AlbumCard;
