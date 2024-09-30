<script>
  // @ts-nocheck

  import { createEventDispatcher } from 'svelte'

  export let open = true

  const dispatch = createEventDispatcher()

  const onkeyup = (evt) => {
    if (evt.key === 'Escape' || evt.keyCode === 27) {
      dispatch('close')
      open = false
    }
  }
</script>

<div class="rightbar" class:open>
  <slot />
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="rightbar__overlay" class:open></div>

<svelte:window on:keyup={onkeyup} />

<style lang="postcss">
  .rightbar {
    @apply w-64 overflow-y-auto flex-col bg-white shadow-sm fixed -right-64 top-0 bottom-0 z-30 transition-all hidden;
  }

  .rightbar.open {
    @apply right-0 flex;
  }

  .rightbar__overlay {
    @apply bg-black/50 fixed top-0 bottom-0 right-0 left-0 w-full h-full z-20 transition-all opacity-0 pointer-events-none hidden;
  }

  .rightbar__overlay.open {
    @apply opacity-100 pointer-events-auto flex;
  }
</style>
