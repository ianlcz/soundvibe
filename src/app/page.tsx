"use client";

import Input from "./components/Input/Input";
import { useAlbumContext } from "./contexts/AlbumContext";

const Home = () => {
  const { albumTitle } = useAlbumContext();
  return (
    <div className='flex max-w-full h-screen'>
      <div className='border border-blue-700 p-8 w-full'>
        <Input />

        <p>{albumTitle}</p>
      </div>
      <div className='border border-green-700 w-1/2'></div>
    </div>
  );
};
export default Home;
