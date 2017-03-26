<template>
  <div class="rank-list"  style="width: 24%;height:550px;position: relative;float: left;margin-left: 0.85%;text-overflow: ellipsis;white-space: nowrap;">
    <div class="rank-list-head" style="width: 100%;height: 150px;background-color:;overflow: hidden;z-index: 100">
      <div class="rank-list-pic"  style="width: 45%;height: 150px;background-color:;position: relative;float: left"><img :src="picurl" width="100%"height="150px"></div>
      <div class="ranl-list-title"  style="width: 50%;height:140px;background-color: ;position: relative;float: left;margin-left: 3%;text-align: center;font-size: 1.5em;font-family: 'Lucida Grande','Microsoft YaHei','STXihei';padding-top: 50px">{{pictitle}}</div>
    </div>
    <div style="width: 90%;margin:10px;text-align: center;">
      <ul id="rank-content" class="listcontent" style="color: #b3d0ef;list-style: none;"  >
        <li v-for="item in info" >
          <div style="width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"><a href="#" style="font-size: 1.3em;color: white "> {{item.index}} {{ item.song }}</a><br/>
            <a href="#" style="font-size: 1.1em;color: #d3d6d9;   "> {{item.name}}</a></div><br/>
        </li>
      </ul>
    </div>

  </div>
</template>
<script >


  export default {
    name: 'ranklist',
    props: ['picurl','pictitle','info'],
    data () {
      return {

//          picurl:"",
//          msg :"ds",

      }
    }
  }

</script>
<style>
  li a:link{text-decoration: none;}
  li a:visited{text-decoration: none;}
  li a:hover{text-decoration: underline;}
  li a:active{text-decoration: none;}
</style>
