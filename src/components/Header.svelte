<script>
  export let views, selectedView

  const loadView = obj => selectedView = obj
</script>

<header>
  <nav class="md:flex justify-between md:px-8 lg:px-12 xl:px-20 md:pt-4 items-center">
    <div class="logo hidden md:flex md:w-1/4">
      <a href="./">
        <source type="image/webp" srcset="./assets/brown_logo.webp">
        <img src="./assets/brown_logo.png" alt="Galavečer Univerzity Tomáše Bati">
      </a>
    </div>
    <ul class="nav-items flex justify-around flex-wrap items-center text-lg bold py-4 md:py-0 md:w-3/4 lg:w-1/2 xl:w-1/3 md:pl-12 lg:pl-6">
      {#each views as view}
        {#if view.name && !view.isDesktop}
          <li class="uppercase m-2 text-lg cursor-pointer" class:active-view={ view.id === selectedView.id } on:click={ () => loadView(view) }>
            {view.name}
          </li>
        {/if}
        {#if view.isDesktop}
          <li class="hidden md:block uppercase m-2 text-lg cursor-pointer" class:active-view={ view.id === selectedView.id } on:click={ () => loadView(view) }>
            {view.name}
          </li>
        {/if}
      {/each}
    </ul>
  </nav>
</header>