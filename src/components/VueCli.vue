<template>
  <h1>Vue3 {{ items.length }} Components</h1>
  <h3> {{action}} 用时: {{time}}ms.</h3>
  <button @click="shuffle">shuffle</button>
  <table width="80%" style="margin: 0 auto;">
    <tr class="col-row" v-for="item in items" :key="item.id">
      <td class="col-md-1">kbl</td>
      <td class="col-md-1">kbl</td>
      <td class="col-md-1">kbl</td>
      <td class="col-md-1">kbl</td>
      <td class="col-md-1">kbl</td>
      <td class="col-md-1">kbl</td>
      <td class="col-md-1">{{item.label}}</td>
    </tr>
  </table>
</template>

<script>
  import {shuffle} from 'lodash'
  const total = 3000
  const items = []
  for(let i=0;i<total;i++) {
    items.push({
      id: i + 1,
      label: String(Math.random()).slice(0, 5)
    })
  }
  let s = window.performance.now()

  export default {
    name: 'VueCli',
    data () {
      return {
        total: total,
        items: items,
        time: 0,
        action: '表格加载'
      }
    },
    mounted () {
      this.time = window.performance.now() - s
    },
    methods: {
      shuffle () {
        this.action = 'Shuffle'
        this.items = shuffle(this.items)
        let s = window.performance.now()
        this.$nextTick(() => {
          this.time = window.performance.now() - s
        })
      }
    }
  }
</script>

<style scoped>
  .col-md-1{
    padding:6px 13px;
    border:1px solid #ddd;
    flex:1;
  }
  .col-row{
    display:flex;
    display: -webkit-flex;
    list-style: none;
    margin:0;
    padding:0
  }
  .col-row:nth-child(2n) {
    background-color: #f8f8f8;
  }
</style>
