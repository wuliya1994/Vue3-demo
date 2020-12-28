<template>
<quick v-if="left.length" :data="left"></quick>
<li>{{center}}</li>
<quick v-if="right.length" :data="right"></quick>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'quick',
  props: {
    data: Array
  },
  setup (props) {
    const center = ref(props.data[0])
    const left = []
    const right = []
    props.data.slice(1).forEach(item => {
      item > center.value ? right.push(item) : left.push(item)
    })
    return {center, left, right}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
