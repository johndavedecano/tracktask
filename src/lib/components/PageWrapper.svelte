<div class="page">
  <slot name="header" />
  <div class="page-content">
    <div class="page-content__inner">
      <slot name="content" />
    </div>
  </div>
  <div class="page-footer">
    <slot name="footer" />
  </div>
</div>

<style lang="postcss">
  .page {
    @apply max-h-screen min-h-screen relative flex flex-col overflow-hidden;
  }
  .page-content {
    @apply mt-16 mb-16 flex-1 overflow-y-auto;
  }
  .page-content__inner {
    @apply p-4;
  }
  .page-footer {
    @apply min-h-16 flex items-center px-4 absolute w-full bottom-0 right-0 left-0 border-t border-white/5;
  }
</style>
