import { ParentProps } from "solid-js";

interface Props extends ParentProps {
  color: string | "gold" | "gray";
}

export default function Button(props: Props) {
  return (
    <>
      <button
        class={`${props.color == "gold" && "bg-amber-400"} ${
          props.color == "gray" && "bg-white/20 text-white/50"
        } flex px-7 py-4 poppins-semibold rounded-md text-slate-900 items-center gap-4 hover:opacity-90 text-xs w-full sm:max-w-52 sm:text-sm justify-center`}
      >
        {props.children}
      </button>
    </>
  );
}
