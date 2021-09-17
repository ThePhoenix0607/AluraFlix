var listaFilmes = [
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkwjHgDOVlqLiHacabPXjWv3iS_nP5pg7wbLB_0SzS3YisRnNZ",
    "https://s2.glbimg.com/bJG19PAeq1Gf8lmi_wR_J8pHvYQ=/362x536/https://s2.glbimg.com/AR6ykxIgco81zYnoAaBMPKB6lIQ=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/p/M/erorN0TzaHulD5JB8ztg/2019-653-mk-filmes-paramount-sexo-sem-compromisso-poster.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/a/ad/One_Day_Poster.jpg",
    "https://macmagazine.com.br/wp-content/uploads/2013/09/26-filme.jpg",
    "https://br.web.img3.acsta.net/pictures/17/09/11/23/53/5940465.jpg",
    "https://m.media-amazon.com/images/I/91rmyotiqHL._AC_SY550_.jpg",
    "https://a-static.mlcdn.com.br/1500x1500/dvd-brilho-eterno-de-uma-mente-sem-lembrancas-universal/theoriginals/4769392013/94bdaefdfa0ffe263c308c6b6bb0d04d.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/95/48/11/20407384.jpg",
    "https://br.web.img2.acsta.net/medias/nmedia/18/87/13/77/19872396.jpg",
    "https://br.web.img3.acsta.net/pictures/17/05/31/14/50/347462.jpg",
    "https://i.pinimg.com/236x/76/ca/c3/76cac38d6f19dfc268babd6b55c0d606--ely-naomi.jpg",
    "https://br.web.img2.acsta.net/pictures/17/08/28/12/48/125534.jpg",
    "https://s2.glbimg.com/jUy8t0c-5EEneyLkLPAUDvr05So=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/L/O/EfXB45RlGY6uznB5AXAQ/foto23cul-301-dvd3-d30.jpg",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGwKvL_jztJg_JZZ_xY1gv9CNGJkFEFi9EB_ZyoQCpkjOdC0jf"]

/*// listaFilmes.push("Harry Potter");




 // esperimente o h1, strong
 document.write("<p>" + listaFilmes[0] + "</p>");
 document.write("<p>" + listaFilmes[1] + "</p>");
 document.write("<p>" + listaFilmes[2] + "</p>");
 document.write("<p>" + listaFilmes[3] + "</p>");

 for (var indice = 0; indice < listaFilmes.length; indice++) {
     document.write("<p>" + listaFilmes[indice] + "</p>");
 }

for (var i = 0; i < listaFilmes.length; i++) { 
    document.write("<img src=" + listaFilmes[i] + ">")
}*/

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".jpg")) {
        listarFilmes(filmeFavorito);
    }else{
        console.error("Endereço de filme inválido")
    }
    
    document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.querySelector("#listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}