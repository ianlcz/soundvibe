import AlbumType from "@/app/interfaces/AlbumType";
import AlbumCard from "../AlbumCard/AlbumCard";

const AlbumGrid = ({ albums }: { albums: AlbumType[] }) => {
  return (
    <div className='grid grid-rows-2 grid-flow-col gap-16 w-fit justify-center mt-20 mx-auto items-center'>
      {albums.map((album, idx) => (
        <AlbumCard
          key={idx}
          title={album.title}
          poster={album.poster}
          compositor={album.compositor}
          releaseDate={album.releaseDate}
        />
      ))}
    </div>
  );
};

export default AlbumGrid;
