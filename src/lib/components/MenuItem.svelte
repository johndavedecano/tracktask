<script>
  export let to = '/'
  export let icon = 'home'
  export let count = undefined
  export let active = false
</script>

<a href={to} class:active={active}
  ><iconify-icon icon={`mdi:${icon}`}></iconify-icon><slot />
  {#if typeof count === 'number'}
    <span>{count}</span>
  {/if}</a
>

<style lang="postcss">
  a {
    @apply flex items-center text-sm font-light gap-2 px-2 py-2 transition-colors;
  }
  a:hover {
    @apply bg-blue-800 text-white;
  }
  /* a.active {
    @apply bg-blue-900 text-white;
  } */
  a > span {
    @apply block flex-1 text-right text-xs;
  }
</style>
