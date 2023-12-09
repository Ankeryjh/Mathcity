<template>
  <div class="hello">
    <br><br>
    <input type="file" capture='camera' accept='image/*'>
    <br><br>
    <button @click="postFace()">上传人脸识别库</button>
    
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        access_token: '',
        imgbase64: ''
      }
    },
    methods: {
      // 初始监听图片选择
      initListenMsg(){
        var inputs = document.querySelectorAll('input[type=file]');
        var _this = this

        inputs[0].onchange = function() {
          var file = document.querySelector('input').files[0];
          var reader = new FileReader();
           // 文件读取成功完成时触发
          reader.onload = function(e){
            // onload事件的回调函数接受一个事件对象，该对象的target.result就是文件的内容
            _this.imgbase64 = e.target.result.replace(/^data:image\/\w+;base64,/, "");
          };
          reader.readAsDataURL(file);
        }
      },
      // 初始化调用Token
      getToken(){
        this.PostAxios('faceGetToken',{}).then((res)=>{
          this.access_token = res.data.access_token
        })
      },
      // 添加人脸
      postFace(){
        this.PostAxios('addFace',{
          access_token: this.access_token,
          img: this.imgbase64
        }).then((res)=>{
           console.log(res)
          if(res.data.error_code == 0){
           
            alert('上传百度云AI人脸库管理成功')
          }else{
            alert('人脸已存在,请勿重复添加')
          }
        })
      },
    },
    mounted() {
      this.initListenMsg();
      this.getToken();
    },

  }
</script>