<template>
  <section class="wrapper h-full">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">{{
        item.meta.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>

<script>
export default {
  computed: {
    levelList() {
      return this.$route.matched.filter(item => {
        return item.name;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
}
.h-full {
  height: 100%;
}
</style>
