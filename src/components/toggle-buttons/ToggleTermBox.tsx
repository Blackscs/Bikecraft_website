import { createSignal, Show } from "solid-js";

export default function ToggleBox() {
  const [isToggle, setIsToggle] = createSignal();

  const changeState = () => setIsToggle(!isToggle());
  
  return (
    <>
      <button onclick={changeState} class="w-6 h-6 bg-gray-100 rounded-md flex justify-center items-center border border-gray-200">
        <Show when={isToggle()}>
          <img src="src/assets/icons/icon-detail.svg" alt="item correct" />
        </Show>
      </button>
    </>
  );
}
