
<template>
  <div id="app">
    <router-view keep-alive>
    </router-view>
  </div>
</template>

<script>
  import store from './store' // import 刚创建的 store
export default {
  store: store
}
</script>

<style>

</style>
