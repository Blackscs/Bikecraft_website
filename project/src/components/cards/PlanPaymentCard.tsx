import Button from "components/Button";
import { For, Show } from "solid-js";

interface Props {
  typePlanGold: boolean;
  details: string[];
}

export default function planPaymentCard(props: Props) {
  return (
    <>
      <div class="bg-black rounded-xl pt-14 pb-9 px-10 flex flex-col w-full max-w-screen-sm">
        <div class="w-full flex flex-wrap mx-auto">
          <div
            class={`${
              props.typePlanGold ? "text-yellow-400" : "text-zinc-400"
            } poppins-semibold text-4xl`}
          >
            <Show
              when={props.typePlanGold}
              fallback={<p class="text-4xl">PRATA</p>}
            >
              <p class="text-4xl">OURO</p>
            </Show>
          </div>

          <div class="ml-auto">
            <div class="text-white poppins-semibold text-xl sm:text-4xl">
              R$ {`${props.typePlanGold ? "299" : "199"}`}
              <p class="poppins-semibold text-xs text-slate-400 ml-auto">
                mensal
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2 justify-center h-full my-6">
          <For each={props.details}>
            {(detail) => (
              <li class="list-none flex gap-1 text-slate-50 roboto-medium text-base xl:text-lg">
                <img src="src/assets/icons/icon-detail.svg" alt="detail icon" />
                <p>{detail}</p>
              </li>
            )}
          </For>
        </div>

        <Button color={`${props.typePlanGold ? "gold" : "gray"}`}>
          INSCREVA-SE
        </Button>
      </div>
    </>
  );
}
