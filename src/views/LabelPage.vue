<template>
  <el-container class="Label">
    <el-header></el-header>
    <el-container class="Label__Container">
      <el-aside></el-aside>
      <el-main></el-main>
      <el-aside></el-aside>
    </el-container>
  </el-container>
</template>

<script setup>


</script>

<style lang="less" scoped>
.Label {
  position: relative;
  width: 100%;
  height: 100vh;

  &__Header {}

  &__Container {
    width: 100%;
  }
}
</style>