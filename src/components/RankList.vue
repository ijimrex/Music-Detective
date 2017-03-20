<template>
  <div class="rank-list" style="background-color: aqua;width: 24%;height:750px;position: relative;float: left;margin-left: 0.85%">
    <div class="rank-list-head" style="width: 100%;height: 150px;background-color: blue;overflow: hidden">
      <div class="rank-list-pic"  style="width: 45%;height: 150px;background-color: coral;position: relative;float: left"><img :src="picurl" width="100%"height="150px"></div>
      <div class="ranl-list-title"  style="width: 50%;height:140px;background-color: brown;position: relative;float: left;margin-left: 3%;text-align: center;font-size: 1.5em;font-family: 'Lucida Grande'，'Microsoft YaHei','STXihei';padding-top: 30px">{{pictitle}}</div>
    </div>
    <div>
      <ul id="rank-content" class="listcontent">
        <li v-for="value in info">
          <a href="#" style="font-size: 1.5em"> {{ value }}</a>
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
//          info: {
//          FirstName: 'John',
//          LastName: 'Doe',
//          Age: 30
//        }
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
