<template>
    <div class="movie-item-wrapper">
        <div class="movie-item-series-tag">series</div>
        <div class="movie-item-card">
            <img src="" alt="">
            <div class="movie-item-genre">
                Action, Fantasy, Horror
            </div>
        </div>
        <div class="movie-item-name">Movie name</div>
        <div class="movie-item-date">May 5, 2012</div>
    </div>
</template>

<script lang="ts">
  export default {
    name: "MovieItem"
  };
</script>

<style scoped lang="scss">
    @import "src/shared/scss/colors";

    .movie-item {
        &-wrapper {
            position: relative;
        }

        &-card {
            position: relative;
            height: 200px;
            width: 150px;
            border-radius: 8px;
            border: 1px solid rgba(#fff, 0.5);
            cursor: pointer;
            overflow: hidden;
        }

        &-name {
            color: $font-color;
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
            top:0;
            left:0;
            height: 100%;
            width: 100%;
            background-color: rgba($dark-gray, 0.5);
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }
</style>
