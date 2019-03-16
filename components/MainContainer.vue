<template>
  <el-main id="main-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <slot />
    </el-scrollbar>
  </el-main>
</template>

<style>
#main-container {
  height: 100vh;
}
</style>
