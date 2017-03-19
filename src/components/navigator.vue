<template>
  <div style="background-color: black;width: 100%;height: 80px;position: fixed;z-index: 999;">
    <div id="nevigator-bottom">
      <div id="icon" style="background-color: aqua;width:8%;height:50px;margin-left: 1%;margin-top: 0.8%;float: left;">logo</div>
      <div style="color: aliceblue;float: left"id="note">插入动画背景</div>
      <div id="register" style="background-color: aliceblue;float: right;width:5%">reg</div>
    </div>
  </div>
</template>
<script >
  export default {
    name: 'nevigator',
    data () {
      return {
        msg: 'Welcome to Your Music-Detective'
      }
    }
  }
</script>
