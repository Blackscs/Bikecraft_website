import { createEffect, createSignal, Show } from "solid-js";

interface Props {
  questionContent: string;
  colored: boolean;
  responseContent: string;
}

const [recentRef, setRecentRef] = createSignal();

export default function Question(props: Props) {
  const [isOpen, setIsOpen] = createSignal(false);
  let refer;

  createEffect(() => {
   (refer == recentRef()) ? setIsOpen(true) : setIsOpen(false)
  });

  const changeState = () => {
    setRecentRef(refer)
  };

  return (
    <>
      <li
        ref={refer}
        class={`${
          props.colored ? "bg-gray-100" : "bg-opacity-0"
        } flex gap-2 poppins-semibold text-lg p-5 flex-col`}
      >
        <button
          onClick={changeState}
          class="flex justify-between w-full items-center"
        >
          <span class="flex gap-3 items-center justify-center">
            <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
            {props.questionContent}
          </span>

          <Show
            when={isOpen()}
            fallback={<img src="src/assets/icons/toggle_list_closed.svg" />}
          >
            <img src="src/assets/icons/toggle_list_open.svg" />
          </Show>
        </button>

        <p
          class={`${
            isOpen()
              ? "opacity-60 translate-y-0 h-auto"
              : "opacity-0 -translate-y-5 h-0"
          } ml-4 overflow-hidden flex gap-1.5 transition-all duration-100 ease-in-out`}
        >
          {props.responseContent}
        </p>
      </li>
    </>
  );
}
