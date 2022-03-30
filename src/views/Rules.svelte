<script>
  const rulesFour = [
    {
      txt: 'Nominovat může pouze student nebo zaměstnanec UTB.'
    },
    {
      txt: 'Nominován může být pouze student UTB (prezenční i kombinované formy studia, bakalářského, magisterského, '
    },
    {
      txt: 'Nominován může být za zásluhy, které prospěly společnosti nebo i za svoji mimoškolní aktivitu prospěšnou okolí.'
    },
    {
      txt: 'Pořadatel akce (Studentská unie UTB) si vyhrazuje právo vyřadit nominace ty, které neodpovídají těmto pravidlům, nebo jsou vulgární či urážlivé.'
    },
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
  <div class="container px-2 mx-auto">
    <h1 class="text-3xl uppercase mb-8 text-red text-center">Pravidla nominací<br/>Galavečer 2022</h1>
    <ol class="rules text-lg">
      {#each rulesFour as rule}
        <li class="mb-4 pl-3">{rule.txt}</li>
      {/each}
      <li class="mb-4 pl-3">
        Galavečer UTB má 6 základních kategorií:
        <ul>
          {#each faculties as faculty}
            <li class="text-red uppercase">student {faculty}</li>
          {/each}
        </ul>
        Pozn.: O těchto studentech rozhoduje vedení jednotlivých fakult.
      </li>
      <li class="mb-4 pl-3">
        Galavečer UTB 2022 má další 2 speciální kategorie:
        <ul>
          <li class="text-red">Sportovec UTB</li>
          <li class="text-red">Sportovní tým UTB</li>
        </ul>
      </li>
      <li class="mb-4 pl-3">Poslední kategorií je <span class="text-red">Studentská cena</span> Studentská cena, do které spadají všichni výše uvedení a o umístění těchto studentů rozhodují zaměstnanci i studenti UTB, ale i široká veřejnost za pomoci svých hlasů (emailových adres) a to pouze jednou z jedné emailové adresy.</li>
      {#each lastTwoRules as rule}
        <li class="mb-4 pl-3">{rule.txt}</li>
      {/each}
    </ol>
  </div>
</section>
