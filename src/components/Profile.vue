<template>
  <div>
    <p>This is the Profile page</p>
    {{msg}}
  </div>
</template>
<script>
  export default {
    name: 'profile',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
