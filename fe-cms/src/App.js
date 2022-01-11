import React, { useEffect, useState } from "react";
import Canva from "./components/Canva";
import ContentBar from "./components/ContentBar";
//import MockData from "./data";
import GetTitulos from "./utils/GetTitulos";

const axios = require("axios");

function App() {
  //Create the api later

  const [conteudo, setConteudo] = useState([{ titulo: "", conteudo: "" }]);
  const [editingNow, setEditingNow] = useState(conteudo[0]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/post");
        setEditingNow(data[0]);
        setConteudo(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  // State of the post beeing edited

  const createNewPostComponent = () => {
    //await axios.post("/post", )
    let novo = [
      ...conteudo,
      { titulo: "New post!", conteudo: "New frontiers, new opportunities" },
    ];
    setConteudo(novo);
  };

  const clickedChild = (e) => {
    const ArrayOftitulos = GetTitulos(conteudo);

    const titulosDuplicados = ArrayOftitulos.filter(
      (item) => item === editingNow.titulo
    );

    if (titulosDuplicados.length > 1) {
      console.log("deu rui men");
      return;
    }

    setEditingNow(conteudo[e]);
  };

  const postFoiEditado = (postEditado) => {
    let novo = [...conteudo];
    novo[conteudo.indexOf(editingNow)] = postEditado;
    setEditingNow(postEditado);
    setConteudo(novo);
  };

  return (
    <div className=" h-screen w-screen overflow-hidden flex flex-row">
      <ContentBar
        conteudo={conteudo}
        clickedChild={clickedChild}
        NewPostComponentCreated={createNewPostComponent}
      />
      <Canva postSendoEditado={editingNow} postFoiEditado={postFoiEditado} />
    </div>
  );
}

export default App;
