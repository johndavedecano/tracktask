<div class="input">
  <button type="button">
    <iconify-icon icon="mdi:plus" />
  </button>
  <input type="text" />
</div>

<style lang="postcss">
  .input {
    @apply w-full flex p-1.5 bg-white/5 rounded-md gap-4 items-center border border-transparent focus-within:border-white/10;
  }

  .input button {
    @apply flex items-center justify-center text-white p-1 bg-white/10 rounded-md;
  }
  .input input {
    @apply inline-block flex-1 bg-transparent text-white focus:outline-none text-sm;
  }
</style>
