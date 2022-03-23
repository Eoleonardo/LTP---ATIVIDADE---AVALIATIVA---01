class Noticia{
  constructor(titulo,data_de_publicacao,resumo,texto) {
    this.titulo = titulo;
    this.data_de_publicacao = data_de_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }
  mostrarNoticia(){
return this.titulo + "\n" + this.data_de_publicacao  + "\n"+"\n" + this.resumo  + "\n"+"\n" + this.texto  
}
}

let noticia = new Noticia("IFMS Noticias NEWS","01/04/22","Parada de ônibus no instituto do ifms ","Por um motivo ainda não identificado os transportes do instituto ifms pararam de funcionar devido essa situação vários alunos ficaram sem ir para escola.")
console.log(noticia.mostrarNoticia())