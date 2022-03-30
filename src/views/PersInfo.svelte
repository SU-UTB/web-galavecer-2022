<script>
  import BackBtn from "../atoms/BackBtn.svelte";
  
  import VoteBtn from "../atoms/VoteBtn.svelte";
  
  
    const persInfoList = [
      {
        headline: 'Základní ustanovení',
        subInfoList: [
          { txt: '1. Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „GDPR”) zapsaný spolek Studentská Unie UTB, z.s., Nad Ovčírnou 3685, budova U11 UTB 760 01 Zlín, identifikační číslo: 26996286, zapsaná v obchodním rejstříku vedeném Krajským soudem v Brně, spisová značka: L 11094, dále jen: „správce“)' },
          { txt: '2. Doručovací údaje správce jsou stejné jako sídlo spolku uvedené výše. Adresa elektronické pošty je su@sutb.cz.' },
          { txt: '3. Osobními údaji se rozumí veškeré informace o identifikované nebo identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména odkazem na určitý identifikátor, například jméno, identifikační číslo, lokační údaje, síťový identifikátor nebo na jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo společenské identity této fyzické osoby.' },
          { txt: '4. Správce nejmenoval pověřence pro ochranu osobních údajů.' }
        ]
      },
      {
        headline: 'Zdroje a kategorie zpracovávaných osobních údajů',
        subInfoList: [
          { txt: '1. Správce zpracovává osobní údaje, které jste mu poskytl/a nebo osobní údaje, které správce získal na základě nominace pro Galavečer UTB 2022.' },
          { txt: '2. Správce zpracovává Vaše identifikační a kontaktní údaje a údaje nezbytné pro nominace a hlasování v této soutěži.' },
        ]
      },
      {
        headline: 'Zákonný důvod a účel zpracování osobních údajů',
        subInfoList: [
          { txt: '1. Zákonným důvodem zpracování osobních údajů je' },
          { txt: 'Váš souhlas se zpracováním pro účely poskytování přímého marketingu (zejména pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. a) GDPR ve spojení s § 7 odst. 2 zákona č. 480/2004 Sb., o některých službách informační společnosti v případě, že nedošlo k objednávce zboží nebo služby.' },
          { txt: '2. Účelem zpracování osobních údajů je' },
          { txt: 'Vytvoření databáze nominací a následného hlasování pro jednotlivé kandidáty, kteří vzejdou ze zmíněných nominací. Vše pro účely Galavečera UTB 2022. Ze strany správce nedochází automatickému individuálnímu rozhodování ve smyslu čl. 22 GDPR. S takovým zpracováním jste poskytl/a svůj výslovný souhlas.' },
        ]
      },
      {
        headline: 'Doba uchovávání údajů',
        subInfoList: [
          { txt: '1. Správce uchovává osobní údaje' },
          { txt: 'po dobu, než je odvolán souhlas se zpracováním osobních údajů pro účely Galavečera UTB 2022, nejdéle 2 roky, jsou-li osobní údaje zpracovávány na základě souhlasu. Po uplynutí doby uchovávání osobních údajů správce osobní údaje vymaže.' },
        ]
      },
      {
        headline: 'Příjemci osobních údajů (subdodavatelé správce)',
        subInfoList: [
          { txt: '1. Příjemci osobních údajů jsou osoby' },
          { txt: 'zajišťující realizaci projetu Galavečer UTB 2020 Správce nemá v úmyslu předat osobní údaje do třetí země (do země mimo EU) nebo mezinárodní organizaci. Příjemci osobních údajů ve třetích zemích jsou poskytovatelé mailingových služeb / cloudových služeb' },
        ]
      },
      {
        headline: 'Vaše práva',
        subInfoList: [
          { txt: 'Za podmínek stanovených v GDPR máte' },
          { txt: 'právo na přístup ke svým osobním údajům dle čl. 15 GDPR, právo opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení pracování dle čl. 18 GDPR. právo na výmaz osobních údajů dle čl. 17 GDPR. právo vznést námitku proti zpracování dle čl. 21 GDPR právo na přenositelnost údajů dle čl. 20 GDPR. právo odvolat souhlas se zpracováním písemně nebo elektronicky na adresu nebo email správce uvedený v čl. III těchto podmínek.' },
          { txt: '2. Dále máte právo podat stížnost u Úřadu pro ochranu osobních údajů v případě, že se domníváte, že bylo porušeno Vaší právo na ochranu osobních údajů.' }
        ]
      },
      {
        headline: 'Podmínky zabezpečení osobních údajů',
        subInfoList: [
          { txt: '1. Správce prohlašuje, že přijal veškerá vhodná technická a organizační opatření k zabezpečení osobních údajů.' },
          { txt: '2. Správce přijal technická opatření k zabezpečení datových úložišť a úložišť osobních údajů v listinné podobě, zejména použití antivirových programů, bezpečná hesla aj.' },
          { txt: '3 .Správce prohlašuje, že k osobním údajům mají přístup pouze jím pověřené osoby.' }
        ]
      },
      {
        headline: 'Závěrečná ustanovení',
        subInfoList: [
          { txt: '1. Odesláním nominaci z internetového nominačního formuláře potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.' },
          { txt: '2. S těmito podmínkami souhlasíte zaškrtnutím souhlasu prostřednictvím internetového formuláře. Zaškrtnutím souhlasu potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.' },
          { txt: '3. Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek ochrany osobních údajů zveřejní na svých internetových stránkách, případně Vám zašle novou verzi těchto podmínek na e-mailovou adresu, kterou jste správci poskytl/a.' },
          { txt: 'Tyto podmínky nabývají účinnosti dnem 1. 3. 2022.' }
        ]
      },
    ]
  </script>
  
  <section id="rules" class="py-8">
    <div class="container px-2 mx-auto">
      <h1 class="text-3xl uppercase mb-8 text-red text-center">Zásady ochrany osobních<br />údajů Galavečer 2022</h1>
      <ol class="pers-info text-lg mb-12" type="I">
        {#each persInfoList as persInfo}
          <li class="mb-4 pl-3">
            <p class="text-red">{persInfo.headline}</p>
            <ul>
              {#each persInfo.subInfoList as subInfo}
                <li class="mb-4">{subInfo.txt}</li>
              {/each}
            </ul>
          </li>
        {/each}        
      </ol>
      <BackBtn />
    </div>
  </section>


  <style>
  </style>
  