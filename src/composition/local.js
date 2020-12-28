import { reactive, watchEffect } from 'vue'

export default function local(key, defaultValue=[{ id: "1",title: "吃饭",completed: false }]) {
  const data = reactive({})
  Object.assign(data, localStorage[key] && JSON.parse(localStorage[key]) || defaultValue)
  watchEffect(() => {
    localStorage[key] = JSON.stringify(data)
  })
  console.log('data', data)
  return data
}
