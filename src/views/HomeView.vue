<template>
  <div>
    <div class="container">
      <iframe id="unity-infame" ref="iframeDom" src="http://127.0.0.1:8081/" frameborder="0" scrolling="no"  marginwidth="0" marginheight="0" allowtransparency="yes"></iframe>
      <div class="top"></div>
      <div class="content-container">
        <div class="left-content">
          <Topdate />
          <div class="first_content">
            <LineCharts />
            <LineRace />
          </div>
          <div class="linebar" style="margin-left: 15px;">
            <LineBar />
          </div>
          <div class="rainbow">
            <rainBow />
          </div>
        </div>
        <div class="center_content">
          <goldTark />
        </div>
        <div class="right-content">
          <div class="top_news" style="width:450px; height: 520px;">
            <News />
          </div>
          <div class="under_contend" style="width:450px;height: 300px;">
            <dynamiclist/>
          </div>
        </div>
      </div>
    <div class="u-container">
    </div>
    </div>
  </div>
</template>
<script>
import LineCharts from '../components/Echarts/LineCharts.vue'
import LineRace from '../components/Echarts/LineRace.vue'
import News from '../components/News/newScroll.vue'
import LineBar from '../components/Echarts/LineBar.vue'
import Topdate from '../components/topData/topDate'
import goldTark from '@/components/goldTark/goldTark.vue'
import rainBow from '@/components/rainBow/rainBow.vue'
import dynamiclist from '@/components/dynamicList/dynamicList.vue'
export default {
  components: {
    LineCharts,
    LineRace,
    News,
    LineBar,
    Topdate,
    goldTark,
    rainBow,
    dynamiclist
  }
}
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: transparent;
  background: url(../assets/img/brand/top_brand.png) no-repeat;
  background-position: 65% 0;
  border: none;
  overflow: auto;
}

.content-container {
  display: flex;
  justify-content: space-between;
  margin-top: 90px;
  width: 100%;
}
.u-container{
  height: 500px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color:red;
}

.left-content .right-content {
  width: 450px;
  height: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
}

.first_content {
  display: flex;
  justify-content: space-around;
  margin-left: 15px;
}

.dynamic-list {
  margin-top: 20px;
  margin-bottom: 20px;
}

.head-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 800px;

}

.top-content .under-content {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

#unity-infame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
