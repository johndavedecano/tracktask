import { writable } from 'svelte/store'

export default function () {
  const groups = writable([])
  const loading = writable(false)
  const loaded = writable(false)
  const group = writable()

  const loadGroups = () => {}

  const createGroup = () => {}

  const editGroup = () => {}

  const updateGroup = () => {}

  const destroyGroup = () => {}

  return {
    groups,
    group,
    loading,
    loaded,
    loadGroups,
    createGroup,
    editGroup,
    updateGroup,
    destroyGroup,
  }
}
