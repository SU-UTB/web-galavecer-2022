<script>
  const faculties = [
    {
      imgSrc: './assets/faculties/fame.svg',
      imgAlt: 'fame',
    },
    {
      imgSrc: './assets/faculties/flkr.svg',
      imgAlt: 'flkr',
    },
    {
      imgSrc: './assets/faculties/fai.svg',
      imgAlt: 'fai',
    },
    {
      imgSrc: './assets/faculties/fmk.svg',
      imgAlt: 'fmk',
    },
    {
      imgSrc: './assets/faculties/fhs.svg',
      imgAlt: 'fhs',
    },
    {
      imgSrc: './assets/faculties/ft.svg',
      imgAlt: 'ft',
    },
    {
      imgSrc: './assets/faculties/knihovna.svg',
      imgAlt: 'knihovna UTB',
    },
  ]
</script>

<div class="flex flex-wrap md:justify-around md:mx-auto md:w-4/5 lg:w-3/5 md:h-full md:items-center">
  {#each faculties as faculty}
    <img src={faculty.imgSrc} alt={faculty.imgAlt} class="faculty w-4/5 px-2 sm:px-4 mb-8">
  {/each}
</div>
<img src="./assets/utb.svg" alt="Univerzita Tomáše Bati ve Zlíně" class="utb md:mx-auto w-full my-12 px-2 sm:px-4">

<style>
  .faculty {
    max-width: 260px;
  }

  .utb {
    max-width: 300px;
  }

</style>