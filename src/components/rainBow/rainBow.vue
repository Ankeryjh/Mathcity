<template>
  <div>
        <div class="chartsdom" id="chart_rbt"></div>
        <div class="preinfo" :class="`preinfo${index}`" v-for="(item, index) in arrData" :key="index">
          <span>{{ item.percent }}%</span>
          <span>{{ item.name }}</span>
        </div>
        <div class="preinfos" :class="`pre${i}`" v-for="(v, i) in arrData" :key="i">
          <span></span>
          <span></span>
        </div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
export default {
  data () {
    return {
      option: null,
      arrData: [{
        name: '食品类',
        percent: 73
      }, {
        name: '工业类',
        percent: 20
      }, {
        name: '医疗类',
        percent: 32
      }, {
        name: '政务类',
        percent: 60
      }, {
        name: '金融类',
        percent: 14
      }]
    }
  },
  mounted () {
    this.getEchart()
  },
  methods: {
    getEchart () {
      const myChart = echarts.init(document.getElementById('chart_rbt'))
      const itemStyle = {
        normal: {
          color: 'rgba(0, 0, 0, 0)'
        }
      }

      this.option = {
        color: ['#125ec1', '#3fa5c0', '#d68639', '#ad5b68', '#6082a5'],
        series: [{
          name: '金融类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['85%', '90%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            shadowColor: '#125ec1',
            shadowBlur: 15
          },
          data: [{
            value: 15,
            name: '15%',
            itemStyle: {
              normal: {
                color: '#125ec1'
              }
            }
          }, {
            value: 85,
            name: '50%',
            itemStyle: itemStyle
          }]
        }, {
          name: '政务类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['72%', '77%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            shadowColor: '#3fa5c0',
            shadowBlur: 15
          },
          data: [{
            value: 60,
            name: '60%',
            itemStyle: {
              normal: {
                color: '#3fa5c0'
              }
            }
          }, {
            value: 40,
            name: '40%',
            itemStyle: itemStyle
          }]
        }, {
          name: '医疗类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['59%', '64%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            shadowColor: '#d68639',
            shadowBlur: 15
          },
          data: [{
            value: 32,
            name: '32%',
            itemStyle: {
              normal: {
                color: '#d68639'
              }
            }
          }, {
            value: 68,
            name: '68%',
            itemStyle: itemStyle
          }]
        }, {
          name: '工业类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['46%', '51%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            shadowColor: '#ad5b68',
            shadowBlur: 15
          },
          data: [{
            value: 20,
            name: '20%',
            itemStyle: {
              normal: {
                color: '#ad5b68'
              }
            }
          }, {
            value: 80,
            name: '80%',
            itemStyle: itemStyle
          }]
        }, {
          name: '食品类',
          type: 'pie',
          clockWise: false,
          startAngle: 90,
          hoverAnimation: false,
          radius: ['33%', '38%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            shadowColor: '#6082a5',
            shadowBlur: 15
          },
          data: [{
            value: 73,
            name: '73%',
            itemStyle: {
              normal: {
                color: '#6082a5'
              }
            }
          }, {
            value: 27,
            name: '27%',
            itemStyle: itemStyle
          }]
        }]
      }

      // 使用制定的配置项和数据显示图表
      myChart.setOption(this.option, true)

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  },
  beforeDestroy () {

  }
}
</script>

<style>
.chartsdom {
  width:400px;
  height: 300px;
}

.preinfo {
  position: absolute;
  left: 15%;
  top: 85%;
  margin-left: -2.5em;
  -webkit-transform: translate(0%, -50%);
  -moz-transform: translate(0%, -50%);
  -ms-transform: translate(0%, -50%);
  -o-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
  white-space: nowrap;
  font-size: 13px;
}

.preinfo .span:nth-child(1) {
  margin-right: 10px;
}

.preinfo0 {
  color: rgb(99, 139, 176);
  margin-top: -65px;
}

.preinfo1 {
  color: rgb(180, 91, 111);
  margin-top: -87px;
}

.preinfo2 {
  color: rgb(232, 138, 50);
  margin-top: -109px;
}

.preinfo3 {
  color: rgb(70, 179, 200);
  margin-top: -131px;
}

.preinfo4 {
  color: rgb(19, 98, 201);
  margin-top: -153px;
}

.preinfos {
  position: absolute;
  left:203px;
  top: 760px;
  width: 1px;
  height: 58px;
  background-color: rgb(99, 139, 176);
  -webkit-transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  -ms-transform-origin: 50% 0;
  -o-transform-origin: 50% 0;
  transform-origin: 50% 0;
}

.preinfos span:nth-child(1) {
  width: 8px;
  height: 8px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  position: absolute;
  left: -3px;
  top: 50%;
}

.preinfos span:nth-child(2) {
  width: 0;
  height: 0;
  border-width: 12px 5px 5px 5px;
  border-style: solid;
  position: absolute;
  left: -5px;
  top: 100%;
}

.preinfos.pre0 {
  height: 65px;
  background-color: rgb(99, 139, 176);
  transform: rotate(-62.614deg);
}

.preinfos.pre0 span:nth-child(1) {
  background-color: rgb(99, 139, 176);
}

.preinfos.pre0 span:nth-child(2) {
  border-color: rgb(99, 139, 176) transparent transparent;
}

.preinfos.pre1 {
  height: 87px;
  background-color: rgb(180, 91, 111);
  transform: rotate(125.593deg);
}

.preinfos.pre1 span:nth-child(1) {
  background-color: rgb(180, 91, 111);
}

.preinfos.pre1 span:nth-child(2) {
  border-color: rgb(180, 91, 111) transparent transparent;
}

.preinfos.pre2 {
  height: 109px;
  background-color: rgb(232, 138, 50);
  transform: rotate(86.2006deg);
}

.preinfos.pre2 span:nth-child(1) {
  background-color: rgb(232, 138, 50);
}

.preinfos.pre2 span:nth-child(2) {
  border-color: rgb(232, 138, 50) transparent transparent;
}

.preinfos.pre3 {
  height: 131px;
  background-color: rgb(70, 179, 200);
  transform: rotate(-18.845deg);
}

.preinfos.pre3 span:nth-child(1) {
  background-color: rgb(70, 179, 200);
}

.preinfos.pre3 span:nth-child(2) {
  border-color: rgb(70, 179, 200) transparent transparent;
}

.preinfos.pre4 {
  height: 153px;
  background-color: rgb(19, 98, 201);
  transform: rotate(149.666deg);
}

.preinfos.pre4 span:nth-child(1) {
  background-color: rgb(19, 98, 201);
}

.preinfos.pre4 span:nth-child(2) {
  border-color: rgb(19, 98, 201) transparent transparent;
}
</style>
