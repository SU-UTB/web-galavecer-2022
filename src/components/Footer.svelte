<script>
import Partners from "./Partners.svelte";


  import Socials from "./Socials.svelte"

</script>

<footer class="flex flex-col items-center space-y-8 py-12">  
  <Socials />
  <a href="./">
      <picture>
        <source media="(min-width:768px)" srcset="./assets/su_w.png">
        <img src="./assets/su.png" alt="SU logo">
      </picture>
  </a>
</footer>

<style>
  footer {
    background-color: white;
  }

  @media screen and (min-width: 768px) {
    footer {
      background-color: transparent;
    }
  }
</style>