import { ref, onMounted, onUnmounted } from 'vue'
export default function scroll() {
  const x = ref(10)
  const y = ref(10)
  const mouseMove = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(()=> {
    window.addEventListener('mousemove', mouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', mouseMove)
  })
  return { x, y }
}
