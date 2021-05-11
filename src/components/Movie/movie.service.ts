import movieData from "../../assets/sample-data.json";

interface Genre {
  id: number;
  title: string;
}

interface Actor {
  id: bigint;
  name: string;
}

interface Movie {
  id: bigint;
  title: string;
  poster: string;
  genre: Genre[];
  actors: Actor[];
  isSeries: boolean;
  releaseDate: Date;
}

class MovieService {

  /**
   *
   * @param page - Current page data is needed for
   * @param size -  Size of data per page
   * @param search - Optional search params matching name of actor or movie.
   * @param genre
   */
  async get(page: number, size: number, search?: string, genre?: Genre): Promise<Movie | []> {
    return new Promise(() => movieData);
  }
}
