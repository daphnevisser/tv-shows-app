interface SearchHit {
  score: number;
  show: Show;
}

interface Show {
  id: number;
  name: string;
  image: ShowImage;
  summary: string;
  language: string;
  genres: string[];
  status: string;
  premiered: string;
  ended: string;
  rating: {
    average: number;
  };
  _links: ShowLinks;
}

interface ShowImage {
  medium: string;
  original: string;
}

interface Episode {
  id: number;
  name: string;
  airdate: string;
  season: number;
  number: number;
  image: ShowImage;
  _links: {
    show: {
      name: string;
    };
  };
}

interface ShowLinks {
  self: {
    href: string;
  };
  previousepisode?: {
    href: string;
    name: string;
  };
  nextepisode?: {
    href: string;
    name: string;
  };
}

interface Favorites {
  id: string;
  favorites: string[];
}
