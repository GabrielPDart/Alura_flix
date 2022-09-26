var filmeFavorito = ["https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg", "https://br.web.img2.acsta.net/medias/nmedia/18/91/54/04/20150812.jpg", "https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg", "https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg", "https://m.media-amazon.com/images/I/91pmBq4ZloL._AC_SL1500_.jpg"];
var nomeFilmeFavorito = ["The Matrix", "Shrek", "A viagem de Chihiro", "Pulp Fiction", "Baby Driver"];
var contador = filmeFavorito.length;
var alterar = false;

atualizarDropDown();

preencheBase();


function adicionarFilme() {
  contador = filmeFavorito.length;



  var consulta = [];
  var consultaFilme = [];
  let teste;

  consulta[contador] = document.getElementById("filme").value;
  consultaFilme[contador] = document.getElementById("nomeFilme").value;


  //comando para verificar se o conteudo termina com determinado campo
  if (consulta[contador].endsWith(".jpg") && (consultaFilme[contador] != "")) {
    if (confirm("Deseja Adicionar Filme?") == true) {
      filmeFavorito[contador] = document.getElementById("filme").value;
      nomeFilmeFavorito[contador] = document.getElementById("nomeFilme").value;
      alert("Filme Adicionado!");
    } else {
      document.getElementById("filme").value = "";
      document.getElementById("nomeFilme").value = "";
    }
  } else {
    alert("Endereço ou Nome do filme invalido");
  }

  document.getElementById("listaFilmes").innerHTML = ""

  preencheBase();

  atualizarDropDown();

  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";

}

function removerFilme() {

  for (var i = 0; i < filmeFavorito.length; i++) {

    if ((filmeFavorito[i] == document.getElementById("filme").value) || nomeFilmeFavorito[i] == document.getElementById("nomeFilme").value) {
      //splice realiza a remoção de um item do array, indicar posição e quantidade respectivamente
      filmeFavorito.splice(i, 1);
      nomeFilmeFavorito.splice(i, 1);
      alert("Filme Excluido!")

    }
  }

  document.getElementById("listaFilmes").innerHTML = ""

  for (var i = 0; i < filmeFavorito.length; i++) {
    adicionaImagemFilmes(filmeFavorito[i]);

  }



  atualizarDropDown();

  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";

}

function adicionaImagemFilmes(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML += elementoFilmeFavorito;

}

function converteMaiusculo() {
  var nome = document.getElementById("nomeFilme");
  nome.value = nome.value.toUpperCase();


}

function preencheBase() {
  for (var i = 0; i < filmeFavorito.length; i++) {
    adicionaImagemFilmes(filmeFavorito[i]);

  }
}

function preencheListaDropDown() {
  let nome = document.getElementById("nomeFilme");

  if (nome.value === "" || nome.value !== "") {
    document.getElementById("myDropdown").classList.toggle("show");
  }
}

function preencheDropDown() {

  let listaNomeFilme = "";

  let filter, nome = document.getElementById("nomeFilme");
  let a = [];

  if (nome.value !== "" && alterar === false) {
    document.getElementById("myDropdown").classList.toggle("show");
    alterar = true;

  } else if (nome.value === "" && alterar === true) {
    document.getElementById("myDropdown").classList.toggle("show");
    alterar = false;

  }

  filter = nome.value.toUpperCase();

  a = nomeFilmeFavorito;

  for (i = 0; i < a.length; i++) {
    txtValue = a[i];
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      listaNomeFilme += "<a style='color: white;'>" + a[i].toUpperCase() + "</a>";
    }
    document.getElementById("myDropdown").innerHTML = listaNomeFilme;
  }
}

function atualizarDropDown() {

  let listaNomeFilme = "";


  for (let i = 0; i < nomeFilmeFavorito.length; i++) {
    listaNomeFilme += "<a style='color: white;'>" + nomeFilmeFavorito[i].toUpperCase() + "</a>";
  }

  document.getElementById("myDropdown").innerHTML = listaNomeFilme;
}








