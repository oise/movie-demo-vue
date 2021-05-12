<template>
    <div class="movie-search">
        <input type="text" placeholder="Search movie title"/>
    </div>
    <div class="movie-list-grid">
        <MovieItem v-for="movie of movies" :key="movie.id" :movie="movie"/>
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
      let movies = ref<Movie[]>([]);

      let search = ref<string>();

      let genre = ref<number>();


      const getMovies = async () => {
        movies.value = await MovieService.get(1, 10, search.value, genre.value);
      };

      onMounted(getMovies);


      return {
        movies,
        search,
        genre,
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
            color:$font-color
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
