<template>
  <div style="width:100%;position: relative">
    <navigator></navigator>
    <div id="middle-bottom" style="width:100%;height:800px;background-color:;padding-top:80px;position: relative;overflow: hidden">
      <video autoplay muted loop style="width:100%;z-index: -999;position:absolute;" poster="/static/Cheer-Up/Snapshots/Cheer-Up.jpg">
        <source src="/static/Cheer-Up/MP4/Cheer-Up.mp4">
      </video>
      <div id="choice" style=";margin-left:auto;margin-right:auto;height: 40px;width:50%;padding-top: 230px;position: relative;">
        <el-radio-group v-model="radio" style="width:100%;margin-right: auto;margin-left: auto" @change="changeph">
          <el-radio :label="1"style="width:20% ;position:relative;float: left;margin-left: 20%;font-family: 'Lucida Grande';color: beige;">歌名 </el-radio>
          <el-radio :label="2"style="width:20%;position:relative;float: left;font-family: 'Lucida Grande';color: beige;">歌手 </el-radio>
          <el-radio :label="3"style="width:20%;position:relative;float: left;font-family: 'Lucida Grande';color: beige;">专辑 </el-radio>
          <!--<el-radio :label="4"style="width:20%;position:relative;float: left;font-family: 'Lucida Grande';color: beige;">歌单 </el-radio>-->
        </el-radio-group>
      </div>
      <div id="search-holder" style=";margin-left:auto;margin-right:auto;height: 50px;width:60%;padding-top: 0px;margin-top: 80px">
        <form @submit.prevent=enterkey(radio,inputkey)>
        <el-input id="pht" size="large" :placeholder="phtext" v-model="inputkey" @keyup.enter='alert("s")' style="float: left;width: 60%;height:100px;margin-left: 15%;position: relative"></el-input>
        </form>
          <div v-if="radio!=3">
        <router-link to="/result">
          <el-button type="primary" icon="search" style="width:10%;height: 42px;margin-left:1%;position:relative;float: left;font-size: 0.8em;text-align: center" @click=handleClick(radio,inputkey)>搜索</el-button>
        </router-link></div>
        <div v-else>
          <router-link to="/album">
            <el-button type="primary" icon="search" style="width:10%;height: 42px;margin-left:1%;position:relative;float: left;font-size: 0.8em;text-align: center" @click=handleClick(radio,inputkey)>搜索</el-button>
          </router-link></div>

      </div>
      <div id="warn" style="width:10%;margin-left: auto;margin-right: auto">
      <el-alert
        title="请输入……"
        type="warning"
        show-icon
        style="display: none">
      </el-alert>
      </div>
      <!--<div id="rankanchor" height="1px"></div>-->
    </div>

    <div id="rank-bottom" style="width: 100%;height: 720px; overflow: hidden;">
      <img style="width: 100%;height: 720px;position: absolute;z-index: -999" src="/static/pic/concert-bg.jpg">
      <div id="rank-line"style="width: 100%;height: 100px;margin-left:auto;margin-right: auto;padding-top: 50px;text-align: center;font-size: 2em;font-family: 'Lucida Grande';font-weight:bold;color: beige;background-color: darkslateblue;opacity: 0.7">
        排 行 榜
        <!--{{ infolist.songlist["album"]["cover"] }}-->
      </div>
      <div id="rank-list-bottom" style="background-color: azure;width: 100%;height: 750px%;position: relative;">
        <rank-list picurl="/static/pic/billboard-logo.jpg" pictitle="Billboard" :info=rank1 style="background-color: rgba(127,255,212, 0.7)"   ></rank-list>
        <rank-list picurl="/static/pic/Logo-HitFM.jpg" pictitle="HitFM"  :info=rank2 style="background-color: rgba(233, 150, 122, 0.7)"  ></rank-list>
        <rank-list picurl="/static/pic/Music-Charts.jpg" pictitle="UK榜" :info=rank3 style="background-color: rgba(72, 90, 139, 0.7)" ></rank-list>
        <rank-list picurl="/static/pic/1481781608605_.png" pictitle="中国top排行榜" :info=rank4 style="background-color: rgba(200,200,200, 0.7)"></rank-list>
      </div>

    </div>

    <footbar></footbar>
    <!--<p v-for="id of infolist.songlist">-->
<!--{{t}}-->
      <!--&lt;!&ndash;{{id["album"]["name"]}}&ndash;&gt;-->

    <!--</p>-->


  </div>

</template>
<script src="node_modules/vue-resource/dist/vue-resource.js"></script>
<script >

  import {mapMutations} from 'vuex'
//  var data={}
  export default {




    created() {
      document.title = this.$route.name

    },
    name: 'show',
    data () {
      return {
          msg:1,
         radio:1,
         phtext:"请输入歌名",
         inputkey:"",
        showornot:"none",

          rank1: [{
          index:1,
          song: 'Shape Of You',
          name: 'Ed Sheeran',
        },
          {

            index:2,
            song: 'That\'s What I Like',
            name: 'Bruno Mars',
          },
          {

            index:3,
            song: 'Bad and Boujee (Explicit) ',
            name: 'Migos',
          }
        ],
        rank2: [{
          index:1,
          song: 'Shape Of You',
          name: 'Ed Sheeran',
        },
          {

            index:2,
            song: 'That\'s What I Like',
            name: 'Bruno Mars',
          },
          {

            index:3,
            song: 'Bad and Boujee (Explicit) ',
            name: 'Migos',
          }
        ],
        rank3: [{
          index:1,
          song: 'Shape Of You',
          name: 'Ed Sheeran',
        },
          {

            index:2,
            song: 'That\'s What I Like',
            name: 'Bruno Mars',
          },
          {

            index:3,
            song: 'Bad and Boujee (Explicit) ',
            name: 'Migos',
          }
        ],
        rank4: [{
          index:1,
          song: 'Shape Of You',
          name: 'Ed Sheeran',
        },
          {

            index:2,
            song: 'That\'s What I Like',
            name: 'Bruno Mars',
          },
          {

            index:3,
            song: 'Bad and Boujee (Explicit) ',
            name: 'Migos',
          }
        ]

      }
    },
    methods:{
      enterkey(k,d){
        this.$store.commit('UPDATE',{k,d});
        if (k!=3){
        this.$router.push({path:'/result'})}
        else {
          this.$router.push({path:'/album'})}

        }
      ,
      handleClick(k,d) {
        this.$store.commit('UPDATE',{k,d});
//        alert(k+d)
      },
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
        },

//        submitData(){
//          this.$http.get('/api/search/song/qq?key='+this.inputkey+"&limit=100").then(res=>{
//             this.infolist.amount=res.data["total"];
//             this.infolist.songlist=res.data["songList"];
//             console.log(this.infolist.songlist)
//
//          })
//        }
//      parseSongInfo(infolist){
//
//      }

    }

  }

</script>





