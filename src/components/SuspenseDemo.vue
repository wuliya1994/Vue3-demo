<template>
    <div>我是异步加载组件演示</div>
    <Suspense>
        <template #default>
            <AsyncComponent time="4000"></AsyncComponent>
        </template>
        <template #fallback>
            <Loading />
        </template>
    </Suspense>
</template>

<script>
 import AsyncComponent from './AsyncComponent'
 import Loading from './Loading'
  export default {
    name: 'SuspenseDemo',
    components: {
      AsyncComponent,
      Loading
    }
  }
</script>

<style scoped>

</style>
