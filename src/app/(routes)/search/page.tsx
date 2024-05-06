import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import { getShows } from "../../services/services";
import ShowCard from "../../components/ShowCard";

export default async function Page({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  const query = searchParams?.query || "";
  const data = await getShows(query);

  return (
    <div>
      <Header hideSearch />
      <SearchBar />
      {searchParams && searchParams.query && !data.length ? (
        <p>No results</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 justify-items-center">
          {data.map((hit) => (
            <ShowCard show={hit.show} key={hit.show.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
