<template>
  <section class="todoapp">
    <header class="header" :class="{fixed:top>130}">
      <h1>Vue3 Todo</h1>
      <input class="new-todo"
             placeholder="想干的事"
             v-model="newTodo"
             @keyup.enter="addTodo">
    </header>
    <section class="main" v-show="todos.length">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
      <label for="toggle-all">Mark all as completed</label>
      <ul class="todo-list">
        <li v-for="todo in todos"
            class="todo"
            :key="todo.id"
            :class="{ completed: todo.completed }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" >
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length" v-cloak>
    <span class="todo-count">
      <strong>{{ remaining }}</strong>  left
    </span>
      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
  import { toRefs, computed } from 'vue'
  import useScroll from '../composition/scroll'
  import useLocal from '../composition/local'
  export default {
    name: 'TodoMvcDemo',
    setup () {
      // const state = reactive({
      //   newTodo: '',
      //   todos: [
      //     {id: 1, title: '吃饭', completed: false},
      //     {id: 2, title: '睡觉', completed: false}
      //   ]
      // })
      const state = useLocal('todo', {
        newTodo: '',
        todos: [
          {id: 1, title: '吃饭', completed: false},
          {id: 2, title: '睡觉', completed: false}
        ]
      })
      const addTodo = ()  => {
        const value = state.newTodo && state.newTodo.trim()
        if (!value) return
        state.todos.push({id: state.todos.length + 1, title: value, completed: false})
        state.newTodo = ''
      }
      const remaining = computed(() => {
        return state.todos.filter(item => !item.completed).length
      })
      const allDone = computed({
        get: () => {
          return remaining.value === 0
        },
        set: (value) => {
          state.todos.forEach(item => {
            item.completed = value
          })
        }
      })
      const removeTodo = (item) => {
        state.todos.splice(state.todos.findIndex(it => it.id === item.id), 1)
      }
      const removeCompleted = () => {
        state.todos = state.todos.filter(it => !it.completed)
      }
      const { top } = useScroll()

      return { ...toRefs(state), top, allDone, remaining,
              addTodo, removeTodo, removeCompleted}
    }
  }
</script>

<style scoped>
  .header.fixed{
    background: #fff;
    position: fixed;
    top:0;
    left:0;
    right:0;
    width:100%;
    z-index:100;
  }
</style>
