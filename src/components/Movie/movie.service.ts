import movieData from "../../assets/sample-data.json";

//Ideally, these interfaces would sit in separate files as they would we used across multiple places

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

  /**
   *
   * @param page - Current page data is needed for
   * @param size -  Size of data per page
   * @param search - Optional search params matching name of movie.
   * @param genre
   */
  static async get(page: number = 1, size: number = 10, search?: string, genre?: number): Promise<any> {
    let filteredResult = movieData;
    if(search) {
      return movieData.filter(movie => movie.title.search(new RegExp(search)));
    }

    return new Promise(resolve => resolve(filteredResult));
  }
}
