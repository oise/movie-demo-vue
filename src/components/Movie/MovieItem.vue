<template>
    <div class="movie-item-wrapper" @mouseenter="hover = true" @mouseleave="hover = false">
        <div v-if="movie.isSeries" class="movie-item-series-tag">series</div>
        <div class="movie-item-card">
            <img :src="movie.poster" :alt="`poster for ${movie.title}`">
            <transition name="fade">
                <div v-if="hover" class="movie-item-genre">
                    <a v-for="genre of movie.genre" :key="genre.id" :href="`genre/${genre.id}`">{{genre.title}}</a>
                </div>
            </transition>
        </div>
        <div class="movie-item-name">{{movie.title}}</div>
        <div class="movie-item-date">{{friendlyDate()}}</div>
    </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from "vue";
  import { Movie } from "./movie.service";

  export default defineComponent({
    name: "MovieItem",
    props: {
      movie: Object as PropType<Movie>
    },

    setup(props) {
      const hover = ref<boolean>(false);

      const friendlyDate = () => {
        const date = props?.movie && new Date(props.movie.releaseDate);
        return `${date?.getDate()}-${date?.getMonth()}-${date?.getFullYear()}`;
      };

      return { friendlyDate, hover };
    }
  });
</script>

<style scoped lang="scss">
    @import "src/shared/scss/colors";
    @import "src/shared/scss/variables";

    .movie-item {
        &-wrapper {
            position: relative;
            width: $columnWidth;
        }

        &-card {
            position: relative;
            height: 200px;
            border-radius: 8px;
            border: 1px solid rgba(#fff, 0.5);
            cursor: pointer;
            overflow: hidden;
        }

        &-name {
            color: #fff;
            font-weight: bold;
            font-size: 13px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            max-height: 50px;
        }

        &-series-tag {
            position: absolute;
            font-size: 10px;
            height: 25px;
            line-height: 25px;
            text-transform: uppercase;
            background-color: $primary;
            color: #fff;
            top: -5px;
            padding: 0 4px;
            font-weight: bold;
            left: -5px;
            border-radius: 4px;
            z-index: 2;
        }

        &-genre {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgba($dark-gray, 0.8);
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            transition: all 200ms ease-in-out;

            a {
                padding: 0 3px;
            }
        }
    }
</style>
