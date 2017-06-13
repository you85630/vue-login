<template>
  <div class="chart-list">
    <schart :canvasId="charts.canvasId" :type="charts.type" :data="charts.data" :width="charts.width" :height="charts.height" :options="charts.options"></schart>
    <schart :canvasId="charts1.canvasId" :type="charts1.type" :data="charts1.data" :width="charts1.width" :height="charts1.height" :options="charts1.options"></schart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Schart from 'vue-schart'        // 导入Schart组件
export default {
  components: {
    Schart
  },
  computed: {
    ...mapGetters([
      'charts',
      'charts1'
    ])
  }
}
</script>

<style lang="scss" scoped>
.chart-list {
}
</style>
