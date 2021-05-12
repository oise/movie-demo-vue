<template>
    <form class="movie-search" @submit="doSearch">
        <input v-model="search" type="text" placeholder="Search movie title"/>
        <button type="button" class="movie-search-button" @click="reset">Reset</button>
    </form>
    <div class="movie-list-grid">
        <MovieItem v-for="movie of movies" :key="movie.id" :movie="movie" @search-by-genre="doSearchByGenre"/>
    </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import MovieItem from "./MovieItem.vue";
  import { Movie, MovieService } from "./movie.service";

  export default defineComponent({
    name: "MovieList",
    components: { MovieItem },

    setup() {
      const movieService = new MovieService();

      let filteredMovies = ref<Movie[]>([]);

      let search = ref<string>("");

      let genreId = ref<number>();

      const getMovies = async () => {
        filteredMovies.value = await movieService.get(1, 10, search.value, genreId.value);
      };

      /**
       * Handles search
       * In an idea situation, this should also update the HistoryState via
       * the router.
       * @param event
       */
      const doSearch = (event: Event) => {
        event.preventDefault();
        getMovies();
      };


      const doSearchByGenre = (id: number) => {
        genreId.value = id;
        getMovies();
      };

      const reset = () => {
        genreId.value = undefined;
        search.value = "";
        getMovies();
      };

      onMounted(getMovies);

      return {
        movies: filteredMovies,
        search,
        genreId,
        reset,
        doSearch,
        doSearchByGenre,
        getMovies
      };
    }
  });
</script>

<style scoped lang="scss">
    @import "src/shared/scss/variables";

    .movie-search {
        margin-bottom: 32px;
        width: 100%;

        input {
            max-width: 480px;
            min-width: 300px;
            background: transparent;
            border: 1px solid rgba(#fff, 0.2);
            height: 40px;
            padding: 0 16px;
            text-align: center;
            color: $font-color
        }

        &-button {
            margin-left:8px;
        }
    }

    .movie-list-grid {
        width: 100%;
        display: grid;
        grid-gap: 32px;
        grid-template-columns: repeat(auto-fill, minmax($columnWidth, 1fr));
        height: 300px;
    }


</style>
