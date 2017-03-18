<template>
  <div style="width:100%">
    <navigator></navigator>
    <div id="middle-bottom" style="width:100%;height: 500px;background-color: blueviolet;margin-top: 80px;padding-top: 100px">
      <div id="search-holder" style=";margin-left:25%;height: 60px;width:50%;padding-top: 200px;">

        <el-input
          size="large"
          placeholder=""
          v-model="input2" style="float: left;width: 80%;height:100px;margin-left: 5%">
        </el-input>
        <el-button type="primary" icon="search" style="height: 42px;margin-left:1%">搜索</el-button>

      </div>
    </div>
    <div id="rank-bottom" style="width: 100%;height: 800px;background-color: cornflowerblue"></div>
    <div id="foot=bottom" style="width: 100%;height: 200px;background-color: crimson"></div>
      <!--<p>This is the show page(Homepage)</p>-->
    <!--<el-button type="primary" icon="delete"></el-button>-->
    <!--{{msg}}-->
  </div>
</template>
<script >
  export default {
    name: 'show',
    data () {
      return {
        msg: 'Welcome to Your Music-Detective'
      }
    }
  }

</script>

<style>

</style>
