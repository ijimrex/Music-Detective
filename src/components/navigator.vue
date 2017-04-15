<template>
  <div class="nevigator-bottom">
    <router-link to="/">
      <div class="icon"></div>
    </router-link>
    <div class="word-bottom">


        <div class="word" index="1"> <router-link to="/">主页</router-link></div>
        <div class="word" index="2"><a href="#rank-line">排行榜</a></div>
    </div>

  </div>

</template>
<script >
  export default {
    name: 'nevigator',
    data () {
      return {
        msg: 'Welcome to Your Music-Detective'
      }
    }
  }
</script>
<style>
  #note a:link{text-decoration: none;}
  #note a:visited{text-decoration: none;}
  #note a:hover{text-decoration: none;}
  #note a:active{text-decoration: none;}

  .nevigator-bottom{
    background-color: rgb(15,15,15) ;
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 999999999;
    padding: 10px;
  }
  .icon{
    /*width:30%;*/
    height:80%;
    margin-left: 1%;
    float: left;
    position: relative;
    content: url("/static/pic/Logo-Music.png") ;

  }
  .word-bottom{
    position: relative;
    float:left;
    width: 45%;
    margin-left: 1%;
    font-size: 1.2em;
    margin-left: 5%;
  }
  .word{
    ont-family:'Lucida Grande';
    font-size: 1.5em;
    float: left;
    width: 100px;
    height: 80px;
    color: aliceblue;
    margin-left: 10%;
  }
  .word:hover{ background-color: rgba( 138,43,226,0.5);
  }
  .word a:link{text-decoration:none;color: aliceblue}
  .word a:visited {text-decoration:none;color: aliceblue}
  .word a:active{text-decoration: none;color: aliceblue}
  .word a:hover{text-decoration: underline;color: aliceblue}



  @media screen and (max-width: 500px){
    .nevigator-bottom{
      background-color: rgb(15,15,15) ;
      width: 100%;
      height: 30px;
      position: fixed;
      z-index: 999999999;
      padding: 5px;
    }
    .icon{

      height:30px;
      margin-left: 1%;
      float: left;
      position: relative;
      display: none;


    }
    .word-bottom{
      position: relative;float:left;width: 70%;font-size: 0.8em;height: 40px;top: -5px;
    }
    .word{
      ont-family:'Lucida Grande';
      float: left;
      width: 100px;
      height: 40px;
      color: aliceblue;
      margin-left: 10%;
    }

  }

</style>
