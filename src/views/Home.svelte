<script>
  import VoteBtn from "../atoms/VoteBtn.svelte";
  import Partners from "../components/PartnerList.svelte";

  export let views, selectedView
</script>

<section id="home">
  <div class="container px-4 py-12 mx-auto text-center">
    <picture>
      <source type="image/webp" srcset="./assets/headline.webp">
        <source type="image/png" srcset="./assets/headline.png">
      <img class="mx-auto" src="./assets/headline.png" alt="Galavečer 2022">
    </picture>
    <h2 class="my-6 text-3xl md:text-4xl px-2">I TVŮJ TALENT SI ZASLOUŽÍ <br class="md:hidden" />ZLATÝ KUPÓN</h2>
    <div class="golden-ticket relative md:px-8 mx-auto max-w-4xl md:flex md:justify-center">
      <picture>
        <source type="image/webp" media="(min-width:768px)" srcset="./assets/golden_ticket.webp">
        <source type="image/png" media="(min-width:768px)" srcset="./assets/golden_ticket.png">
        <source type="image/webp" srcset="./assets/m_golden_ticket.webp">
        <source type="image/png" srcset="./assets/m_golden_ticket.png">
        <img class="block object-contain object-center w-full h-full" src="./assets/m_golden_ticket.png" alt="golden ticket">
      </picture>
      <p class="golden-ticket-text hidden md:block text-2xl absolute text-black md:w-3/4 lg:w-3/5">I když se Ti ocenění za tvé kvality zdá nedosažitelné, tak si vzpomeň, že i Karlík musel zkusit hned několik čokolád.</p>      
      <div class="content md:hidden z-10 absolute top-1/3 px-12 sm:px-20 text-left">
        <p class="text-black text-xl extra-sm:text-2xl mt-4">I když se Ti ocenění za tvé kvality zdá nedosažitelné, tak si vzpomeň, že i Karlík musel zkusit hned několik čokolád.</p>
        <div class="vote-btn uppercase text-center bg-red mt-2 extra-sm:mt-4 sm:mt-12 cursor-pointer mx-auto">
          <a class="inline-block px-8 py-1 extra-sm:py-3 text-2xl" href="https://forms.office.com/r/FrhgdhBs5E" target="_blank" rel="noreferrer noopener">NOMINUJ</a>
        </div>
        <p class="text-xl text-center mt-4 sm:mt-8 text-brown">NOMINACE končí 7. 4. 2022 10:00</p>
      </div>
    </div>
    <div class="vote-desktop hidden md:block">
      <VoteBtn />
      <p class="hidden md:block uppercase mt-8 text-lg">NOMINACE končí 7. 4. 2022 10:00</p>
    </div>
    <button class="redirect-link md:hidden uppercase border-b-2 text-xl" on:click={ () => selectedView = views[1] } >
      pravidla
    </button>
  </div>  
</section>
<div class="partners block md:hidden p-8 bg-white">
  <Partners />
</div>

<style>
  .vote-btn {
    -webkit-box-shadow: -8px 8px 0px 1px #490860; 
    box-shadow: -8px 8px 0px 1px #490860;
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    .golden-ticket-text {
      top: 12rem
    }
  }

  @media screen and (min-width: 1024px) {
    .golden-ticket-text {
      top: 14.5rem
    }
  }
  
</style>