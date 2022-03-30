<script>
import PartnerList from "../components/PartnerList.svelte";
</script>

<section id="partners" class="py-12 px-12 flex items-center">
  <div class="container mx-auto">
    <PartnerList />
  </div>
</section>


<style>

  #partners {
    background-color: white;
    height: 80vh;
  }

@media screen and (min-width: 768px) {
  #partners {
    height: 80vh;
    background: url('../assets/partners_bg.svg') no-repeat center;
    background-size: 90% 90%;
  }
}
</style>