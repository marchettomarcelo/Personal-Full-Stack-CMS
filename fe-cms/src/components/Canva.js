import { useEffect, useState } from "react";

export default function Canva(props) {
  //State of the post being currently edited
  const [postCanva, setPostCanva] = useState({
    titulo: "",
    conteudo: "",
  });

  //Informing the canva component of the values of the post being edited
  useEffect(() => {
    setPostCanva(props.postSendoEditado);
  }, [props.postSendoEditado]);

  //notifiing parent component of changes on the current post
  const HandleChange = async (e) => {
    let novo = {
      ...postCanva,
      [e.target.id]: e.target.value,
    };
    await props.postFoiEditado(novo);
    setPostCanva(novo);
  };

  return (
    <div
      className="flex flex-col border-4 border-black border-solid 
    w-9/12 h-11/12 my-4 mr-4 rounded shadow-2xl p-4 gap-4"
    >
      <textarea
        className="text-5xl font-extrabold  p-2
        border border-solid border-gray-300 rounded
        focus:bg-white focus:border-gray-600 focus:outline-none
        transition
        ease-in-out"
        name="titulo"
        id="titulo"
        rows="2"
        value={postCanva.titulo}
        onChange={HandleChange}
      />
      <textarea
        className="text-2xl font-extrabold  p-2
        border border-solid border-gray-300 rounded
        focus:bg-white focus:border-gray-600 focus:outline-none
        transition
        ease-in-out"
        name="conteudo"
        id="conteudo"
        rows="5"
        onChange={HandleChange}
        value={postCanva.conteudo}
      />
    </div>
  );
}
