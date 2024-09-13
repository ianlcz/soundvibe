import AlbumType from "./AlbumType";

interface FavoriteContextType {
  favoriteAlbums: AlbumType[];
  setFavoriteAlbums: (album: AlbumType) => AlbumType[];
}
export default FavoriteContextType;
