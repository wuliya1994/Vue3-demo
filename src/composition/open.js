import { ref } from 'vue'
export default function open($emit) {
  const isOpen = ref(false)
  const isOpen2 = ref(false)

  const close = () => {
    $emit('close')
  }
  return {isOpen, isOpen2, close}
}
