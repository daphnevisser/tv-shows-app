import Image from "next/image";

import { getFavoritesList } from "../../../actions/actions";
import { getShow } from "@/app/services/services";
import ButtonFavorite from "@/app/components/ButtonFavorite";
import Header from "@/app/components/Header";

export default async function Show({ params }: { params: { id: string } }) {
  const show = await getShow(params.id);
  const favorites = await getFavoritesList();

  return (
    <>
      <Header />
      <div>
        <div className="flex">
          <div className="flex-none">
            {show.image && (
              <>
                <Image
                  src={show.image.medium}
                  width={210}
                  height={295}
                  alt="Picture of the show"
                  className="mb-2"
                />
              </>
            )}
            <ButtonFavorite id={params.id} favorites={favorites} />
          </div>
          <div className="px-4">
            <h1 className="text-3xl">{show.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            <p>
              <strong>Language:</strong> {show.language}
            </p>
            <p>
              <strong>Genres:</strong> {show.genres.join(", ")}
            </p>
            <p>
              <strong>Status:</strong> {show.status}
            </p>
            <p>
              <strong>Premiered:</strong> {show.premiered}
            </p>
            <p>
              <strong>Ended:</strong> {show.ended || "-"}
            </p>
            <p>
              <strong>Rating:</strong> {show.rating.average}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
