let professionWow = [
  {
    title: "Esfolamento",
    description: "Permite que os jogadores coletem couro, peles e escamas esfolando certos mobs (feras, bestas demoníacas, dragonkin, silithid, alguns nerubians e, muito raramente, humanoides). Nem todos os mobs de cada tipo podem ser esfolados, por exemplo, a maioria dos pássaros não pode ser esfolada, apesar de serem bestas. Couro, peles e escamas são usados ​​para trabalhos em couro. Couro também é usado para algumas receitas de ferraria, engenharia e alfaiataria.",
    img: "https://www.method.gg/images/guides/articles/17082483-the-war-within-leatherworking-profession-leveling-guide.jpg"
  },
  {
    title: "Herborismo",
    description: "É uma profissão de coleta que permite aos jogadores encontrar e colher ervas de nós de recursos vegetais espalhados pelo mundo. Enquanto algumas ervas podem ser usadas em outras habilidades comerciais, a grande maioria é usada para Alquimia e Inscrição. Herbalismo, também chamado de medicina botânica ou fitomedicina, refere-se ao uso de sementes, frutos, raízes, folhas, cascas ou flores de uma planta para fins medicinais, mas o jogo não adere estritamente a essa definição.",
    img: "https://www.method.gg/images/guides/articles/1708246-the-war-within-herbalism-profession-leveling-guide.jpg"
  },
  {
    title: "Mineração",
    description: "A mineração permite encontrar e minas minérios, pedras e gemas cruas de nós de recursos e certas multidões (veja a pele de minério) espalhadas por todo o mundo. É uma das principais profissões. Os materiais da mineração e os itens que os mineradores podem criar a partir deles são reagentes necessários para receitas de outras profissões.",
    img: "https://www.method.gg/images/guides/articles/1708240-the-war-within-mining-profession-leveling-guide.jpg"
  },
  {
    title: "Alfaiataria",
    description: "A alfaiataria permite que os jogadores cortem e tenham vários pedaços de pano em armaduras, bolsas, camisas e outros itens de pano. Os alfaiates desempenham um papel especialmente importante nas guildas porque podem criar sacolas para toda a guilda, desde que os membros da guilda coloquem os ingredientes adequados. Os alfaiates são responsáveis ​​por criar itens de pano para as aulas de uso de tecido: magos, abarriformas e padres. Eles ocasionalmente fazem itens para outras classes, como mantos ou spellthread para calças. Eles também fazem camisas decorativas. Os alfaiates também podem criar equipamentos especiais de pano, o que exige que o usuário tenha uma habilidade de alfaiataria de alto nível para usar o item, bem como uma montagem especial de alfaiataria.",
    img: "https://www.method.gg/images/guides/articles/17082441-the-war-within-tailoring-profession-leveling-guide.jpg"
  },
  // ... Adicione os demais objetos para as outras profissões
  {
    title: "Couraria",
    description: "A profissão de Couraria permite que os jogadores utilizem o couro coletado através da profissão de esfola para criar uma variedade de itens, incluindo capas, armaduras de couro e malha e kits de armadura. A armadura produzida pela Couraria é principalmente de uso para as classes que usam couro e malha: druida, caçador, xamã, monge e ladino.",
    img: "https://www.method.gg/images/guides/articles/17082458-the-war-within-leatherworking-profession-leveling-guide.jpg"
  },
  {
    title: "Alquimia",
    description: "É uma profissão primária que mistura ervas encontradas por Herbalismo e às vezes outros reagentes para gerar elixires, poções, óleos, frascos e caldeirões com uma variedade de efeitos, bem como transmutar minerais, gemas e elementais. Concocções podem ser feitas para restaurar saúde e mana, conceder invisibilidade temporária, conceder boa sorte temporária por meio de busca de tesouros, alterar temporariamente a aparência, melhorar temporariamente as estatísticas e muito mais.",
    img: "https://www.method.gg/images/guides/articles/17082433-the-war-within-alchemy-profession-leveling-guide.jpg"
  },
  {
    title: "Ferraria",
    description: "É uma profissão e é a arte de forjar itens de metais, minérios e outros bens comerciais. Os ferreiros utilizam barras de metal desenterradas e fundidas pela profissão de mineração, juntamente com vários bens comerciais e mágicos para produzir suas mercadorias.",
    img: "https://www.method.gg/images/guides/articles/1708249-the-war-within-blacksmithing-profession-leveling-guide.jpg"
  },
  {
    title: "Joalheria",
    description: "É uma profissão que foi introduzida na expansão The Burning Crusade. Os jogadores podem fazer anéis, bugigangas, colares e estátuas, bem como cortar gemas para itens com soquetes. Estatuetas são itens exclusivos para joalheiros e são um tipo de bugiganga que é vinculada ao ser retirada. Especial em Wrath of the Lich King são gemas exclusivas para joalheiros, que têm bônus de estatísticas que excedem as gemas padrão; elas são cortes variados de olho de dragão e três gemas exclusivas para joalheiros podem ser equipadas ao mesmo tempo.",
    img: "https://www.method.gg/images/guides/articles/17082465-the-war-within-jewelcrafting-profession-leveling-guide.jpg"
  },
  {
    title: "Encantamento",
    description: "É uma profissão primária na qual os personagens usam fórmulas mágicas para conceder aumento permanente a armaduras, armas e outros itens. Receitas de encantamento exigem o uso de ingredientes especiais de Encantamento que podem ser coletados desencantando itens de qualidade incomum ou melhor ou encontrados como saque. Usando esses ingredientes, os encantadores podem tornar os itens mais poderosos adicionando um bônus de estatística como força ou intelecto ou muitas outras opções.",
    img: "https://www.method.gg/images/guides/articles/17082459-the-war-within-enchanting-profession-leveling-guide.jpg"
  },
  {
    title: "Escrivania",
    description: "É uma profissão que permite aos jogadores criar glifos, pergaminhos e encantamentos, assim como vários itens como Cartas de Darkmoon e tomos secundários. Inscrição inclui uma habilidade coleta, Habilidade de moagem, permitindo que os escribas criem materiais básicos a partir de ervas de forma similar ao Inv enchant disenchant do Encantamento e ao Inv misc gem bloodgem 01 do Joalheiro.",
    img: "https://www.method.gg/images/guides/articles/17082480-the-war-within-inscription-profession-leveling-guide.jpg"
  },
  {
    title: "Engenharia",
    description: "é uma profissão de artesanato primária que pode criar muitos itens úteis, únicos e incríveis, assim como lixo (mas frequentemente lixo explosivo!). Engenheiros podem criar itens úteis para geralmente todas as classes para serem usados ​​em PvE ou PvP. Para contrabalançar essa utilidade, a maioria dos itens criados por engenharia requer habilidade de engenharia para uso, e muitos desses itens vêm com uma chance de tiros pela culatra inesperados com resultados frequentemente hilários. Caçadores em particular veem muito uso para armas e miras projetadas.",
    img: "https://www.method.gg/images/guides/articles/17082434-the-war-within-engineering-profession-leveling-guide.jpg"
  },
  {
    title: "Culinária",
    description: "É uma profissão secundária que permite aos jogadores combinar vários ingredientes como peixe ou carne em comidas ou bebidas deliciosas que podem ser consumidas para restaurar vida e mana, como também para conceder bônus de combate. Essa habilidade é frequentemente casada com Pesca, já que aumentando o nível desse último sempre fornece os materiais necessários para Culinária.",
    img: "https://www.method.gg/images/guides/articles/17082478-the-war-within-cooking-profession-leveling-guide.jpg"
  },
  {
    title: "Pesca",
    description: "É uma profissão secundária. Ela permite que aventureiros pesquem vários objetos, principalmente peixes e outras criaturas aquáticas, de água, lava e até mercúrio líquido. Muitos desses peixes podem ser consumidos imediatamente para uma quantidade de saúde restaurada, e também podem ser dados a animais de estimação caçadores. No entanto, o verdadeiro valor dessa recompensa escamosa vem quando combinada com a profissão de Cozinhar; peixes podem ser preparados e combinados em inúmeras receitas diferentes, fornecendo benefícios restauradores muito maiores, bem como uma coleção de potenciais buffs de estatísticas. Outros peixes mais raros são usados ​​em receitas de Alquimia ou fornecem benefícios mais estranhos, como transformação em diferentes aparências e até mesmo a convocação de mobs raros.",
    img: "https://www.method.gg/images/guides/articles/17082411-the-war-within-fishing-profession-leveling-guide.jpg"
  },
  {
    title: "Arqueologia",
    description: "Introduzida na expansão Cataclysm, essa profissão oferece muito conteúdo interessante e uma chance de ver o que tem embaixo de Azeroth--literalmente. Arqueologistas devem viajar ao redor do mundo, procurando por fragmentos de artefatos antigos, muitos dos quais possuem uma pitada de história interessante anexada.",
    img: "https://wow.zamimg.com/uploads/guide/header/2137.jpg?1561588891"
  },
];