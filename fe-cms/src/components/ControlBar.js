export default function Controls() {
  return (
    <div className="flex flex-col xl:flex-row justify-between w-11/12 m-2">
      <div
        id="Controls"
        className="border-4 bg-green-400 border-black border-solid 
          rounded shadow-lg  hover:bg-green-500 
          active:bg-green-600 cursor-pointer flex-grow p-3"
      >
        <h3 id="Controls" className="text-2xl font-bold">
          Adicionar post
        </h3>
      </div>

      <div
        id="save"
        className="border-4 bg-blue-400 border-black border-solid 
           rounded shadow-lg  hover:bg-blue-500 
          active:bg-blue-600 cursor-pointer flex-grow mt-2 p-3 xl:ml-2 xl:mt-0"
      >
        <h3 id="save" className="text-2xl font-bold">
          Salvar Mudanças
        </h3>
      </div>
    </div>
  );
}
