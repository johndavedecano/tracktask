import createGroupStore from './group.store'
import createTodoStore from './todo.store'
import createModalStore from './modal.store'

export const todo = createTodoStore()

export const group = createGroupStore()

export const modal = createModalStore()
