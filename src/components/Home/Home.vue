<template>
    <Sidebar/>
    <main class="wrapper">
        <Movie/>
    </main>
</template>

<script lang="ts">
  import Sidebar from "./Sidebar/Sidebar.vue";
  import Movie from "../Movie/Movie.vue";

  export default {
    name: "Home",
    components: { Movie, Sidebar }
  };
</script>

<style scoped lang="scss">
    .wrapper {
        margin-left: 280px;
        padding:48px 32px;
    }
</style>
