import { getFavoritesList } from "./actions/actions";
import { getFavoriteShows, getUpcomingEpisodes } from "./services/services";
import FavoritesList from "./components/FavoritesList";
import Header from "./components/Header";
import UpcomingEpisodes from "./components/UpcomingEpisodes";

export default async function Home() {
  const favoritesCookieList = await getFavoritesList();
  const favoriteShows = await getFavoriteShows(favoritesCookieList);
  const upcomingEpisodes = await getUpcomingEpisodes(favoriteShows);

  return (
    <main>
      <Header />
      <FavoritesList
        favoritesCookieList={favoritesCookieList}
        shows={favoriteShows}
      />
      <UpcomingEpisodes episodes={upcomingEpisodes} />
    </main>
  );
}
