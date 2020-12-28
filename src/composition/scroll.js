import { ref, onMounted, onUnmounted } from 'vue'
export default function scroll() {
  const top = ref(0)
  const update = () => {
    top.value = window.scrollY
  }
  onMounted(() => {
    window.addEventListener('scroll', update)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
  })

  return { top }
}
