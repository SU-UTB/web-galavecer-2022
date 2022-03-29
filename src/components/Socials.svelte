<script>
  const socialItems = [
    {
      imgSrc: './assets/fb.svg',
      imgAlt: 'fb ikona',
      linkTo: '',
    },
    {
      imgSrc: './assets/ig.svg',
      imgAlt: 'ig ikona',
      linkTo: '',
    }
  ]
</script>

<div class="flex space-x-8">
  {#each socialItems as item}
    <a href={item.linkTo}>
      <img src={item.imgSrc} alt={item.imgAlt}>
    </a>
  {/each}
</div>