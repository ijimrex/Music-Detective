<template>
  <div style="width:100%">
    <navigator></navigator>
    <div id="middle-bottom" style="width:100%;height: 400px;background-color: blueviolet;margin-top: 80px;padding-top: 100px;position: relative">
      <div id="choice" style=";margin-left:auto;margin-right:auto;height: 40px;width:50%;padding-top: 80px;position: relative">
        <el-radio-group v-model="radio" style="width:100%;margin-right: auto;margin-left: auto">
          <el-radio :label="3"style="width:20% ;position:relative;float: left;margin-left: 20%">歌名 </el-radio>
          <el-radio :label="6"style="width:20%;position:relative;float: left">歌手 </el-radio>
          <el-radio :label="9"style="width:20%;position:relative;float: left">专辑 </el-radio>
        </el-radio-group>
      </div>
      <div id="search-holder" style=";margin-left:auto;margin-right:auto;height: 50px;width:60%;padding-top: 0px;">
        <el-input id="test" size="large" placeholder="" v-model="input2" style="float: left;width: 60%;height:100px;margin-left: 15%;position: relative"></el-input>
        <router-link to="/result"> <el-button type="primary" icon="search" style="height: 42px;margin-left:1%;position:relative;float: left">搜索</el-button></router-link>
      </div>
    </div>
    <div id="rank-bottom" style="width: 100%;height: 800px;background-color: cornflowerblue">
      <div id="rank-line"style="width: 50%;height: 50px;margin-left:auto;margin-right: auto;text-align: center;font-size: 2em">
        音乐榜
      </div>
      <div id="rank-list-bottom" style="background-color: azure;width: 100%;height: 100%;position: relative;">
        <rank-list></rank-list>
        <rank-list></rank-list>
        <rank-list></rank-list>
        <rank-list></rank-list>
      </div>


    </div>
    <div id="foot=bottom" style="width: 100%;height: 200px;background-color: crimson"></div>

  </div>
</template>
<script >
  export default {
    name: 'show',
    data () {
      return {
          msg:1,
         radio:"",
         phtext:""

      }
    },
    methods:{

    }

  }

</script>

<style>

</style>
