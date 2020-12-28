<template>
    <div v-if="isOpen2" class="sub-dialog">
        <p>我是子dialog111的内容</p>
        <div class="pull-right">
            <button @click="close">关闭</button>
        </div>

    </div>
</template>

<script>
  import useOpen from '../composition/open'
  export default {
    name: 'SubDialog',
    props: {
      isOpen2: Boolean
    },
    setup (props, {emit}) {
      const {isOpen, close} = useOpen(emit)
      return {isOpen, close}
    }
  }
</script>

<style scoped>
    .sub-dialog {
        position: absolute;
        width: 500px;
        height: 300px;
        left: 50%;
        top: 30%;
        margin-top: -150px;
        margin-left: -250px;
        background: white;
        border: 1px solid red;
    }
    .pull-right {
        float: right;
    }
    .pull-right button{
        width: 100px;
        color: white;
        margin-right: 10px;
        height: 40px;
        display: inline-block;
        background: deepskyblue;
        border-radius: 5px;
    }
</style>