<template>
  <div class="findFace">
    <Stare/>
    <div class="user-icon">
      <video
        width="780"
        height="550"
        ref="videoDom"
        id="video"
        preload
        autoplay
        loop
        muted
      ></video>
      <canvas width="780" height="550" ref="canvasDOM"></canvas>
    </div>

    <h3 class="findFaceFOnt">{{ loding }}</h3>
    <div class="button" @click="initTracker">点击按钮，进行人脸识别</div>
  </div>
</template>

<script>
import Stare from '../components/stare.vue';
require("tracking/build/tracking-min.js");
require("tracking/build/data/face-min.js");
// 嘴巴等特征,后期可添加
// require('tracking/build/data/mouth-min.js')
// require('tracking/build/data/eye-min.js')
//let objects = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
// require('tracking/examples/assets/stats.min.js')

export default {
  name: "testTracking",
  components:{
    Stare
  },  
  data() {
    return {
      // 记录拍照到了几次
      access_token: "",
      count: 0,
      isdetected: "请您保持脸部在画面中央",
      loding: "",
      imgbase64: "",
    };
  },
  methods: {
    // 初始化racker
    initTracker() {
      // alert('进来了')
      // alert(navigator.mediaDevices)
      // 启用摄像头,这一个是原生调用摄像头的功能,不写的话有时候谷歌浏览器调用摄像头会失败
      // 需要使用https访问不然会报错
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(this.getMediaStreamSuccess)
        .catch(this.getMediaStreamError);

      this.context = this.canvas.getContext("2d");

      // 初始化tracking参数
      this.tracker = new tracking.ObjectTracker("face");
      this.tracker.setInitialScale(4);
      this.tracker.setStepSize(2);
      this.tracker.setEdgesDensity(0.1);
      this.tracker.on("track", (event) => {
        this.onTracked(event);
      });

      // tracking启用摄像头,这里我选择调用原生的摄像头
      // tracking.track(this.video, this.tracker, { camera: true });

      // 如果是读取视频，可以用trackerTask.stop trackerTask.run来暂停、开始视频
      this.trackerTask = tracking.track(this.video, this.tracker);
    },
    // 监听中
    onTracked(event) {
      // 判断终止条件, stop是异步的，不返回的话，还会一直截图
      if (this.count >= 21) {
        this.onStopTracking();
        return;
      }

      // 画框框
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      event.data.forEach((rect) => {
        this.context.lineWidth = 1;
        this.context.strokeStyle = "#a64ceb";
        //'#a64ceb';
        this.context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        this.context.font = "11px Helvetica";
        this.context.fillStyle = "#fff";
        // 截图

        if (event.data.length > 0 && this.count <= 20) {
          if (this.count < 0) {
            this.count = 0;
          }
          this.count += 1;
          if (this.count > 20) {
            this.isdetected = "已检测到人脸，正在识别";
            this.getPhoto();
          }
        } else {
          this.count -= 1;
          if (this.count < 0) {
            this.isdetected = "请您保持脸部在画面中央";
          }
        }
      });
      // 视频中心展示文字
      this.context.fillText(this.isdetected, 100, 30);
    },
    // 停止监听
    onStopTracking() {
      this.trackerTask.stop();
      this.video.pause();
      // 关闭摄像头
      this.video.srcObject = null;
      window.stream.getTracks().forEach((track) => track.stop());
    },
    // 获取人脸照片
    getPhoto() {
      this.isdetected = "";
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let video = document.getElementById("video");
      this.context.drawImage(
        video,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      let dataUrl = this.canvas.toDataURL("image/jpeg", 1);
      this.imgbase64 = dataUrl.replace(/^data:image\/\w+;base64,/, "");

      // 开始人脸识别
      this.postFace();
    },
    // 初始化调用Token
    getToken() {
      this.PostAxios("faceGetToken", {}).then((res) => {
        this.access_token = res.data.access_token;
        window.sessionStorage.setItem("access_token", this.access_token);
        console.log(res);
      });
    },
    // 人脸验证
    postFace() {
      this.loding = "正在识别中……";
      this.PostAxios("faceFirm", {
          access_token: this.access_token,
          img: this.imgbase64,
        })
        .then((res) => {
          console.log(res);
          this.loding = "";
          if (res.data.error_code !== 0) {
            if (res.data.error_code == 223120) {
              this.$message.error("活体监测失败");
            }
          } else {
            if (res.data.result.user_list[0].score > 80) {
              this.$message.success("人脸识别成功");
              this.$router.push("/home");
            } else {
              this.$message.error("人脸识别失败,查不到");
            }
          }
        });
    },
    // 视频流启动
    getMediaStreamSuccess(stream) {
      window.stream = stream;
      this.video.srcObject = stream;
    },
    // 视频媒体流失败
    getMediaStreamError(error) {
      alert("视频媒体流获取错误" + error);
    },
  },
  mounted() {
    this.video = this.$refs.videoDom;
    this.canvas = this.$refs.canvasDOM;

    //初始化获取tonken
    this.getToken();
  },
  destroyed() {},
};
</script>

<style scoped>
.findFace {
  width: 100vw;
  height: 100vh;
  background-color: #072778;
}
.user-icon {
  position: relative;
  top: 10vh;
  margin: 0 auto;
  width: 40vw;
  height:50vh;
}
.button {
  width: 20vw;
  height: 50px;
  line-height: 50px;
  margin: 30vh auto;
  background-color: skyblue;
  color: white;
  text-align: center;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%);
  top: 50%;
  left: 50%;
}
video,
canvas {
  position: absolute;
}
.findFaceFOnt{
  font-size: 20px;
  font-weight: 600;
  color: aliceblue;
  z-index: 100;
}
</style>