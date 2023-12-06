<template>
  <ul class="slide-box">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>
<script>
export default {
  name: 'bgAnimation'
}
</script>
<style>
.slide-box {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 134, 179, .5);
  top: 0;
  left: 0;
  z-index: 0;
}

.slide-box li {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  color: transparent;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: none;
  opacity: 0;
  z-index: 0;
  -webkit-backface-visibility: hidden;
  -webkit-animation: imgAnimation 48s linear infinite 0s;
  -moz-animation: imgAnimation 48s linear infinite 0s;
  -o-animation: imgAnimation 48s linear infinite 0s;
  -ms-animation: imgAnimation 48s linear infinite 0s;
  animation: imgAnimation 48s linear infinite 0s;
}

.slide-box li:nth-child(1) {
  background-image: url(../../assets/img/bg-4.jpg);
}

.slide-box li:nth-child(2) {
  background-image: url(../../assets/img/bg-5.jpg);
  animation-delay: 12s;
}

.slide-box li:nth-child(3) {
  background-image: url(../../assets/img/bg-2.jpg);
  animation-delay: 24s;
}

.slide-box li:nth-child(4) {
  background-image: url(../../assets/img/bg-4.jpg);
  animation-delay: 36s;
}

@keyframes imgAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }

  8% {
    opacity: 1;
    transform: scale(1.1);
    animation-timing-function: ease-out;
  }

  17% {
    opacity: 1;
    transform: scale(1.2);
  }

  25% {
    opacity: 0;
    transform: scale(1.3);
  }

  100% {
    opacity: 0;
  }
}
</style>
