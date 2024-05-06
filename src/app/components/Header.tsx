import ButtonHome from "./ButtonHome";
import ButtonSearch from "./ButtonSearch";

export default function Header({ hideSearch }: { hideSearch?: boolean }) {
  return (
    <header>
      <nav className="relative flex w-full items-center justify-between mb-5">
        <ButtonHome />
        {hideSearch ? null : <ButtonSearch />}
      </nav>
    </header>
  );
}
