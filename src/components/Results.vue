<template>
  <div>
    <p>This is the results page </p>
    {{msg}}
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
