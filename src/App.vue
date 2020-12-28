<template>
  <div id="app">
    <router-link class="link" to="/VueCli">Vue3性能demo</router-link>
    <router-link class="link" to="/TodoMvcDemo">Todo demo</router-link>
    <router-link class="link" to="/SuspenseDemo">Sespence demo</router-link>
    <router-link class="link" to="/TeleportDemo" >传送 demo</router-link>
    <router-link class="link" to="/FragmentDemo">碎片 demo</router-link>
    <router-view/>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  setup () {
    const data = reactive([5,4,7,1,6,5,0,2,8])
    return {data}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .link {
    width: 80px;
    border:1px dashed dodgerblue;
    border-radius: 5px;
    margin-right: 10px;
  }
</style>
