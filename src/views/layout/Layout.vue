<template>
  <el-container class="h-100vh">
    <el-aside width="200px">
      <Sidebar></Sidebar>
    </el-aside>
    <el-container>
      <el-header class="b-b">
        <Navbar></Navbar>
      </el-header>
      <el-main>
        <AppMain></AppMain>
      </el-main>
    </el-container>
  </el-container>
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
.h-100vh {
  height: 100vh;
}
.b-b {
  border-bottom: 1px solid $--border-color;
}
</style>
