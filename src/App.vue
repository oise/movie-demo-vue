<template>
    <Home/>
</template>

<script lang="ts">
  import Home from "./components/Home/Home.vue";

  export default {
    name: "App",
    components: {
      Home
    }
  };
</script>

<style lang="scss">
  @import "./shared/scss/styles";
</style>
