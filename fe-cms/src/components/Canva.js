import { useEffect, useState } from "react";

export default function Canva(props) {
  const [postCanva, setPostCanva] = useState({
    titulo: "",
    conteudo: "",
  });

  useEffect(() => {
    setPostCanva(props.postSendoEditado);
  }, [props.postSendoEditado]);

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
    w-9/12 h-11/12 my-4 mr-4 rounded shadow-2xl p-4 gap-2"
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

// <form className="flex flex-col" onChange={HandleChange}>
//   <input
//     id="titulo"
//     className="text-5xl font-extrabold m-4"
//     type="text"
//     value={postCanva.titulo}
//   />

//   <input
//     id="conteudo"
//     type="text"
//     className="text-2xl font-extrabold m-4"
//     value={postCanva.conteudo}
//   />
// </form>;
