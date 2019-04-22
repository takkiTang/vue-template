<template>
  <section class="h-full">
    <div class="top">
      <img width="124" height="26" src="@/assets/logo.svg" />
    </div>
    <el-menu router :default-active="$route.path" class="b-t menu">
      <div v-for="(item, index) in sidebar_routers" :key="index">
        <el-menu-item v-if="!item.children" :index="item.path">
          {{ item.title }}
        </el-menu-item>
        <el-submenu v-else :index="item.name || item.path">
          <span slot="title">{{ item.title }}</span>
          <el-menu-item
            v-for="(child, index) in item.children"
            :key="index"
            :index="resolvePath(item.path, child.path)"
            >{{ child.title }}</el-menu-item
          >
        </el-submenu>
      </div>
    </el-menu>
  </section>
</template>

<script>
import menuMap from "@/menu.js";

export default {
  computed: {
    sidebar_routers() {
      return menuMap;
    }
  },
  methods: {
    resolvePath(parent, child) {
      return `${parent}/${child}`;
    }
  }
};
</script>

<style lang="scss" scoped>
$--nav-height: 60px;
.top {
  height: $--nav-height;
  padding: 16px 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  border-right: 1px solid $--border-color;
}
.menu {
  height: calc(100% - #{$--nav-height});
}
.h-full {
  height: 100%;
}
</style>
