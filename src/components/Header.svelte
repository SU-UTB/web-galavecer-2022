<script>
  export let views, selectedView

  const loadView = obj => selectedView = obj
</script>

<header>
  <nav>
    <ul class="nav-items flex justify-around flex-wrap text-lg bold">
      {#each views as view}
        {#if view.name}
          <li class="uppercase m-2" class:active-view={ view.id === selectedView.id } on:click={ () => loadView(view) }>
            {view.name}
          </li>
        {/if}
      {/each}
    </ul>
  </nav>
</header>