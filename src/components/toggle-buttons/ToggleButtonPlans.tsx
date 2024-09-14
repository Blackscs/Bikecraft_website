import { createEffect, createSignal, ParentProps, Show } from "solid-js";

const [refButton, setRefButton] = createSignal();

export default function ToggleButtonPlans(props: ParentProps) {
  const [isToggle, setIsToggle] = createSignal(false);
  let refer: HTMLLIElement | undefined = undefined;

  createEffect(() => {
    setIsToggle(refer === refButton())
  })

  const changeState = () => {
    refer != refButton() ? setRefButton(refer) : setRefButton(null)
  } 

  return (
    <>
      <button
        ref={refer}
        onclick={changeState}
        class={`${
          isToggle() ? "bg-white text-black" : "bg-white/20 text-white"
        } flex items-center gap-4  pl-5 pr-10 py-3 poppins-semibold text-lg rounded-md hover:opacity-90 relative`}
      >
        <div
          class={`flex rounded-lg border border-gray-500 p-[5px] justify-center items-center`}
        >
          <Show when={isToggle()}>
            <img
              class="absolute"
              src="/assets/inner_chosen.svg"
              alt="chosen icon"
            />
          </Show>
        </div>
        {props.children}
      </button>
    </>
  );
}
