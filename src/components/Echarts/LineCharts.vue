<template>
  <div>
    <div id="main" style="width:200px; height:210px;"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts/core'
export default {
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      const myChart = echarts.init(this.$el.querySelector('#main'))
      const option = {
        title: {
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style>
</style>
