import { createEffect, createSignal, ParentProps, Show } from "solid-js";

interface Props extends ParentProps {
  srcImage: string;
  price: string;
}

interface Description {
  content: string;
  icon: string;
}

function Description(props: Description) {
  return (
    <div class="text-black opacity-80 poppins-medium text-sm gap-2 flex">
      <img class="max-w-3" src={props.icon} alt="Icon bike" />
      <span class="text-xs text-left">{props.content}</span>
    </div>
  );
}

function Detail(props: { srcImage: string }) {
  return (
    <>
      <div class="flex flex-col-reverse gap-3 max-w-screen-sm lg:justify-around lg:flex-row lg:items-center mt-5 mx-auto">
        <div class="grid gap-1 w-full mx-auto">
          <Description
            content="Motor elétrico"
            icon="/assets/icons/bike_icon.svg"
          />
          <Description
            content="Fibra de Carbono"
            icon="/assets/icons/waves_icon.svg"
          />
          <Description
            content="40 Km/h"
            icon="/assets/icons/velocity_icon.svg"
          />
          <Description
            content="Rastreador"
            icon="/assets/icons/crosshair_icon.svg"
          />
        </div>

        <div class="flex justify-center h-32 w-full">
          <img
            class="object-cover rounded-lg aspect-video"
            src={props.srcImage}
            alt="nimbus stark img"
          />
        </div>
      </div>
    </>
  );
}

const [refButton, setRefButton] = createSignal();

export default function ToggleButtonPlans(props: Props) {
  const [isOpen, setIsOpen] = createSignal(false);
  let refer: HTMLLIElement | undefined = undefined;

  createEffect(() => {
    setIsOpen(refer === refButton());
  });

  const changeState = () => {
    refer != refButton() ? setRefButton(refer) : setRefButton(null);
  };

  return (
    <>
      <button
        ref={refer}
        onclick={changeState}
        class={`${
          isOpen() ? "bg-white text-black" : "bg-white/20 text-white"
        } gap-4 pl-4 pr-4 py-3 poppins-semibold text-lg rounded-md hover:opacity-90 relative`}
      >
        <div id="nimbus-stark" class="flex items-center gap-2 w-full">
          <div
            class={`flex rounded-lg border border-gray-500 p-[5px] justify-center items-center`}
          >
            <Show when={isOpen()}>
              <img
                class="absolute"
                src="/assets/inner_chosen.svg"
                alt="chosen icon"
              />
            </Show>
          </div>
          {props.children}

          <Show when={isOpen()}>
            <span class="absolute poppins-medium text-base right-5 bottom-2 end-0 lg:top-3">
              R$ {props.price}
            </span>
          </Show>
        </div>

        <Show when={isOpen()}>
          <Detail srcImage={props.srcImage} />
        </Show>
      </button>
    </>
  );
}
