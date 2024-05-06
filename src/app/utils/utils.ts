import { setCookie } from "../actions/actions";

export const addFavorite = ({ favorites, id }: Favorites) =>
  setCookie("favorites", [...favorites, id].join(","));

export const removeFavorite = ({ favorites, id }: Favorites) =>
  setCookie("favorites", favorites.filter((item) => item !== id).join(","));
