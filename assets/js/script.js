function search() {
  // Esta função é responsável por lidar com a funcionalidade de pesquisa.
  // Obtém uma referência ao elemento de seção HTML com o ID "searchResults".
  let section = document.getElementById('searchResults')
  let inputSearch = document.getElementById('inputSearch').value
  
  if ( !inputSearch ){
    section.innerHTML = '<p class="errorText container"> Nada foi encontrado</p>'
    return
  }

  inputSearch = inputSearch.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa em HTML.
  let results = ''
  let title = ''
  let type = ''
  // Itera sobre cada item de dados no array professionWow.
  for (let data of professionWow) {
    title = data.title.toLowerCase()
    type = data.type.toLowerCase()
    if (title.includes(inputSearch) || type.includes(inputSearch)) {
      // Concatena o código HTML para um único item de resultado de pesquisa à string results.
      results += `
      <div class="itemResult">
        <div class="itemImg">
          <img src="${data.img}">
        </div>
        <div class="itemResultInfo">
          <div class="title">
            <h2>${data.title}</h2>
          </div>
          <div class="description"> 
            <p>${data.description}</p>
          </div>
          <a href="https://www.wowhead.com/pt/skills/professions" target="_blank">Ver mais</a>
        </div>
      </div>
      `
    }
  }
  if (!results) {
    section.innerHTML = '<p class="errorText container">Nada foi encontrado. Procure por uma profissão ou pelo tipo da mesma</p>'
    return
  }
  // Define o conteúdo HTML interno da seção de resultados de pesquisa com o HTML gerado.
  section.innerHTML = results;
}
