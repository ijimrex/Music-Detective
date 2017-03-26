<template>
  <div style="width:100%;position: relative">
    <navigator2>

    </navigator2>

    <div style="width: 80%;min-height:920px;position: relative;background-color:;margin-left: auto;margin-right: auto;padding-top: 90px;font-family:gothic, poppin,'PingFang SC',Tahoma,Arial,\5FAE\8F6F\96C5\9ED1,sans-serif;;">
     <div v-if="type=='song'">
      <el-tabs type="border-card"  v-model="tagname" @tab-click="handleClick">
        <el-tab-pane label="QQ音乐" >
        <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
          <el-table-column
            prop="name"
            label="歌名"
            width="400px">
          </el-table-column>
          <el-table-column
            prop="artist"
            label="歌手"
            width="300px">
          </el-table-column>
          <el-table-column
            prop="album"
            label="专辑">
          </el-table-column>
        </el-table></el-tab-pane>
        <el-tab-pane label="虾米音乐">
          <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
            <el-table-column
              prop="name"
              label="歌名"
              width="400px">
            </el-table-column>
            <el-table-column
              prop="artist"
              label="歌手"
              width="300px">
            </el-table-column>
            <el-table-column
              prop="album"
              label="专辑">
            </el-table-column>
          </el-table></el-tab-pane>
        </el-tab-pane>
        <el-tab-pane label="网易云音乐">
          <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
            <el-table-column
              prop="name"
              label="歌名"
              width="400px">
            </el-table-column>
            <el-table-column
              prop="artist"
              label="歌手"
              width="300px">
            </el-table-column>
            <el-table-column
              prop="album"
              label="专辑">
            </el-table-column>
          </el-table></el-tab-pane>
        </el-tab-pane>
        <el-tab-pane label="Spotify">
          <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
            <el-table-column
              prop="name"
              label="歌名"
              width="400px">
            </el-table-column>
            <el-table-column
              prop="artist"
              label="歌手"
              width="300px">
            </el-table-column>
            <el-table-column
              prop="album"
              label="专辑">
            </el-table-column>
          </el-table></el-tab-pane>
        </el-tab-pane>
        <el-tab-pane label="iTunes">
          <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
            <el-table-column
              prop="name"
              label="歌名"
              width="400px">
            </el-table-column>
            <el-table-column
              prop="artist"
              label="歌手"
              width="300px">
            </el-table-column>
            <el-table-column
              prop="album"
              label="专辑">
            </el-table-column>
          </el-table></el-tab-pane>
        </el-tab-pane>

      </el-tabs>
     </div>
      <div v-else-if="type=='album'">
        <el-tabs type="border-card"  v-model="tagname" @tab-click="handleClick">
          <el-tab-pane label="QQ音乐" >
            <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
              <el-table-column
                prop="picurl"
                label="专辑">
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
          <el-tab-pane label="虾米音乐">
            <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
              <el-table-column
                prop="picurl"
                label="专辑">
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
          <el-tab-pane label="网易云音乐">
            <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
              <el-table-column
                prop="picurl"
                label="专辑">
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
                prop="picurl"
                label="专辑">
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
          <el-tab-pane label="iTunes">
            <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
              <el-table-column
                prop="picurl"
                label="专辑">
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
    <!--{{site}}-->
    <!--{{qqpage}}-->
    <!--{{xiamipage}}-->
    <footbar></footbar>
    <!--{{option}}-->
    <!--{{keyword}}-->
    <!--{{num}}-->
    <!--{{$store.state.count}}-->
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
    name: 'results',
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
//        tagname:1,
          tagname: '0',
          site:'qq',
          type: 'song',
        listType:'songList'
      }
    },

    computed: mapState({
      keyword: function(state) {
        return state.keywords;
      }, option: function(state) {
          return state.option;
        }
      }

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
          this.$http.get('/api/search/'+this.type+'/'+this.site+'?key='+this.keyword+"&limit=15&page="+this.page).then(res=>{

              this.total=res.data["total"];
            var list=res.data[this.listType];
            this.pasrseData(list);

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
//            alert(this.type)
            if (this.type=="song") {

              for (var i = 0; i < list.length; i++) {
                if (list[i]["name"][0] == '&' && list[i]["name"][1] == '#' || list[i]["artists"][0]["name"][0] == '&' && list[i]["artists"][0]["name"][1] == '#' || list[i]["album"]["name"][0] == '&' && list[i]["album"]["name"][1] == '#')
                  continue
                var a = {name: "", artist: "", album: ""};
                a.name = list[i]["name"]
                a.artist = list[i]["artists"][0]["name"]
                a.album = list[i]["album"]["name"]
                this.tableData.push(a);
                this.ready = true
                this.loading = false
              }
            }
            else if (this.type=="album"){
              console.log(list)
              for (var i = 0; i < list.length; i++) {
                if (list[i]["name"][0] == '&' && list[i]["name"][1] == '#' || list[i]["artist"]["name"][0] == '&' && list[i]["artist"]["name"][1] == '#' )
                  continue
                var a = {name: "", artist: "", picurl: ""};
                a.name = list[i]["name"]
                console.log(a.name)
                a.artist = list[i]["artist"]["name"]
                a.album = list[i]["coverSmall"]
                console.log(a)
                this.tableData.push(a);
                this.ready = true
                this.loading = false
              }

            }
        }

      }

  }
</script>

