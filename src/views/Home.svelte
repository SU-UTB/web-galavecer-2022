<script>
  export let views, selectedView
</script>


<section id="home">
  <div class="container px-4 py-12 mx-auto text-center">
    <img class="mx-auto" src="./assets/headline.png" alt="Galavečer 2022">
    <h2 class="mt-6 text-3xl px-2">I TVŮJ TALENT SI ZASLOUŽÍ ZLATÝ KUPÓN</h2>
    <div class="golden-ticket relative">
      <img class="block object-contain object-center w-full h-full" src="./assets/m_golden_ticket.png" alt="">
      <div class="content z-10 absolute top-1/3 px-12 text-left">
        <p class="text-black text-xl extra-sm:text-2xl mt-4">I když se Ti ocenění za tvé kvality zdá nedosažitelné, tak si vzpomeň, že i Karlík musel zkusit hned několik čokolád.</p>
        <div class="vote-btn uppercase text-center bg-red mt-2 extra-sm:mt-4 cursor-pointer mx-auto">
          <a class="inline-block px-8 py-1 extra-sm:py-3 text-2xl" href="./">HLASUJ</a>
        </div>
        <p class="text-xl text-center mt-4 text-brown">HLASOVÁNÍ končí 20. 4. 2022</p>
      </div>
    </div>
    <button class="redirect-link uppercase border-b-2 text-xl" on:click={ () => selectedView = views[1] } >
      pravidla
    </button>
  </div>
</section>

<style>
  #home {
    background: url('../assets/m_purp_bg.png') no-repeat top;
    background-size: cover;
  }

  .vote-btn {
    -webkit-box-shadow: -8px 8px 0px 1px #490860; 
    box-shadow: -8px 8px 0px 1px #490860;
    max-width: 360px;
  }
</style>