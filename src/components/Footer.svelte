<script>
import Partners from "./PartnerList.svelte";


  import Socials from "./Socials.svelte"

</script>

<footer class="flex flex-col items-center space-y-8 py-12">  
  <Socials />
  <a href="https://www.instagram.com/studentskaunieutb/" rel="noreferrer noopener">
      <picture>
        <source type="image/webp" media="(min-width:768px)" srcset="./assets/su_w.webp">
        <source type="image/png" media="(min-width:768px)" srcset="./assets/su_w.png">
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