<header class="page-header">
  <div class="page-header__title">Tasks</div>
  <div class="page-header__spacer"></div>
  <a href="/" class="page-header__action">
    <iconify-icon icon="mdi:cog" />
  </a>
</header>

<style lang="postcss">
  .page-header {
    @apply min-h-16 flex items-center px-4 absolute w-full top-0 right-0 left-0 border-b border-white/5;
  }
  .page-header__title {
    @apply text-lg text-white font-bold;
  }
  .page-header__action {
    @apply text-lg text-white font-bold flex items-center rounded-sm p-1 transition-colors;
  }
  .page-header__action:hover {
    @apply bg-white/10;
  }
  .page-header__spacer {
    @apply flex-1;
  }
</style>
