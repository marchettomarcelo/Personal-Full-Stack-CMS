import { useEffect, useRef, useState } from "react";
import ContentItem from "./ContentItem";
import Controls from "./ControlBar";

export default function ContentBar(props) {
  // receives the content from parent component

  const [conteudo, setConteudo] = useState({ titulo: "", conteudo: "" });

  useEffect(() => {
    setConteudo(props.conteudo);
  }, [props.conteudo]);

  const messagesEndRef = useRef(null);

  //------------------------Create new post function------------------------
  const CreateNewPost = async () => {
    await messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    let novo = [
      ...conteudo,
      { titulo: "New post!", conteudo: "New frontiers, new opportunities" },
    ];
    setConteudo(novo);

    //send new data to parent component
    props.createNewPostComponent(novo);
    await messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // alerts the parent sends the id of the child if clicked
  const HandleClick = async (e) => {
    if (e.target.id === "Controls") {
      CreateNewPost();
    } else if (e.target.id === "save") {
      console.log(conteudo);
    } else if (e.target.id) {
      return props.clickedChild(e.target.id);
    }
  };

  return (
    <div
      className="flex flex-col justify-betweens w-3/12 h-11/12 m-2"
      onClick={HandleClick}
    >
      <Controls />

      <div className="overflow-y-auto w-full overscroll-non">
        {Array.from(conteudo).map((post, id) => {
          return (
            <ContentItem
              id={id}
              key={id}
              titulo={post.titulo}
              conteudo={post.conteudo}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
