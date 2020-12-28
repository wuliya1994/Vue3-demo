<template>
    <h1>加载中 {{loading}}</h1>
</template>

<script>
  import {ref, onUnmounted} from 'vue'
  export default {
    name: 'Loading',
    setup () {
      const loading = ref('')
      const tip = '⠁⠃⠇⠃'
      let i = 0
      const time = setInterval(() => {
        loading.value = tip[i]
        i = (i+1) % 4
      },350)
      onUnmounted(() => {
        clearInterval(time)
      })
      return {loading}
    }
  }
</script>

<style scoped>

</style>