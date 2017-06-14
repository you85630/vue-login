<template>
  <div class="toplist">
    <router-link to="/">首页</router-link>
    <router-link to="/login">登录页</router-link>
    <router-link to="/list">列表页</router-link>
    <router-link to="/chart">图表页</router-link>
  </div>
</template>

<style lang="scss" scoped>
  .toplist{
    width: 100%;
    margin: 10px auto;
    text-align: center;
    a{
      color: blue;
      margin-right: 10px;
    }
  }
</style>
