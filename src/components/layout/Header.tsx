import { createBreakpoints } from "@solid-primitives/media";
import { A } from "@solidjs/router";
import { createSignal, Show } from "solid-js";

const breakpoints = {
  md: "768px"
}

export default function Header() {
  const [isOpen, setIsOpen] = createSignal(false);
  const changeState = () => setIsOpen(!isOpen());

  const matches = createBreakpoints(breakpoints);

  return (
    <header class="bg-black px-10">
      <div class="max-w-screen-xl h-28 flex mx-auto items-center poppins-regular justify-between">
        <A href="/">
          <img src="/assets/logos/logo.svg" alt="logo bikcraft" class="w-32" />
        </A>

        <div>
          <button onClick={changeState} class="flex md:hidden">
            <Show
              when={isOpen()}
              fallback={
                <img
                  src="/assets/icons/menu/menu_closed.svg"
                  alt="icon menu closed"
                  class="w-8"
                />
              }
            >
              <img
                src="/assets/icons/menu/menu_opened.svg"
                alt="icon menu opened"
                class="w-8"
              />
            </Show>
          </button>
          <nav class={`${isOpen() && !matches.md ? "absolute left-0 right-0 top-20 bg-black z-10 py-10" : ""} list-none items-center bg-black`}>
            <ul class={`${isOpen() && !matches.md ? "grid-cols-1 place-items-center grid bg-black" : "hidden"} md:grid gap-12 text-xl text-white md:grid-cols-3`}>
              <A href="/bikes" 
              activeClass="border-b-2 border-b-amber-400"
              onClick={changeState}
              end
              >
                Bicicletas
              </A>
              <A
                href="/insurance"
                activeClass="border-b-2 border-b-amber-400"
                onClick={changeState}
                end
              >
                Seguros
              </A>
              <A
                href="/contact"
                activeClass="border-b-2 border-b-amber-400"
                onClick={changeState}
                end
              >
                Contatos
              </A>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
