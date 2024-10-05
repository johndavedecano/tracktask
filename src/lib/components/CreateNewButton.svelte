<a href="/create" class="create-new">
  <iconify-icon icon="mdi:plus"></iconify-icon>
  <div class="flex-1">Create New</div>
  <iconify-icon icon="mdi:chevron-right"></iconify-icon>
</a>

<style lang="postcss">
  .create-new {
    @apply flex w-full max-w-64 items-center text-sm gap-2 px-2 bg-gray-100 border-t min-h-16 sticky bottom-0 transition-colors;
  }
  .create-new:hover {
    @apply bg-gray-200/50;
  }
</style>
