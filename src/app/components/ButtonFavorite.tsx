"use client";

import Button from "./Button";
import { removeFavorite, addFavorite } from "../utils/utils";

export default function ButtonFavorite({ id, favorites }: Favorites) {
  const isFavorite = favorites.includes(id);

  return isFavorite ? (
    <Button
      text="Remove from favorites"
      onClick={() => removeFavorite({ favorites, id })}
    />
  ) : (
    <Button
      text="Add to favorites"
      onClick={() => addFavorite({ favorites, id })}
    />
  );
}
