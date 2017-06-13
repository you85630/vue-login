<template>
  <div class="toplist">
    <router-link to="/">首页</router-link>
    <router-link to="/list">列表页</router-link>
    <router-link to="/chart">图表页</router-link>
  </div>
</template>

<style lang="scss" scoped>
  .toplist{
    margin: 10px 0;
    a{
      color: blue;
      margin-right: 10px;
    }
  }
</style>
