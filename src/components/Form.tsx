import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
type FormProps = {
  onSubmit: (text: string) => void;
};

export function Form(props: FormProps) {
  const [state, setState] = useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (state) {
            props.onSubmit(state);
            setState("");
          }
        }}
      >
        <div className="flex flex-row w-full gap-4 mt-4">
          <input
            className="h-[50px] flex-1 rounded-lg p-3 text-lg outline-none"
            onChange={(event) => setState(event.target.value)}
            value={state}
          />
          <button
            className="h-[50px] pl-4 pr-4 bg-slate-800 rounded-lg font-bold"
            type="submit"
          >
            <FaPlus className="text-white text-2xl" />
          </button>
        </div>
      </form>
    </>
  );
}
