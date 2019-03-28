<template>
  <section class="app-wrapper">
    <Sidebar class="sidebar-wrapper"></Sidebar>
    <section class="layout">
      <Navbar class="nav-wrapper"></Navbar>
      <AppMain class="main-wrapper"></AppMain>
    </section>
  </section>
</template>

<script>
import { Navbar, AppMain, Sidebar } from "./";

export default {
  components: {
    Navbar,
    AppMain,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
$--nav-height: 60px;
$--sidebar-width: 216px;
$--sidebar-width-collapse: 60px;
.app-wrapper {
  height: 100vh;
  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    overflow-y: auto;
    width: $--sidebar-width;
    transition: width 0.28s;
  }
  .layout {
    height: 100vh;
    margin-left: $--sidebar-width;
    .nav-wrapper {
      position: fixed;
      height: $--nav-height;
      right: 0;
      left: $--sidebar-width;
      background: $--bg-white;
      z-index: 999;
    }
    .main-wrapper {
      flex: 1;
      height: 100%;
      padding-top: $--nav-height;
      background: $--bg-gray;
    }
  }
}
</style>
