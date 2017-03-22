<template>
  <div style="width:100%;position: relative">
    <navigator></navigator>
    <div style="width: 80%;height:1300px;position: relative;background-color:;margin-left: auto;margin-right: auto;padding-top: 90px">
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
    </div>


    <footbar></footbar>
    {{option}}
    {{keyword}}
    {{num}}
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
//              {name:'',
//            artist: '',
//            album: '',
////            quality: '',
////            date:'',
//          }],
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
        submitData(){
          this.$http.get('/api/search/song/qq?key='+this.keyword+"&limit=100").then(res=>{
//            this.infolist.amount=res.data["total"];
//            this.infolist.songlist=res.data["songList"];
            var list=res.data["songList"];
            for (var i=0;i<list.length;i++){
                var a={name:"",artist:"",album:""};
                a.name=list[i]["name"];
                a.artist=list[i]["artists"][0]["name"]
                a.album=list[i]["album"]["name"]
               this.tableData.push(a);

            }
//            console.log(list.length)
          })
        },
//        parseinfo(infolist){
//            for (var i=0; i<lengthOf(infolist) ;i++){
//
//            }
//        }
      }

  }
</script>

