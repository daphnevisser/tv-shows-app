import ShowCard from "./ShowCard";

export default function FavoritesList({
  shows,
  favoritesCookieList,
}: {
  shows: Show[];
  favoritesCookieList: string[];
}) {
  return (
    <div>
      <h2 className="mb-4 text-3xl text-center">Your favorites:</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 justify-items-center">
        {shows.length
          ? shows.map((show) => (
              <ShowCard
                key={show.id}
                show={show}
                favoritesCookieList={favoritesCookieList}
              />
            ))
          : "You haven't added any favoties yet"}
      </ul>
    </div>
  );
}
