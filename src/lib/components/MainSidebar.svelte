<script>
  import CreateNewButton from './CreateNewButton.svelte'
  import CurrentUser from './CurrentUser.svelte'
  import MainMenu from './MainMenu.svelte'
</script>

<div class="sidebar">
  <div class="sidebar__current-user">
    <CurrentUser />
  </div>
  <MainMenu />
  <div class="sidebar__spacer"></div>
  <slot />
  <CreateNewButton />
</div>

<style lang="postcss">
  .sidebar {
    @apply w-64 overflow-y-auto flex flex-col bg-gray-100 shadow-sm relative;
  }
  .sidebar__spacer {
    @apply flex-1;
  }
  .sidebar__current-user {
    @apply sticky top-0;
  }
</style>
