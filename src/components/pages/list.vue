<template>
  <div class="list">
    <add-list></add-list>
    <search-list></search-list>
    <table-list></table-list>
  </div>
</template>

<script>
import tableList from 'components/common/tablelist'
import addList from 'components/common/addlist'
import searchList from 'components/common/searchlist'
export default {
  components: {
    tableList,
    addList,
    searchList
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 400px;
  text-align: center;
  margin: 0 auto;
}
</style>
