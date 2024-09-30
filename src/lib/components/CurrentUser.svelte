<script>

</script>

<div class="current-user">
    <img src="/user.jpg" alt="" class="current-user__avatar">
    <div class="current-user__info">
      <div class="current-user__name">
        Rose Ann Decano 
        <span class="current-user__email">johndavedecano@gmail.com <iconify-icon icon="mdi:pencil" /></span>
      </div>
    </div>
</div>

<style lang="postcss">
.current-user {
  @apply flex items-center gap-3 p-3 bg-white border-b;
}
.current-user__avatar {
  @apply rounded-full object-cover w-10 h-10 border-2 border-blue-800;
}
.current-user__info {
  @apply flex flex-col gap-2 items-center justify-center;
}
.current-user__name {
  @apply font-semibold text-sm text-gray-950;
}
.current-user__email {
  @apply text-xs text-gray-500 overflow-hidden text-ellipsis flex items-center gap-1;
}
</style>
