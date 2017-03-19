<template>
  <div style="width:100%;position: relative">
    <navigator></navigator>
    <div style="width: 80%;height:1000px;position: relative;background-color: blue;margin-left: auto;margin-right: auto;padding-top: 90px">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>


    <footbar></footbar>
  </div>

</template>
<script>
  export default {
    name: 'results',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
