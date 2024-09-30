<script>
  import MainInput from '../lib/components/MainInput.svelte'
  import PageHeader from '../lib/components/PageHeader.svelte'
  import PageWrapper from '../lib/components/PageWrapper.svelte'
  import RightModal from '../lib/components/RightModal.svelte'
  import TodoList from '../lib/components/TodoList.svelte'
  import TodoListItem from '../lib/components/TodoListItem.svelte'

  const items = Array.from(new Array(24))
</script>

<PageWrapper>
  <PageHeader slot="header" />
  <div slot="content">
    <TodoList title="August 1, 2023">
      {#each items as item}
        <TodoListItem />
      {/each}
    </TodoList>
  </div>
  <div slot="footer" class="w-full">
    <MainInput />
  </div>
</PageWrapper>

<RightModal open />

<style lang="postcss">
</style>
