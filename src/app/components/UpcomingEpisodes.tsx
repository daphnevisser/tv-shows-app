const UpcomingEpisodes = ({ episodes }: { episodes: Episode[] }) => {
  return (
    <div className="my-5">
      <h2 className="mb-4 text-3xl text-center">Upcoming episodes:</h2>
      <ul className="grid justify-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {episodes.length
          ? episodes.map((episode) => (
              <li
                className="border-solid border-2 border-blue-500 rounded-lg shadow-md p-4"
                key={episode.id}
              >
                <h2 className="text-xl font-semibold mb-2">
                  {episode._links.show.name}
                </h2>
                <p className="text-lg font-medium mb-1">{episode.name}</p>
                <p className="text-base mb-1">
                  S{episode.season}E{episode.number}
                </p>
                <p className="text-sm">{episode.airdate}</p>
              </li>
            ))
          : "No upcoming episodes"}
      </ul>
    </div>
  );
};

export default UpcomingEpisodes;
