<template>
    <div>
        <quick :data="arrData"></quick>
    </div>
</template>

<script>
    import quick from './quick'
export default {
  name: 'FragmentDemo',
  components: {
    quick
  },
  data() {
    return {
      arrData: [4,2,15,4,66,7,1]
    }
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
