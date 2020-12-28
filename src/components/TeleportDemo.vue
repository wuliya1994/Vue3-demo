<template>
    <div>
        <button @click="isOpen = true">打开Teleport</button>
        <Teleport to="#dialog">
            <Dialog :isOpen="isOpen" @close="isOpen = false"></Dialog>
        </Teleport>
    </div>
</template>

<script>
import Dialog from './Dialog'
import useOpen from '../composition/open'
  export default {
    name: 'TeleportDemo',
    components: {
      Dialog
    },
    setup () {
      const {isOpen} = useOpen()
      return {isOpen}
    }
  }
</script>

<style scoped>

</style>