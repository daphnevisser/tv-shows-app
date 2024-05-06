"use client";

import Image from "next/image";
import Link from "next/link";

import { removeFavorite } from "../utils/utils";

export default function ShowCard({
  show,
  favoritesCookieList,
}: {
  show: Show;
  favoritesCookieList?: string[];
}) {
  return show.image ? (
    <li className="group relative">
      <Link href={`/show/${show.id}`}>
        <Image
          className="group-hover:brightness-125"
          src={show.image.medium}
          width={210}
          height={295}
          alt="Picture of the show"
        />
        <p>{show.name}</p>
        {favoritesCookieList && (
          <button
            className="hidden absolute top-2 right-2 bg-white rounded z-10 p-2 text-black text-xs group-hover:block"
            onClick={(e) => {
              e.preventDefault();
              removeFavorite({
                favorites: favoritesCookieList,
                id: show.id.toString(),
              });
            }}
          >
            Remove
          </button>
        )}
      </Link>
    </li>
  ) : null;
}
