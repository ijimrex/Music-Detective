<template>
  <div style="width:100%;position: relative">
    <navigator></navigator>
    <div style="width: 80%;height:1000px;position: relative;background-color: blue;margin-left: auto;margin-right: auto;padding-top: 90px">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="歌名"
          width="200px">
        </el-table-column>
        <el-table-column
          prop="artist"
          label="歌手"
          width="180px">
        </el-table-column>
        <el-table-column
          prop="album"
          label="专辑">
        </el-table-column>
        <el-table-column
          prop="quality"
          label="音质"><a href="a"></a>
        </el-table-column>
        <el-table-column
          prop="date"
          label="发行时间">
        </el-table-column>
      </el-table>
    </div>

    <img src="../../static/pic/B1.png"><img src="Billboard1.png" height="300" width="400"/>

    <footbar></footbar>
  </div>

</template>
<script>
  export default {
    name: 'results',
    data () {
      return {
        tableData: [{
          name: '高尚',
          artist: '薛之谦',
          album: '《高尚》',
          quality: '320k',
          date:'2017'
        },{
          name: '夜曲',
          artist: '周杰伦',
          album: '《十一月的肖邦》',
          quality: '无损',
          date:'2005'
        },
        ]
      }
    }
  }
</script>

