<template>
  <h3>Reactive 学习</h3>
</template>

<script>
  import {effect, ref} from 'vue'
  export default {
    name: 'ReactiveDemo',
    setup () {
      let count = ref(0)
      effect(() => {
        console.log('数据变化了，count等于' + count.value)
      })
      setInterval(() => {
        count.value++
      }, 1000)
    }
  }
</script>

<style scoped>

</style>