"use client"

import { ChangeEvent, FC, useState } from "react";

const Input: FC = () => {
  const [albumTitle, setAlbumTitle] = useState<string>("");

  const handleAlbumTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlbumTitle(e.target.value);
    console.log(albumTitle);
  };

  return (
    <div className='max-w-sm'>
      <label
        htmlFor='input-label'
        className='block text-sm font-semibold mb-2 dark:text-white'
      >
        Titre de l&apos;album
      </label>
      <input
        type='text'
        id='input-label'
        className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
        placeholder='Tapez le titre de votre album ici'
        value={albumTitle}
        onChange={handleAlbumTitleChange}
      />
    </div>
  );
};

export default Input;
