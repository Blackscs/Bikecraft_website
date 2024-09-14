import { createEffect, createSignal, Show } from "solid-js";

interface Props {
  questionContent: string;
  colored: boolean;
  responseContent: string;
}

const [recentRef, setRecentRef] = createSignal<null | HTMLLIElement>();

export default function Question(props: Props) {
  const [isOpen, setIsOpen] = createSignal(false);
  let refer: HTMLLIElement | undefined = undefined;
  
  createEffect(() => {
    setIsOpen(refer === recentRef());
  });

  const changeState = () => {
    refer !== recentRef() ? setRecentRef(refer) : setRecentRef(null);
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
          <span class="flex gap-3 items-center justify-center text-xs md:text-base">
            <img src="/assets/icons/topic_icon.svg" alt="topic icon" />
            {props.questionContent}
          </span>

          <Show
            when={isOpen()}
            fallback={<img src="/assets/icons/toggle_list_closed.svg" />}
          >
            <img src="/assets/icons/toggle_list_open.svg" />
          </Show>
        </button>

        <p
          class={`${
            isOpen()
              ? "opacity-60 translate-y-0 h-auto"
              : "opacity-0 -translate-y-5 h-0"
          } ml-4 overflow-hidden transition-all duration-100 ease-in-out flex gap-3 items-center justify-center text-xs md:text-base`}
        >
          {props.responseContent}
        </p>
      </li>
    </>
  );
}
