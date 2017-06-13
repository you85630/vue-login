<template>
  <div class="chart-list">
    <chart-list></chart-list>
  </div>
</template>

<script>
import chartList from 'components/common/chartlist'
export default {
  components: {
    chartList
  }
}
</script>

<style lang="scss" scoped>
.chart-list {
  width: 500px;
  height: 300px;
}
</style>
