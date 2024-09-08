import { For, Show } from "solid-js";

interface Props {
  typePlanGold: boolean;
  details: string[];
}

export default function planPaymentCard(props: Props) {
  return (
      <div class="bg-black rounded-xl pt-14 pb-9 px-14 flex flex-col">
        <div class="flex w-full justify-between">
          <div
            class={`${
              props.typePlanGold ? "text-yellow-400" : "text-zinc-400"
            } poppins-semibold text-4xl`}
          >
            <Show when={props.typePlanGold} fallback={<p>PRATA</p>}>
              <p>OURO</p>
            </Show>
          </div>

          <div>
            <div class="text-white poppins-semibold text-4xl">
              R$ {`${props.typePlanGold ? "299" : "199"}`}
            </div>
            <div class="w-full flex">
              <p class="poppins-semibold text-xs text-slate-400 ml-auto">
                mensal
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-5 justify-center h-full my-4">
          <For each={props.details}>
            {(detail) => (
              <li class="list-none flex gap-1 text-slate-50 roboto-medium text-lg">
                <img src="src/assets/icons/icon-detail.svg" alt="detail icon" />
                <p>{detail}</p>
              </li>
            )}
          </For>
        </div>
        <button
          class={`${
            props.typePlanGold
              ? "bg-amber-400 text-slate-900"
              : "bg-white/15 text-white/70"
          } mt-6 px-8 py-4 poppins-semibold text-lg rounded-md hover:opacity-90`}
        >
          INSCREVA-SE
        </button>
      </div>
  );
}
