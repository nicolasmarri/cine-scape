export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path?: string;
  poster_path?: string;
  videos?: {
    results: Video[];
  };
}

export interface Video {
  key: string;
  name: string;
}

export interface MovieApiResponse {
  results: Movie[];
}
