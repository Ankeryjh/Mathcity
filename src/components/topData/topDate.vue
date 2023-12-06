<template>
  <div>
    <div class="top_content">
      <div class="datas-container data-container">
        <div class="data-content">
          <div class="data-body">
            <div class="datas-container">
              <div class="box">
                <div class="title">供水总量</div>
                <div class="data">875662方</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="datas-container data-container">
        <div class="data-content">
          <div class="data-body">
            <div class="datas-container">
              <div class="box">
                <div class="title">平均供水量</div>
                <div class="data">85方</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="datas-container data-container">
        <div class="data-content">
          <div class="data-body">
            <div class="datas-container">
              <div class="box">
                <div class="title">供电总量</div>
                <div class="data">8945113度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="datas-container data-container">
        <div class="data-content">
          <div class="data-body">
            <div class="datas-container">
              <div class="box">
                <div class="title">平均供电量</div>
                <div class="data">113度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.top_content {
  /* background-color: red; */
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.top_content .box {
  display: flex;
  flex-direction: column;
}

.top_content .box .title {
  margin-bottom: 20px;
  color: aliceblue;
  font-weight: bold;
  margin: 5px;
  font-size: 14px;
}

.top_content .box .data {
  color: #66b1ff;
}

.datas-container {
  position: absolute;
  overflow: hidden;
  display: block;
  cursor: default;
  z-index: 0;
  left: 0;
  top: 0;
  /* width: 100%;
  height: 100%;  */
}

.data-container:before,
.data-container:after {
  content: '';
  position: absolute;
  top: -2px;
  width: 5px;
  height: 5px;
  border-color: #0a6aff;
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 0;
}

.data-container {
  position: absolute;
  position: relative;
  width: 90px;
  height: 60px;
  border: 2px solid rgba(92, 255, 255, 0.1);
  background: rgba(10, 106, 255, 0.1) url(../../assets/img/wg.png) repeat 50% 50% !important;
  background-blend-mode: screen;
  overflow: visible;
}

.data-container:before {
  left: -2px;
  border-left-width: 2px;
  border-right-width: 0;
}

.data-container:after {
  right: -2px;
  border-left-width: 0;
  border-right-width: 2px;
}

.data-content:before,
.data-content:after {
  content: '';
  position: absolute;
  bottom: -2px;
  width: 5px;
  height: 5px;
  border-color: #0a6aff;
  border-style: solid;
  border-top-width: 0;
  border-bottom-width: 2px;
}

.data-content {
  position: absolute;
  padding: 2px 2px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.data-content:before {
  left: -2px;
  border-left-width: 2px;
  border-right-width: 0;
}

.data-content:after {
  right: -2px;
  border-left-width: 0;
  border-right-width: 2px;
}
</style>
