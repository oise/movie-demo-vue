import movieData from "../../assets/sample-data.json";

interface Genre {
  id: number;
  title: string;
}

interface Actor {
  id: bigint;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre: Genre[];
  actors: Actor[];
  isSeries: boolean;
  releaseDate: Date;
}

export class MovieService {

  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = `v1/movies`;
  }

  /**
   *
   * @param page - Current page data is needed for
   * @param size -  Size of data per page
   * @param search - Optional movie title or actors name
   * @param genreId - Optional GenreId
   */
  async get(page: number = 1, size: number = 10, search?: string, genreId?: number): Promise<any> {
    //Constructed Payload
    const url = `${this.baseUrl}?page=${page}&size=${size}`;

    console.log('genreId', genreId, search)

    if (search !== '') {
      console.log("---- Search + Filter ----", `${url}&search=${search}`);
      return new Promise(resolve => resolve([...movieData].splice(0,2)));
    }

    if (genreId) {
      console.log("---- Search + Filter ----", `${url}&genreId=${genreId}`);
      return new Promise(resolve => resolve([...movieData].splice(0,2)));
    }

    return new Promise(resolve => resolve(movieData));
  }
}
