"use client";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import AlbumContextType from "../interfaces/AlbumContextType";

const AlbumContext = createContext<AlbumContextType | undefined>(undefined);

export const useAlbumContext = () => {
  const context = useContext(AlbumContext);
  if (!context) {
    throw new Error("useAlbumContext must be used within an AlbumProvider");
  }
  return context;
};

export const AlbumProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [albumTitle, setAlbumTitle] = useState<string>("");

  return (
    <AlbumContext.Provider value={{ albumTitle, setAlbumTitle }}>
      {children}
    </AlbumContext.Provider>
  );
};
