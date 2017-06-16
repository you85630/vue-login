<template>
  <div id="app">
    <top-list></top-list>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import topList from 'components/common/toplist'
export default {
  components: {
    topList
  },
  created () {
    this.$store.dispatch('tablelist')
  }
}
</script>
