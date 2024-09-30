<script>
  import MenuItem from "./MenuItem.svelte"

</script>
<ul class="menu">
  <li>
    <MenuItem icon="user" count={0} to="/">
        My Day
    </MenuItem>
  </li>
  <li>
    <MenuItem icon="warning" count={0} to="/important">
        Important
    </MenuItem>
  </li>
  <li>
    <MenuItem icon="calendar" count={0} to="/planned">
        Planned
    </MenuItem>
  </li>
  <li>
    <MenuItem icon="assignment" count={0} to="/tasks">
        Tasks
    </MenuItem>
  </li>
  <li>
    <MenuItem icon="notes" count={0} to="/notes">
        Notes
    </MenuItem>
  </li>
</ul>

<style lang="postcss">
  .menu {
    @apply flex flex-col gap-1;
  }
</style>
