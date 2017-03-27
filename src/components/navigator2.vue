<template>
  <div style="background-color: rgb(15,15,15) ;width: 100%;height: 80px;position: fixed;z-index: 999999999;">
    <div id="nevigator-bottom">
      <div id="icon" style="background-color:;width:30%;height:50px;margin-left: 1%;float: left;position: relative">
        <router-link to="/">
          <img src="/static/pic/Logo-Music.png" height="130%"></router-link></div>
      <div style="position: relative;float:left;width: 50%;padding-top:18px;margin-left: 5%"id="note">
        <el-menu  style="background-color: transparent;width: 100%" mode="horizontal"  ><router-link to="/">
          <el-menu-item style="background-color: transparent;color: aliceblue;font-family:'Lucida Grande';font-size: 1.5em;" index="1">主页</el-menu-item></router-link>
          <el-menu-item style="background-color: transparent;color: aliceblue;font-family:'Lucida Grande';font-size: 1.5em;margin-left:10%" index="2"><router-link to="/#rank-line">排行榜</router-link></el-menu-item>
        </el-menu>
      </div>
      <div id="search-holder" style=";auto;height: 50px;width:12%;padding-top: 33px;position: relative;float: right">
        <form @submit.prevent="enterkey(newinputkey)">
        <el-input    icon="search" id="pht" size="small" :placeholder="phtext" v-model="newinputkey" style="float: left;width: 60%;height:30px;margin-left: 15%;position: relative;float: left"></el-input>
          </form>
        <!--{{newinputkey}}-->
      </div>
      <div id="register" style="background-color: aliceblue;float: right;width:5%"></div>
    </div>
  </div>
</template>
<script >
  import {mapMutations} from 'vuex'
  export default {
    name: 'nevigator',
    data () {
      return {
        phtext:"歌名",
        newinputkey:""
      }
    },
    methods:{
      enterkey(d){
          var k=1;
        this.$store.commit('UPDATE',{k,d});
//        this.$router.push({path:'/result'})
        return false
      },
    }
  }
</script>
<style>
  #note a:link{text-decoration: none;}
  #note a:visited{text-decoration: none;}
  #note a:hover{text-decoration: none;}
  #note a:active{text-decoration: none;}
</style>




