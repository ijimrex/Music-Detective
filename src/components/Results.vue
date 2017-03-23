<template>
  <div style="width:100%;position: relative">
    <navigator></navigator>
    <div style="width: 80%;min-height:900px;position: relative;background-color:;margin-left: auto;margin-right: auto;padding-top: 90px;font-family: poppin,'PingFang SC',Tahoma,Arial,\5FAE\8F6F\96C5\9ED1,sans-serif;;">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
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
        <!--<el-table-column-->
          <!--prop="quality"-->
          <!--label="音质"><a href="a"></a>-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="date"-->
          <!--label="发行时间">-->
        <!--</el-table-column>-->
      </el-table>
      <p></p>
      <p></p>
        <div style="margin-left: auto;margin-right: auto;position: relative;width: 240px" v-if=ready>
        <el-pagination
          small
          layout="prev, pager, next"
          :total=total
          :current-page=page
          @current-change="handleCurrentChange"
          >
        </el-pagination>
        </div>
    </div>



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
          ready:false,


        num:0,
//        tableData: [{
//          name: '高尚',
//          artist: '薛之谦',
//          album: '《高尚》',
//          quality: '320k',
//          date:'2017',
//        },{
//          name: '夜曲',
//          artist: '周杰伦',
//          album: '《十一月的肖邦》',
//          quality: '无损',
//          date:'2005'
//        },
//        ],

        infolist:{
          amount : "",
          songlist: [{
            songid:"",
            songname:"",
            needpay: "",
            artists:[{
              name: "",
              id:""
            }],
            album:{
              name:""
            }
          }]
        }
      }
    },

    computed: mapState({
      keyword: function(state) {
        return state.keywords;
      }, option: function(state) {
          return state.options;
        }
      }

      ),
      methods:{
        handleCurrentChange(val){
          this.page=val
          this.$http.get('/api/search/song/qq?key='+this.keyword+"&limit=30&page="+this.page).then(res=>{
            this.total=res.data["total"];
            var list=res.data["songList"];
            this.tableData=[]
            console.log(list)
            for (var i=0;i<list.length;i++){
              var a={name:"",artist:"",album:""};
              a.name=list[i]["name"];
              a.artist=list[i]["artists"][0]["name"]
              a.album=list[i]["album"]["name"]
              this.tableData.push(a);


            }

          })
        },
        submitData(){
          this.$http.get('/api/search/song/qq?key='+this.keyword+"&limit=100$page="+this.page).then(res=>{
              this.total=res.data["total"];
            var list=res.data["songList"];
            for (var i=0;i<list.length;i++){
                var a={name:"",artist:"",album:""};
                a.name=list[i]["name"];
                a.artist=list[i]["artists"][0]["name"]
                a.album=list[i]["album"]["name"]
               this.tableData.push(a);
              this.ready=true

            }

          })
        },

      }

  }
</script>

