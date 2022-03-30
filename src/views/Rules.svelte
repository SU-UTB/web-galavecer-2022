<script>
import BackBtn from "../atoms/BackBtn.svelte";

import VoteBtn from "../atoms/VoteBtn.svelte";


  const rulesFour = [ 'NOMINOVAT MŮŽE POUZE STUDENT NEBO ZAMĚSTNANEC UTB.', 'NOMINOVÁN MŮŽE BÝT POUZE STUDENT UTB (PREZENČNÍ I KOMBINOVANÉ FORMY STUDIA, BAKALÁŘSKÉHO, MAGISTERSKÉHO, INŽENÝRSKÉHO ČI DOKTORANDSKÉHO PROGRAMU).', 'Nominován může být za zásluhy, které prospěly společnosti nebo i za svoji mimoškolní aktivitu prospěšnou okolí.',
'Pořadatel akce (Studentská unie UTB) si vyhrazuje právo vyřadit nominace ty, které neodpovídají těmto pravidlům, nebo jsou vulgární či urážlivé.'
  ]

  const lastTwoRules = [
    {
      txt: 'Pořadatel (Studentská unie UTB) má právo prověřit pravost hlasů a v případě pochybností nominovaného vyloučit za podvodné hlasování.'
    },
    {
      txt: 'Pořadatel (Studentská unie UTB) je povinen kontaktovat výherce a domluvit se s nimi na dalším postupu.'
    }
  ]

  const faculties = ['FMK', 'FAME', 'FAI', 'FT', 'FLKŘ', 'FHS']
</script>

<section id="rules" class="py-8">
  <div class="container px-2 mx-auto md:px-24">
    <h1 class="text-3xl mb-8 text-red text-center">PRAVIDLA NOMINACÍ<br/>GALAVEČER 2022</h1>
    <ol class="rules text-lg mb-12">
      {#each rulesFour as rule}
        <li class="mb-4 pl-3">{rule}</li>
      {/each}
      <li class="mb-4 pl-3">
        GALAVEČER UTB MÁ 6 ZÁKLADNÍCH KATEGORIÍ:
        <ul>
          {#each faculties as faculty}
            <li class="text-red">student {faculty}</li>
          {/each}
        </ul>
        POZN.: O TĚCHTO STUDENTECH ROZHODUJE VEDENÍ JEDNOTLIVÝCH FAKULT.
      </li>
      <li class="mb-4 pl-3">
        GALAVEČER UTB 2022 MÁ DALŠÍ 2 SPECIÁLNÍ KATEGORIE:
        <ul>
          <li class="text-red">SPORTOVEC UTB</li>
          <li class="text-red">SPORTOVNÍ TÝM UTB</li>
        </ul>
      </li>
      <li class="mb-4 pl-3">POSLEDNÍ KATEGORIÍ JE <span class="text-red">STUDENTSKÁ CENA</span> STUDENTSKÁ CENA, DO KTERÉ SPADAJÍ VŠICHNI VÝŠE UVEDENÍ A O UMÍSTĚNÍ TĚCHTO STUDENTŮ ROZHODUJÍ ZAMĚSTNANCI I STUDENTI UTB, ALE I ŠIROKÁ VEŘEJNOST ZA POMOCI SVÝCH HLASŮ (EMAILOVÝCH ADRES) A TO POUZE JEDNOU Z JEDNÉ EMAILOVÉ ADRESY.</li>
      {#each lastTwoRules as rule}
        <li class="mb-4 pl-3">{rule.txt}</li>
      {/each}
    </ol>

    <VoteBtn />
    <p class="text-xl text-center mt-4 mb-6">NOMINACE KONČÍ 7. 4. 2022 10:00</p>
    <BackBtn />
  </div>
</section>
