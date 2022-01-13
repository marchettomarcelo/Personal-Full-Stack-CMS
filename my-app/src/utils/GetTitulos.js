export default function GetTitulos(conteudo) {
  const Titulos = conteudo.map((post) => {
    return post.titulo;
  });
  return Titulos;
}
