<script>
  export let views, selectedView

  const loadView = obj => selectedView = obj
</script>

<header>
  <nav>
    <ul class="nav-items flex justify-around text-lg bold">
      {#each views as view}
        {#if view.name}
          <li class="nav-item uppercase" on:click={ () => loadView(view) }>
            {view.name}
          </li>
        {/if}
      {/each}
    </ul>
  </nav>
</header>