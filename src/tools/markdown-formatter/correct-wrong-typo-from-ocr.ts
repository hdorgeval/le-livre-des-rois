export function correctWrongTypoFromOcr(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/ , /g, ', '),
    (content: string) => content.replace(/ ’de /g, ' de '),
    (content: string) => content.replace(/ \?n /g, ' ?» '),
    (content: string) => content.replace(/ \(l’avis /g, ' d’avis '),
    (content: string) => content.replace(/ \(le /g, ' de '),
    (content: string) => content.replace(/ à /g, ' à '),
    (content: string) => content.replace(/ à tété /g, ' à tête '),
    (content: string) => content.replace(/ afi’aire /g, ' affaire '),
    (content: string) => content.replace(/ ailait /g, ' allait '),
    (content: string) => content.replace(/ alfaires/g, ' affaires'),
    (content: string) => content.replace(/ allaires /g, ' affaires '),
    (content: string) => content.replace(/ aludessus /g, ' au-dessus '),
    (content: string) => content.replace(/ arrachél /g, ' arraché ! '),
    (content: string) => content.replace(/ Baksch /g, ' Raksch '),
    (content: string) => content.replace(/ Baksch/g, ' Raksch'),
    (content: string) => content.replace(/ boncles /g, ' boucles '),
    (content: string) => content.replace(/ comhatl /g, ' combat ! '),
    (content: string) => content.replace(/ conwsole /g, ' console '),
    (content: string) => content.replace(/ cou-I renne /g, ' couronne '),
    (content: string) => content.replace(/ coutre /g, ' contre '),
    (content: string) => content.replace(/ cr /g, ''),
    (content: string) => content.replace(/ d’lredj /g, ' d’Iredj '),
    (content: string) => content.replace(/ de\. /g, ' de '),
    (content: string) => content.replace(/ ditesvous /g, ' dites-vous '),
    (content: string) => content.replace(/ élaient /g, ' étaient '),
    (content: string) => content.replace(/ en\. /g, ' en '),
    (content: string) => content.replace(/ et\. /g, ' et '),
    (content: string) => content.replace(/ etde/g, ' et de'),
    (content: string) => content.replace(/ etlui /g, ' et lui '),
    (content: string) => content.replace(/ etlui-même /g, ' et lui-même '),
    (content: string) => content.replace(/ faut. p/g, ' faut p'),
    (content: string) => content.replace(/ faut. q/g, ' faut q'),
    (content: string) => content.replace(/ garde-loi /g, ' garde-toi '),
    (content: string) => content.replace(/ grandpère /g, ' grand-père '),
    (content: string) => content.replace(/ hon /g, ' bon '),
    (content: string) => content.replace(/ i’amenèrent /g, ' l’amenèrent '),
    (content: string) => content.replace(/ I’Écrevisse/g, ' l’Écrevisse'),
    (content: string) => content.replace(/ I’i/g, ' l’i'),
    (content: string) => content.replace(/ iIIUstre /g, ' illustre '),
    (content: string) => content.replace(/ il\. /g, ' il '),
    (content: string) => content.replace(/ Kei’anides /g, ' Keïanides '),
    (content: string) => content.replace(/ l /g, ' ! '),
    (content: string) => content.replace(/ l n /g, '! » '),
    (content: string) => content.replace(/ l’eutendit /g, ' l’entendit '),
    (content: string) => content.replace(/ l’lnde /g, ' l’Inde '),
    (content: string) => content.replace(/ la i /g, ' la '),
    (content: string) => content.replace(/ la pour /g, ' la peur '),
    (content: string) => content.replace(/ lablier /g, ' tablier '),
    (content: string) => content.replace(/ laissez persanne /g, ' laissez personne '),
    (content: string) => content.replace(/ le des /g, ' le dos '),
    (content: string) => content.replace(/ le i /g, ' le '),
    (content: string) => content.replace(/ lredj/g, ' Iredj'),
    (content: string) => content.replace(/ lui lit/g, ' lui fit'),
    (content: string) => content.replace(/ où /g, ' où '),
    (content: string) => content.replace(/ palaisl/g, ' palais !'),
    (content: string) => content.replace(/ parlage /g, ' partage '),
    (content: string) => content.replace(/ pieurant /g, ' pleurant '),
    (content: string) => content.replace(/ porrrlerai /g, ' porterai '),
    (content: string) => content.replace(/ prêle /g, ' prête '),
    (content: string) => content.replace(/ protége /g, ' protège '),
    (content: string) => content.replace(/ répondit \.z /g, ' répondit : '),
    (content: string) => content.replace(/ reuversa /g, ' renversa '),
    (content: string) => content.replace(/ rmaître /g, ' maître '),
    (content: string) => content.replace(/ s’élauçait /g, ' s’élançait '),
    (content: string) => content.replace(/ secourablel /g, ' secourable ! '),
    (content: string) => content.replace(/ serpeut /g, ' serpent '),
    (content: string) => content.replace(/ seucisl /g, ' soucis ! '),
    (content: string) => content.replace(/ snr /g, ' sur '),
    (content: string) => content.replace(/ snr-le-champ /g, ' sur-le-champ '),
    (content: string) => content.replace(/ soull’re /g, ' souffre '),
    (content: string) => content.replace(/ soutïert /g, ' souffert '),
    (content: string) => content.replace(/ ssagesse /g, ' sagesse '),
    (content: string) => content.replace(/ tète /g, ' tête '),
    (content: string) => content.replace(/ tracant /g, ' traçant '),
    (content: string) => content.replace(/ trans-portez-moi /g, ' transportez-moi '),
    (content: string) => content.replace(/ tues /g, ' tu es '),
    (content: string) => content.replace(/ usqu’au/g, ' jusqu’au'),
    (content: string) => content.replace(/ z /g, ' : '),
    (content: string) => content.replace(/- /g, '-'),
    (content: string) => content.replace(/, et /g, ' et '),
    (content: string) => content.replace(/,la /g, ', la '),
    (content: string) => content.replace(/,le /g, ', le '),
    (content: string) => content.replace(/: ce /g, ': '),
    (content: string) => content.replace(/’à /g, '’à '),
    (content: string) => content.replace(/’de/g, ' de'),
    (content: string) => content.replace(/«/g, ''),
    (content: string) => content.replace(/«/g, ''),
    (content: string) => content.replace(/\. a /g, '.» '),
    (content: string) => content.replace(/\. avec /g, ' avec '),
    (content: string) => content.replace(/\. ll /g, '. Il '),
    (content: string) => content.replace(/\. lls /g, '. Ils '),
    (content: string) => content.replace(/\. n /g, '.» '),
    (content: string) => content.replace(/\.\./g, '.'),
    (content: string) => content.replace(/\.De /g, '. De '),
    (content: string) => content.replace(/\.n /g, '.» '),
    (content: string) => content.replace(/A ces paroles/g, 'À ces paroles'),
    (content: string) => content.replace(/A chaque/g, 'À chaque'),
    (content: string) => content.replace(/A l’aube /g, 'À l’aube '),
    (content: string) => content.replace(/A la fin/g, 'À la fin'),
    (content: string) => content.replace(/A mesure/g, 'À mesure'),
    (content: string) => content.replace(/A qui/g, 'À qui'),
    (content: string) => content.replace(/A quoi/g, 'À quoi'),
    (content: string) => content.replace(/abréges/g, 'abrèges'),
    (content: string) => content.replace(/Afraaiab /g, 'Afrasiab '),
    (content: string) => content.replace(/Alidessus /g, 'Au-dessus '),
    (content: string) => content.replace(/aùgure/g, 'augure'),
    (content: string) => content.replace(/aux-devant/g, 'au-devant'),
    (content: string) => content.replace(/avénement/g, 'avènement'),
    (content: string) => content.replace(/Bahmau /g, 'Bahman '),
    (content: string) => content.replace(/bénédic-I tions/g, 'bénédictions'),
    (content: string) => content.replace(/Boudabeh/g, 'Roudabeh'),
    (content: string) => content.replace(/Boum/g, 'Roum'),
    (content: string) => content.replace(/Bustem/g, 'Rustem'),
    (content: string) => content.replace(/celuilà/g, 'celui-là'),
    (content: string) => content.replace(/cortége/g, 'cortège'),
    (content: string) => content.replace(/couseil/g, 'conseil'),
    (content: string) => content.replace(/d’1ran/g, 'd’Iran'),
    (content: string) => content.replace(/d’lran/g, 'd’Iran'),
    (content: string) => content.replace(/d’lredj/g, 'd’Iredj'),
    (content: string) => content.replace(/Ecoute/g, 'Écoute'),
    (content: string) => content.replace(/EIoigne-toi /g, 'Éloigne-toi '),
    (content: string) => content.replace(/Estce /g, 'Est-ce '),
    (content: string) => content.replace(/Etant /g, 'Étant '),
    (content: string) => content.replace(/étoll’es /g, 'étoffes '),
    (content: string) => content.replace(/euchaîner/g, 'enchaîner'),
    (content: string) => content.replace(/F aramourz/g, 'Faramourz'),
    (content: string) => content.replace(/F eridoun/g, 'Feridoun'),
    (content: string) => content.replace(/grandvpère/g, 'grand-père'),
    (content: string) => content.replace(/grilles/g, 'griffes'),
    (content: string) => content.replace(/heureuxl/g, 'heureux !'),
    (content: string) => content.replace(/Homaî/g, 'Homaï'),
    (content: string) => content.replace(/I’Iran/g, 'l’Iran'),
    (content: string) => content.replace(/Ï»/g, '?»'),
    (content: string) => content.replace(/Î\?/g, '?'),
    (content: string) => content.replace(/Il faut\. que /g, 'Il faut que '),
    (content: string) => content.replace(/illuslre /g, 'illustre '),
    (content: string) => content.replace(/Irmanieus/g, 'Irmaniens'),
    (content: string) => content.replace(/Kei’anides/g, 'Keïanides'),
    (content: string) => content.replace(/Keîanides/g, 'Keïanides'),
    (content: string) => content.replace(/Ketanides/g, 'Keïanides'),
    (content: string) => content.replace(/l’ âme/g, 'l’âme'),
    (content: string) => content.replace(/l’Hindouslan/g, 'l’Hindoustan'),
    (content: string) => content.replace(/l’lran/g, 'l’Iran'),
    (content: string) => content.replace(/lllran/g, 'l’Iran'),
    (content: string) => content.replace(/llustem/g, 'Rustem'),
    (content: string) => content.replace(/ln /g, '!» '),
    (content: string) => content.replace(/lnde /g, 'Inde '),
    (content: string) => content.replace(/lnde,/g, 'Inde,'),
    (content: string) => content.replace(/lran/g, 'Iran'),
    (content: string) => content.replace(/lskender /g, 'Iskender '),
    (content: string) => content.replace(/Maiut/g, 'Maint'),
    (content: string) => content.replace(/malheurm\./g, 'malheur.»'),
    (content: string) => content.replace(/Ne le lamente /g, 'Ne te lamente '),
    (content: string) => content.replace(/piége/g, 'piège'),
    (content: string) => content.replace(/s’alllige/g, 's’afflige'),
    (content: string) => content.replace(/sa tète/g, 'sa tête'),
    (content: string) => content.replace(/siége/g, 'siège'),
    (content: string) => content.replace(/sur\. le/g, 'sur le'),
    (content: string) => content.replace(/tellemeut/g, 'tellement'),
    (content: string) => content.replace(/tonjours/g, 'toujours'),
    (content: string) => content.replace(/Zabonlistan/g, 'Zaboulistan'),
    (content: string) => content.replace(/Zobak/g, 'Zohak'),
    (content: string) => content.replace(/Zobak/g, 'Zohak'),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
