import { MdOutlineCheckCircle } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

type ItemProps = {
  label: string;
  checked?: boolean;
  onClick?: () => void;
};

function FilterItem(props: ItemProps) {
  return (
    <button
      onClick={props.onClick}
      className="flex flex-row items-center flex-1 bg-slate-800 px-3 py-1 rounded-full hover:bg-slate-600"
    >
      {props.checked ? (
        <MdOutlineCheckCircle className="mr-3 text-xl" />
      ) : (
        <MdOutlineRadioButtonUnchecked className="mr-3 text-xl" />
      )}
      {props.label}
    </button>
  );
}

type Props = {
  filter: "all" | "completed" | "uncompleted";
  setFilter: (filter: "all" | "completed" | "uncompleted") => void;
};

export function Filters(props: Props) {
  return (
    <div className="flex flex-row w-full gap-1 mt-4 text-white text-lg">
      <FilterItem
        label="All"
        checked={props.filter === "all"}
        onClick={() => props.setFilter("all")}
      />
      <FilterItem
        label="Pending"
        checked={props.filter === "uncompleted"}
        onClick={() => props.setFilter("uncompleted")}
      />
      <FilterItem
        label="Completed"
        checked={props.filter === "completed"}
        onClick={() => props.setFilter("completed")}
      />
    </div>
  );
}
