<template>
  <div class="charts">
    <div id="myChart"></div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')

export default {
  data () {
    return {
      charts: '',
      legendData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      seriesData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ]
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.Chart('myChart')
    })
  },
  methods: {
    Chart (id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: this.legendData
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.seriesData
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.charts {
  width: 100%;
  height: 100%;
  #myChart {
    width: 100%;
    height: 100%
  }
}
</style>
