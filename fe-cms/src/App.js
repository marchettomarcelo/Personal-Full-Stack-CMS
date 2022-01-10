import React, { useState } from "react";
import Canva from "./components/Canva";
import ContentBar from "./components/ContentBar";
import MockData from "./data";

function App() {
  //Create the api later
  const [conteudo, setConteudo] = useState(MockData());

  // State of the post beeing edited
  const [editingNow, setEditingNow] = useState(conteudo[0]);

  const createNewPostComponent = (updatedContent) => {
    setConteudo(updatedContent);
  };

  const clickedChild = (e) => {
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
        createNewPostComponent={createNewPostComponent}
      />
      <Canva postSendoEditado={editingNow} postFoiEditado={postFoiEditado} />
    </div>
  );
}

export default App;
