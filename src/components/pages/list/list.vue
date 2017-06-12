<template>
  <div class="list">
    <add-list></add-list>
    <table-list></table-list>
  </div>
</template>

<script>
import tableList from 'components/common/tablelist'
import addList from 'components/common/addlist'
export default {
  components: {
    tableList,
    addList
  }
}
</script>

<style lang="scss" scoped>

</style>
