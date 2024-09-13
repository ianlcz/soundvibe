"use client";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import AlbumType from "../interfaces/AlbumType";
import FavoriteContextType from "../interfaces/FavoriteContextType";

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);

export const useFavorites = (): FavoriteContextType => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
};

export const FavoriteProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteAlbums, setFavoriteAlbums] = useState<AlbumType[]>([]);

  // Fonction pour ajouter ou supprimer un album des favoris
  const handleSetFavoriteAlbums = (album: AlbumType): AlbumType[] => {
    const isFavorite = favoriteAlbums.find(
      (favAlbum) =>
        favAlbum.title === album.title &&
        favAlbum.artistName === album.artistName,
    );

    // Si l'album est déjà dans les favoris, on le supprime, sinon on l'ajoute
    const updatedFavorites = isFavorite
      ? favoriteAlbums.filter(
          (favAlbum) =>
            favAlbum.title !== album.title &&
            favAlbum.artistName !== album.artistName,
        )
      : [...favoriteAlbums, album];

    setFavoriteAlbums(updatedFavorites);
    return updatedFavorites;
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteAlbums, setFavoriteAlbums: handleSetFavoriteAlbums }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
