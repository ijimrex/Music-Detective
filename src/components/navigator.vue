<template>
  <div style="background-color: rgb(15,15,15) ;width: 100%;height: 80px;position: fixed;z-index: 999;">
    <div id="nevigator-bottom">
      <div id="icon" style="background-color:;width:30%;height:50px;margin-left: 1%;float: left;position: relative">
        <img src="/static/pic/Logo-Music.png" height="130%"></div>
      <div style="position: relative;float:left;width: 50%;padding-top:18px;margin-left: 5%"id="note">
        <el-menu  style="background-color: transparent" mode="horizontal" >
          <el-menu-item style="background-color: transparent;color: aliceblue;font-family:'Lucida Grande';font-size: 1.5em;" index="1"><a href="#">主页</a></el-menu-item>
          <el-menu-item style="background-color: transparent;color: aliceblue;font-family:'Lucida Grande';font-size: 1.5em;margin-left:10%" index="2"><router-link to="/#rank-bottom">排行榜</router-link></el-menu-item>
        </el-menu>

      </div>
      <div id="register" style="background-color: aliceblue;float: right;width:5%"></div>
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
<style>
  #note a:link{text-decoration: none;}
  #note a:visited{text-decoration: none;}
  #note a:hover{text-decoration: none;}
  #note a:active{text-decoration: none;}
</style>
