<template>
  <div style="width:100%;position: relative">
    <keep-alive>
    <navigator2>

    </navigator2>
    </keep-alive>
    <div id="player-bottom" style="position:fixed;width: 26%;height:40px;z-index:9999;margin-left: 59%;padding-top: 10px;">
      <div id='player-show' style="position: relative;float: left; width:100%;">
        <img id="alcv" :src=playercover style="width:60px;height:60px;float: left">
        <div style="width: 60%;position: relative;float: left">
          <div style="width: 100%;font-family: 'Lucida Grande';color: #c6cfda;font-size: 0.8em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin-left: 5%">正在播放：{{playinfo}}</div>

          <audio id="player" loop controls autoplay style="float: left;margin-left: 10px;margin-top:10px">
            <source :src=listenurl type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      </div></div>


    <div style="width: 80%;min-height:920px;position: relative;background-color:;margin-left: auto;margin-right: auto;padding-top: 120px;font-family:gothic, poppin,'PingFang SC',Tahoma,Arial,\5FAE\8F6F\96C5\9ED1,sans-serif;;">
      <div>
        <el-tabs type="border-card"  v-model="tagname" @tab-click="handleClick">
          <el-tab-pane label="QQ音乐" >
            <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
              <el-table-column
                label="封面">
                <template scope="scope">
                  <a :href="scope.row.sitelink" target="_blank"><img :src=scope.row.album width="80px" height="80px"></a>
                </template>
                <!--<img scr=props.row.album>-->
              </el-table-column>
              <el-table-column
                label="专辑"
                width="400px">
                <template scope="scope">
                  <a :href="scope.row.sitelink" target="_blank">{{scope.row.name}}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="artist"
                label="歌手"
                width="300px">
              </el-table-column>

            </el-table></el-tab-pane>
          <el-tab-pane label="虾米音乐">
            <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
              <el-table-column
                label="封面">
                <template scope="scope">
                  <a :href="scope.row.sitelink" target="_blank"><img :src=scope.row.album width="80px" height="80px"></a>
                </template>
                <!--<img scr=props.row.album>-->
              </el-table-column>
              <el-table-column
                label="专辑"
                width="400px">
                <template scope="scope">
                  <a :href="scope.row.sitelink" target="_blank">{{scope.row.name}}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="artist"
                label="歌手"
                width="300px">
              </el-table-column>

            </el-table></el-tab-pane>
          <el-tab-pane label="网易云音乐">
            <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
              <el-table-column
                prop="album"
                label="封面">
                <template scope="scope">
                  <img :src=scope.row.album width="80px" height="80px">
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="专辑"
                width="400px">
              </el-table-column>
              <el-table-column
                prop="artist"
                label="歌手"
                width="300px">
              </el-table-column>
            </el-table></el-tab-pane>
          </el-tab-pane>
          <el-tab-pane label="Spotify">
            <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
              <el-table-column
                prop="album"
                label="封面">
                <template scope="scope">

                  <img :src=scope.row.album width="80px" height="80px">

                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="专辑"
                width="400px">
              </el-table-column>
              <el-table-column
                prop="artist"
                label="歌手"
                width="300px">
              </el-table-column>
            </el-table></el-tab-pane>
          </el-tab-pane>
          <!--<el-tab-pane label="iTunes">-->
            <!--<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">-->
              <!--<el-table-column-->
                <!--prop="album"-->
                <!--label="封面">-->
                <!--<template scope="scope">-->
                  <!--<img :src=scope.row.album width="80px" height="80px" >-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--prop="name"-->
                <!--label="专辑"-->
                <!--width="400px">-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--prop="artist"-->
                <!--label="歌手"-->
                <!--width="300px">-->
              <!--</el-table-column>-->
            <!--</el-table></el-tab-pane>-->
          </el-tab-pane>

        </el-tabs>
      </div>

      <p></p>
      <p></p>
      <div style="margin-left: auto;margin-right: auto;position: relative;width: 240px" v-if=ready>
        <el-pagination
          small
          layout="prev, pager, next"
          :total=total
          :current-page=page
          @current-change="pagecChange"
        >
        </el-pagination>
      </div>
    </div>

    <footbar></footbar>
    <!--{{listenurl}}-->
    <!--{{site}}-->
    <!--{{qqpage}}-->
    <!--{{xiamipage}}-->
    <!--{{option}}-->
    <!--{{keyword}}-->
    <!--{{num}}-->
    <!--{{$store.state.count}}-->
    <!--{{playercover}}-->
  </div>

</template>
<script>
  import {mapState} from 'vuex';

  export default {
    created() {

      document.title = this.$route.name;
      if(this.keyword!="")
      {this.submitData();}
    },
    name: 'album',
    data () {
      return {
        tableData:[],
        total:0,
        page:1,
        qqpage:1,
        xiamipage:1,
        ready:false,
        loading: false,
        num:0,
        tagname: '0',
        site:'qq',
        type: 'song',
        listType:'songList',
        listenurl:"",
        playercover:"./static/pic/album.png",
        playinfo:""

      }
    },
    watch: {
      keyword: function () {
        this.tagname='0',
          this.type='song',
          this.listType='songList',
          this.site='qq'
        this.page=1
        this.qqpage=1
        this.xiamipage=1
        this.$router.push({path:'/result'})
      }
    },


    computed: mapState({
        keyword: function(state) {
          return state.keywords;
        }, option: function(state) {
          return state.option;
        },listenurl: function(state) {
        return state.url;
      }}

    ),
    methods:{
      handleClick(){
        switch(this.tagname){

          case "0": this.site="qq";this.page=this.qqpage;
            break;
          case "1": this.site="xiami";this.page=this.xiamipage;
            break;
        }
        this.submitData()
      },
      pagecChange(val){
        this.changeType()
        switch (this.site){
          case 'qq': this.qqpage=val;break;
          case 'xiami': this.xiamipage=val;break;
          default:console.log("page error")
        }
        this.loading=true
        this.page=val
        this.$http.get('/api/search/'+this.type+'/'+this.site+'?key='+this.keyword+"&limit=15&page="+this.page).then(res=>{

          this.total=res.data["total"];
          var list=res.data[this.listType];
          this.tableData=[]
          console.log(list)
          this.pasrseData(list)

        })
      },
      submitData(){
        this.changeType()
        this.loading=true;
//          console.log(this.type+'/'+this.site+'?key='+this.keyword+"&limit=15&page="+this.page)
        this.$http.get('/api/search/'+this.type+'/'+this.site+'?key='+this.keyword+"&limit=15&page="+this.page).then(res=>{
//            console.log(res)
          this.total=res.data["total"];
          var list=res.data[this.listType];
          var iszero=this.pasrseData(list);
          if (iszero){
            this.loading=false
          }

        }).catch(e => {
          this.loading=false
        })
      },
      changeType(){
        switch(this.option){


          case 1: this.type="song";this.listType='songList';
            break;
          case 2:this.type="song";this.listType='songList';
            break;
          case 3:this.type="album";this.listType='albumList';
            break;
          case 4:this.type="playlist";this.listType='playList';
            break;
          default:console.log("error type")
        }


      },
      pasrseData(list){
        if (list.length==0){
          return true
        }
        this.tableData=[]
//            alert(this.type)

//              console.log(list)
          for (var i = 0; i < list.length; i++) {
            if (list[i]["name"][0] == '&' && list[i]["name"][1] == '#' || list[i]["artist"]["name"][0] == '&' && list[i]["artist"]["name"][1] == '#' )
              continue
            var a = {name: "", artist: "", picurl: "",sitelink:"",id:""};
            a.name = list[i]["name"]
//                console.log(a.name)
            a.artist = list[i]["artist"]["name"]
            a.album = list[i]["coverSmall"]
            a.id=list[i]["id"]
            if(this.site=='qq'){
              a.sitelink='https://y.qq.com/n/yqq/album/'+a.id+'.html'
            }else {
              a.sitelink='http://www.xiami.com/album/'+a.id

            }
            this.tableData.push(a);
            this.ready = true
            this.loading = false

          }

        return false
      },
      musicPlay(Murl,name,song,cover){
        this.$http.get('/api/get/'+this.type+'/'+this.site+'?id='+Murl).then(res=>{
          this.listenurl=res.body['url']
          this.playinfo=name+"-"+song;
          this.playercover=cover;
          console.log(cover)
          document.getElementById("player").load();
        }).catch(e => {
          console.log("error in murl")
        })
      },


    }

  }
</script>
<style scoped>
  a:link{text-decoration: none;color: #4c4c4c}
  a:visited{text-decoration: none;}
  a:hover{text-decoration: underline;}
  a:active{text-decoration: none;}

  #alcv:hover
  {
    -webkit-box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);
    -moz-box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);
    box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }

  audio:hover, audio:focus, audio:active
  {
    -webkit-box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);
    -moz-box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);
    box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }


  audio,#alcv
  {
    -webkit-transition:all 0.2s linear;
    -moz-transition:all 0.2s linear;
    -o-transition:all 0.2s linear;
    transition:all 0.2s linear;
    -moz-box-shadow: 2px 2px 4px 0px #006773;
    -webkit-box-shadow:  2px 2px 4px 0px #006773;
    box-shadow: 2px 2px 4px 0px #006773;
    -moz-border-radius:7px 7px 7px 7px ;
    -webkit-border-radius:7px 7px 7px 7px ;
    border-radius:7px 7px 7px 7px ;
  }
</style>

