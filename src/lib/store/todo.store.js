import { writable } from 'svelte/store'

export default function () {
  const todos = writable([])
  const groups = writable({}) // { group: [1,2,3,4]}
  const loading = writable(false)
  const loaded = writable(false)
  const todo = writable()

  const loadTodos = () => {}

  const createTodo = () => {}

  const updateTodo = () => {}

  const editTodo = () => {}

  const destroyTodo = () => {}

  return {
    groups,
    todos,
    todo,
    loading,
    loaded,
    loadTodos,
    createTodo,
    editTodo,
    updateTodo,
    destroyTodo,
  }
}
