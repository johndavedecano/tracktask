<script>
  import "../app.css"
  import "iconify-icon"
  import MainSidebar from "../lib/components/MainSidebar.svelte"
</script>


<div class="todo-app">
  <MainSidebar />
  <div class="todo-app__rightbar">
    <slot />
  </div>
</div>

<style lang="postcss">
.todo-app {
  @apply absolute left-0 top-0 right-0 bottom-0 w-full h-full flex overflow-hidden;
  background-image: linear-gradient(to right top, #001e4b, #0a386e, #125593, #1474b9, #0a94e0);
}
.todo-app__rightbar {
  @apply flex-1 overflow-y-auto flex flex-col;
}
</style>
