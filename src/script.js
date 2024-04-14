let ul = document.querySelector('nav .ul');
let $ = (a) => document.querySelector(a);

let poema = [
  {nome: "Os Meus Amigos", poema: 
    `Amigos cento e dez, e talvez mais,<br>
    Eu já contei. Vaidades que eu sentia!<br>
    Pensei que sobre a terra não havia<br>
    Mais ditoso mortal entre os mortais.<br><br>

    Amigos cento e dez, tão serviçais,<br>
    Tão zelosos das leis da cortesia,<br>
    Que eu, já farto de os ver, me escapulia<br>
    Às suas curvaturas vertebrais.<br><br>

    Um dia adoeci profundamente.<br>
    Ceguei. Dos cento e dez houve um somente<br>
    Que não desfez os laços quase rotos.<br><br>

    — Que vamos nós (diziam) lá fazer?<br>
    Se ele está cego, não nos pode ver…<br>
    Que cento e nove impávidos marotos!`},
  {nome: "Lágrima", poema:
    `Senhora! em vosso rosto macerado<br>
Transluz da alma afflicta a immensa dôr!<br>
D'um lado, a morte; do outro, o vosso Amor<br>
Tremenda lucta ao pé do Esposo amado!<br><br>
Contaes as pulsações do peito anciado<br>
Em estos convulsivos do estertor;<br>
Só podem vossos labios dar calor<br>
Áquelle corpo inerte, hirto, gelado.<br><br>
Vós bem vêdes, Senhora, este quebranto<br>
Que enluta Portugal! Ergue-se o pranto,<br>
Quando a morte do Paço se avisinha...<br><br>
Pois quanto uma nação póde soffrer<br>
Não tem o acerbo e intenso padecer<br>
Das vossas sanctas lagrimas, Rainha!`},
  {nome: "ALMA ATRIBULADA", poema: 
    `  O' alma atribulada, corta o laço<br>
    da torva angústia que te cinge à vida!<br>
    Vai, foge para Deus, ou para o espaço...<br>
    Ou nada ou Deus, que importa? eis-te remida.<br><br>
    
      Não tiveste na vida um dia escasso<br>
    de paz e de alegria! Escurecida<br>
    te foi sempre a existência, desvalida,<br>
    e cortada de abismos, passo a passo.<br><br>
    
      Vai! Não leves saudades do que deixas.<br>
    Se a fé em melhor mundo te preluz,<br>
    alma gemente, por que assim te queixas?<br><br>
    
      Desprende-te, a sorrir, da horrenda cruz<br>
    em que tanto penaste! Os olhos fechas?<br>
    Abre os dalma, e verás que infinda luz.`},
  {nome: "ANEL", poema: 
    `Dá-me um anel; mas que seja<br>
Como o anel em que cingida<br>
Tem gemido toda a minha vida.<br>
Dá-me um anel; mas de ferro,<br>
Negro, bem negro, da cor<br>
Desta minha acerba dor,<br>
Deste meu negro desterro!<br><br>

Dá-me um anel; mas de ferro...<br>
Sempre comigo hei-de tê-lo;<br>
Há-de ser o negro elo,<br>
Que me prenda à sepultura.<br>
Quero-o negro...seja o estigma,<br>
que decifre o escuro enigma,<br>
Duma grande desventura.<br><br>

Dá-me um anel; mas de ferro,<br>
Que resista mais que os ossos<br>
Dum cadáver aos destroços<br>
Do roaz verme do pó.<br>
Entre as cinzas alvacentas,<br>
como espólio das tormentas<br>
Apareça o ferro só.<br><br>

E o teu nome impresso nele,<br>
Falará dum grande amor,<br>
Nutrido em ânsias de dor,<br>
Pelo fel da sociedade...<br>
Que teu nome nele escrito,<br>
Nesse padrão infinito,<br>
Vá comigo à Eternidade.`},
  {nome: "O ultimo romantico", poema: 
    `O extravagante Arthur, em Compostella,<br>
Viu desnalgar-se uma gitana Lola,<br>
Que tocava pandeiro e castanhola,<br>
E jurava que nunca foi donzella.<br><br>
Chamava-lhe Esmeralda, ou Graziela<br>
O romantico Arthur da velha escola;<br>
Mas tanto na paixão carnal se atola,<br>
Que os bens que tinha dissipou com ella.<br><br>
Assim que empobreceu, Lola safou-se;<br>
E Arthur a pouco e pouco definhou-se<br>
Até se evaporar sem ter vintem,<br>
A ti, que foste o ultimo romantico,<br>
Dedico o meu, talvez, ultimo cantico...<br>
E adeus! Se estás no ceu, porta-te bem.`},
  {nome: "Paciencia", poema: 
    `Quem pode conceber que Deus creasse<br>
Tanta obra perfeitissima, esmaltada<br>
Pelo espaço infinito, e a desgraçada<br>
Raça humanal de imperfeições manchasse?<br><br>
Quem pode conceber o acerbo enlace<br>
De miserias que esmagam, condemnada<br>
A creação mais nobre, atormentada<br>
Desde o berço até ás ancias do trespasse?<br><br>
É certo que as desgraças são enormes;<br>
Mas tu, Deus abscondito, não dormes,<br>
Quando eu te invoco a divinal clemencia.<br><br>
Ao dar-me as penas com que me torturas,<br>
Um thesouro me deste de venturas:<br>
Chama-se este thesouro a PACIENCIA.`},
  {nome: "A MAIOR DOR HUMANA", poema: 
    `Que imensas agonias se formaram<br>
sob os olhos de Deus! Sinistra hora<br>
em que o homem surgiu! Que negra aurora,<br>
que amargas condições o escravizaram!<br><br>

As mãos, que um filho amado amortalharam,<br>
erguidas buscam Deus. A Fé implora...<br>
E o céu, que respondeu? As mãos baixaram<br>
para abraçar a filha morta agora.<br><br>

Depois um pai em trevas vai sonhando,<br>
e apalpa as sombras deles onde os viu<br>
nascer, florir, morrer! Desastre infando!<br><br>

Ao teu abismo, pai, não vão confortos...<br>
És coração que a dor empederniu,<br>
sepulcro vivo de dois filhos mortos.`},
  {nome: "COMÉDIA HUMANA", poema: 
    `Literatos! Chorai-me, que eu sou digno<br>
Da vossa gemebunda e velha táctica!<br>
Se acaso tendes crimes em gramática,<br>
Farei que vos perdoe o Deus benigno.<br><br>

Demais conheço a prosa inflada, enfática,<br>
Com que chorais os mortos; e o maligno<br>
Desafeto aos que vivem… Não me indigno…<br>
Sei o que sois em teoria e em prática.<br><br>

Quando o avô desta vã literatura<br>
Garret, era levado á sepultura,<br>
Viu-se a imprensa verter prantos sem fim…<br><br>

Pois seis dos literatos mais magoados,<br>
Saíram, nessa noite embriagados,<br>
Da crapulosa tasca do Penim.`},
];

function openMenu(){
  ul.classList.add('open');
}
function closeMenu(){
  ul.classList.remove('open');
}

async function delay(timeDelay){
    return new Promise(resolve => setTimeout(resolve, timeDelay));
}

async function girarPoema(){
  $(`#poema`).innerHTML = "";
  let rand = Math.floor(Math.random() * poema.length)
  for(i = 0; i <= rand; i++){
    $("#nomePoema").innerHTML = poema[i].nome.toUpperCase();
    await delay(100);
  }
  i = Math.round(Math.random() * 7);
  console.log(i);
  console.log(poema[i].nome);
  $(`#nomePoema`).innerHTML = poema[i].nome.toUpperCase();
  $("#nomePoema").style.color = "Green";
  $(`#poema`).innerHTML = poema[i].poema;
  await delay(200);
  $("#nomePoema").style.color = "Black";
  console.log(poema[1].poema);
  
}