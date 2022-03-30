<script>
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Home from './views/Home.svelte'
  import Rules from './views/Rules.svelte'
  import PersInfo from './views/PersInfo.svelte'
  import Partners from './views/Partners.svelte'
  
  let views = [
    { id: 0, name: "O Galavečeru", component: Home },
    { id: 1, name: "PRAVIDLA", component: Rules },
    { id: 2, name: "OSOBNÍ ÚDAJE", component: PersInfo },
    { id: 3, name: "partneři", component: Partners, isDesktop: true }
  ]

  let selectedView = views[0];

</script>

<Header views={ views } bind:selectedView />
<main>
  <svelte:component this={ selectedView.component } bind:selectedView views={ views } />
</main>
<Footer />

<style>
</style>