"use client";

import AlbumGrid from "./components/AlbumGrid/AlbumGrid";
import Input from "./components/Input/Input";
import { useAlbumContext } from "./contexts/AlbumContext";

const Home = () => {
  const { albumTitle } = useAlbumContext();
  const albums = [
    {
      title: "Inception",
      poster: "https://i1.sndcdn.com/artworks-000069308747-ioxxh5-t500x500.jpg",
      compositor: "Hans Zimmer",
      releaseDate: 2010,
    },
    {
      title: "Inception",
      poster: "https://i1.sndcdn.com/artworks-000069308747-ioxxh5-t500x500.jpg",
      compositor: "Hans Zimmer",
      releaseDate: 2010,
    },
    {
      title: "Inception",
      poster: "https://i1.sndcdn.com/artworks-000069308747-ioxxh5-t500x500.jpg",
      compositor: "Hans Zimmer",
      releaseDate: 2010,
    },
    {
      title: "Inception",
      poster: "https://i1.sndcdn.com/artworks-000069308747-ioxxh5-t500x500.jpg",
      compositor: "Hans Zimmer",
      releaseDate: 2010,
    },
    {
      title: "Inception",
      poster: "https://i1.sndcdn.com/artworks-000069308747-ioxxh5-t500x500.jpg",
      compositor: "Hans Zimmer",
      releaseDate: 2010,
    },
    {
      title: "Inception",
      poster: "https://i1.sndcdn.com/artworks-000069308747-ioxxh5-t500x500.jpg",
      compositor: "Hans Zimmer",
      releaseDate: 2010,
    },
    {
      title: "Inception",
      poster: "https://i1.sndcdn.com/artworks-000069308747-ioxxh5-t500x500.jpg",
      compositor: "Hans Zimmer",
      releaseDate: 2010,
    },
    {
      title: "Inception",
      poster: "https://i1.sndcdn.com/artworks-000069308747-ioxxh5-t500x500.jpg",
      compositor: "Hans Zimmer",
      releaseDate: 2010,
    },
  ];
  
  return (
    <div className='flex flex-row max-w-full h-screen'>
      <div className='border border-blue-700 p-8 w-full'>
        <Input />

        <p>{albumTitle}</p>

        <AlbumGrid albums={albums} />
      </div>
      <div className='border border-green-700 w-1/2'></div>
    </div>
  );
};
export default Home;
