<template>
    <div v-if="isOpen" style="width: 900px;height: 400px;border-radius: 6px;border:1px solid green">
        <p>我是dialog111的内容</p>
        <p>我是dialog111的内容</p>
        <div class="pull-right">
          <button @click="isOpen2 = true">打开子传送门</button>
          <Teleport to="#dialog">
            <SubDialog :isOpen2="isOpen2" @close="closeDialog"></SubDialog>
          </Teleport>
          <button @click="close">关闭</button>
        </div>

    </div>
</template>

<script>
  import useOpen from '../composition/open'
  import SubDialog from './SubDialog'
  export default {
    name: 'Dialog',
    props: {
      isOpen: Boolean
    },
    components: {
      SubDialog
    },
    setup (props, {emit}) {
      const {isOpen2, close} = useOpen(emit)
      const closeDialog = () => {
        isOpen2.value = false
        close()
      }
      return {isOpen2, close, closeDialog}
    }
  }
</script>

<style scoped>
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