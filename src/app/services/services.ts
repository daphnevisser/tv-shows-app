"use server";
export async function getShows(query: string): Promise<SearchHit[]> {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getShow(id: string): Promise<Show> {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getFavoriteShows(ids: string[]): Promise<Show[]> {
  try {
    const promises = ids.map((id) =>
      fetch(`https://api.tvmaze.com/shows/${id}`)
    );
    const responses = await Promise.all(promises);

    const dataPromises = responses.map(async (response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data for show`);
      }
      return response.json();
    });
    const shows = await Promise.all(dataPromises);

    return shows;
  } catch (error) {
    console.error("Error fetching favorite shows:", error);
    throw error;
  }
}

export async function getUpcomingEpisodes(shows: Show[]): Promise<Episode[]> {
  try {
    const showsWithNextEpisode = shows.filter(
      (show) => show._links.nextepisode
    );

    const episodePromises = showsWithNextEpisode.map((show) =>
      fetch(`https://api.tvmaze.com/shows/${show.id}/episodes`)
    );

    const episodeResponses = await Promise.all(episodePromises);

    const episodeDataPromises = episodeResponses.map(async (response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch episodes for show`);
      }
      return response.json();
    });

    const episodesByShow = await Promise.all(episodeDataPromises);

    const upcomingEpisodes = episodesByShow
      .flat()
      .filter((episode: Episode) => {
        const airdate = new Date(episode.airdate);
        return airdate > new Date();
      })
      .sort((a, b) => {
        const dateA = new Date(a.airdate);
        const dateB = new Date(b.airdate);
        return dateA.getTime() - dateB.getTime();
      });

    return upcomingEpisodes;
  } catch (error) {
    console.error("Error fetching upcoming episodes:", error);
    throw error;
  }
}
