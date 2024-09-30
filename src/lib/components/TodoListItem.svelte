<div class="todo-item">
  <label class="todo-item__checker">
    <input type="checkbox" name="" id="" />
  </label>
  <div class="todo-item__content">
    <a class="todo-item__title" href="/"> Finish all the household chores </a>
    <div class="todo-item__meta">
      <span class="todo-item__category">Tasks</span>
      <div class="todo-item__timestamp">
        <iconify-icon icon="mdi:calendar" />
        <span>December 23, 2024 11:00 PM</span>
      </div>
    </div>
  </div>
  <div class="todo-item__flags">
    <a href="/" class="todo-item__icon text-yellow-500">
      <iconify-icon icon="mdi:star" />
    </a>
    <a href="/" class="todo-item__icon text-red-500">
      <iconify-icon icon="mdi:heart" />
    </a>
  </div>
</div>

<style lang="postcss">
  .todo-item {
    @apply bg-white shadow-md flex items-center rounded-sm p-3 gap-3 overflow-hidden;
  }
  .todo-item__checker {
    @apply relative flex items-center justify-center;
  }
  .todo-item__content {
    @apply flex flex-col flex-1 gap-1;
  }
  .todo-item__title {
    @apply text-gray-900 text-sm whitespace-nowrap text-ellipsis overflow-hidden leading-none;
  }
  .todo-item__meta {
    @apply text-gray-600 leading-none font-light text-xs flex items-center whitespace-nowrap overflow-hidden text-ellipsis tracking-wide;
  }
  .todo-item__icon {
    @apply flex items-center justify-center;
  }
  .todo-item__flags {
    @apply flex items-center gap-2;
  }
  .todo-item__category {
    @apply leading-none me-1 text-gray-600 flex items-center;
  }
  .todo-item__timestamp {
    @apply leading-none flex items-center gap-0.5 text-gray-400;
  }
</style>
