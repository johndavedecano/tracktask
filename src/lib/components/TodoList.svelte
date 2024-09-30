<script>
  export let title
</script>

<div class="todo-list">
  {#if title}
    <div class="todo-list__group">{title}</div>
  {/if}
  <div class="todo-list__items">
    <slot />
  </div>
</div>

<style lang="postcss">
  .todo-list {
    @apply flex flex-col;
  }
  .todo-list__items {
    @apply flex flex-col gap-2.5;
  }
  .todo-list__group {
    @apply flex items-center text-xs font-light text-gray-100 py-1 uppercase tracking-wide;
  }
</style>
