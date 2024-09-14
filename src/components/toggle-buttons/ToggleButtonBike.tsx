import { createEffect, createSignal, ParentProps, Show } from "solid-js";

interface Props extends ParentProps {
  srcImage: string;
  price: string;
}

function Detail(props: { srcImage: string }) {
  return (
    <>
      <div class="flex justify-between items-center mt-5">
        <div class="flex flex-col gap-2">
          <div class="text-black opacity-80 flex poppins-medium text-sm gap-2">
            <img
              class="w-4"
              src="/assets/icons/bike_icon.svg"
              alt="Icon bike"
            />
            <span class="text-xs">Motor Elétrico</span>
          </div>
          <div class="text-black opacity-80 flex poppins-medium text-sm gap-2">
            <img
              class="w-4"
              src="/assets/icons/waves_icon.svg"
              alt="Icon bike"
            />
            <span class="text-xs">Fibra de Carbono</span>
          </div>
          <div class="text-black opacity-80 flex poppins-medium text-sm gap-2">
            <img
              class="w-4"
              src="/assets/icons/velocity_icon.svg"
              alt="Icon bike"
            />
            <span class="text-xs">40 Km/h</span>
          </div>
          <div class="text-black opacity-80 flex poppins-medium text-sm gap-2">
            <img
              class="w-4"
              src="/assets/icons/crosshair_icon.svg"
              alt="Icon bike"
            />
            <span class="text-xs">Rastreador</span>
          </div>
        </div>
        <div class="h-24 flex w-36 bg-red-400 rounded-lg overflow-hidden">
          <img
            class="object-cover h-full w-full"
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
        } gap-4 pl-5 pr-5 py-3 poppins-semibold text-lg rounded-md hover:opacity-90`}
      >
        <div id="nimbus-stark" class="flex relative items-center gap-2 w-full">
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
            <span class="absolute poppins-medium text-base end-0">
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
