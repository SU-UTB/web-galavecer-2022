<script>
  const socialItems = [
    {
      imgSrcDesktop: './assets/ig_w.svg',
      imgSrc: './assets/ig.svg',
      imgAlt: 'ig ikona',
      linkTo: '',
    },
    {
      imgSrcDesktop: './assets/fb_w.svg',
      imgSrc: './assets/fb.svg',
      imgAlt: 'fb ikona',
      linkTo: '',
    }
  ]
</script>

<div class="flex space-x-8">
  {#each socialItems as item}
    <a href={item.linkTo}>
      <picture>
        <source media="(min-width:768px)" srcset={item.imgSrcDesktop}>
          <img src={item.imgSrc} alt={item.imgAlt}>
      </picture>
    </a>
  {/each}
</div>