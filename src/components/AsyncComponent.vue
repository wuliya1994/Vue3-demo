<template>
    <h1>一个异步组件</h1>
</template>

<script>
  function sleep (time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }
  export default {
    name: 'AsyncComponent',
    props: {
      time: {
        type: String,
        require: true
      }
    },
    async setup (props) {
      await sleep(props.time)
    }
  }
</script>

<style scoped>

</style>