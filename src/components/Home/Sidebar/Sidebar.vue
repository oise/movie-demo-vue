<template>
    <aside class="sidebar">
        <h2 class="sidebar-header">
            movie app
        </h2>
        <div class="sidebar-menu">
            <a class="sidebar-menu-item">Browse</a>
            <a class="sidebar-menu-item">Recommendations</a>
            <a class="sidebar-menu-item">Popular</a>
        </div>

        <div class="sidebar-submenu">
            <div class="sidebar-submenu-header">Genre</div>
            <a class="sidebar-submenu-item">Comedy</a>
            <a class="sidebar-submenu-item">Horror</a>
            <a class="sidebar-submenu-item">Action</a>
        </div>
    </aside>
</template>

<script>
  export default {
    name: "Sidebar"
  };
</script>

<style scoped lang="scss">
    @import './src/shared/scss/colors';

    .sidebar {
        background: $dark-gray;
        position: fixed;
        min-height: 100vh;
        width: 280px;
        padding: 32px;
        font-weight: 500;

        &-header {
            text-transform: uppercase;
        }

        &-menu {
            display: flex;
            flex-direction: column;
            text-transform: uppercase;

            &-item {
                margin-top: 6px;
                margin-bottom: 6px;
            }
        }

        &-submenu {
            margin-top: 80px;
            display: flex;
            flex-direction: column;

            &-header {
                text-transform: uppercase;
                font-weight: 500;
                opacity: 0.6
            }

            &-item {
                margin-top: 6px;
                margin-bottom: 6px;
            }
        }
    }
</style>
