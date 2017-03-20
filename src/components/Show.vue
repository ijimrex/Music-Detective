<template>
  <div style="width:100%;position: relative">
    <navigator></navigator>
    <div id="middle-bottom" style="width:100%;height: 800px;background-color:;padding-top:80px;position: relative;overflow: hidden">
      <video autoplay muted loop style="width:100%;z-index: -999;position:absolute;" poster="/static/Cheer-Up/Snapshots/Cheer-Up.jpg">
        <source src="/static/Cheer-Up/MP4/Cheer-Up.mp4">
      </video>
      <div id="choice" style=";margin-left:auto;margin-right:auto;height: 40px;width:50%;padding-top: 230px;position: relative;">
        <el-radio-group v-model="radio" style="width:100%;margin-right: auto;margin-left: auto" @change="changeph">
          <el-radio :label="1"style="width:20% ;position:relative;float: left;margin-left: 20%;font-family: 'Lucida Grande';color: beige;">歌名 </el-radio>
          <el-radio :label="2"style="width:20%;position:relative;float: left;font-family: 'Lucida Grande';color: beige;">歌手 </el-radio>
          <el-radio :label="3"style="width:20%;position:relative;float: left;font-family: 'Lucida Grande';color: beige;">专辑 </el-radio>
        </el-radio-group>
      </div>
      <div id="search-holder" style=";margin-left:auto;margin-right:auto;height: 50px;width:60%;padding-top: 0px;margin-top: 80px">
        <el-input id="pht" size="large" :placeholder="phtext" v-model="input" style="float: left;width: 60%;height:100px;margin-left: 15%;position: relative"></el-input>
        <router-link to="/result"> <el-button type="primary" icon="search" style="width:10%;height: 42px;margin-left:1%;position:relative;float: left;font-size: 0.8em;text-align: center">搜索</el-button></router-link>
      </div>
    </div>
    <div id="rank-bottom" style="width: 100%;height: 720px; overflow: hidden;">
      <img style="width: 100%;height: 720px;position: absolute;z-index: -999" src="/static/pic/concert-bg.jpg">
      <div id="rank-line"style="width: 100%;height: 100px;margin-left:auto;margin-right: auto;padding-top: 50px;text-align: center;font-size: 2em;font-family: 'Lucida Grande';font-weight:bold;color: beige;background-color: darkslateblue;opacity: 0.7">
        排 行 榜
      </div>
      <div id="rank-list-bottom" style="background-color: azure;width: 100%;height: 750px%;position: relative;">
        <rank-list picurl="/static/pic/billboard-logo.jpg" pictitle="Billboard" style="background-color: aquamarine;opacity: 0.5" ></rank-list>
        <rank-list picurl="/static/pic/Logo-HitFM.jpg" pictitle="HitFM"style="background-color: darksalmon;opacity: 0.5" ></rank-list>
        <rank-list picurl="/static/pic/Music-Charts.jpg" pictitle="UK榜"style="background-color: darkslateblue;opacity: 0.5"></rank-list>
        <rank-list picurl="/static/pic/1481781608605_.png" pictitle="中国top排行榜"style="background-color: antiquewhite;opacity: 0.5"></rank-list>
      </div>

    </div>

    <footbar></footbar>

  </div>

</template>
<script >
  export default {
    name: 'show',
    data () {
      return {
          msg:1,
         radio:1,
         phtext:"请输入歌名",
         input:"",

      }
    },
    methods:{
        changeph(){
          switch (this.radio) {
            case 1: {this.phtext="请输入歌名";
            break}
            case 2: {this.phtext="请输入歌手";
            break}
            case 3: {this.phtext="请输入专辑";
            break}
            default: this.phtext="ERROR";
          }

        }

    }

  }

</script>





