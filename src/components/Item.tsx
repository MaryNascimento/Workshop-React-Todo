import { MdOutlineCheckCircle } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

export function Item(props: {
  text: string;
  completed: boolean;
  onClick: () => void;
  onDelete: () => void;
}) {
  return (
    <div
      onClick={props.onClick}
      className="flex flex-row min-h-[50px] w-full items-center cursor-pointer hover:bg-slate-600 bg-slate-800 mb-1 rounded-lg p-3"
    >
      {props.completed ? (
        <MdOutlineCheckCircle className="text-white text-3xl mr-3" />
      ) : (
        <MdOutlineRadioButtonUnchecked className="text-white text-3xl mr-3" />
      )}
      <label className="text-white text-xl flex-1">{props.text}</label>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Evita disparar o onClick da tarefa
          props.onDelete();
        }}
        className="text-red-500 ml-2"
      >
        Excluir
      </button>
    </div>
  );
}
