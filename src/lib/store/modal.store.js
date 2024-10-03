import { writable } from 'svelte/store'

export default function () {
  const isOpen = writable(false)

  const open = () => {}

  const close = () => {}

  const toggle = () => {}

  return { open, close, toggle }
}
