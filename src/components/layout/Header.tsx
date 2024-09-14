import { A } from "@solidjs/router";

export default function Header() {
  return (
    <header class="bg-black px-10">
      <div class="max-w-screen-xl h-28 flex mx-auto items-center poppins-regular justify-between">
        <A href="/">
          <img src="/assets/logos/logo.svg" alt="logo bikcraft" />
        </A>
        <nav class="list-none hidden sm:flex">
          <ul class="flex gap-12 text-xl leading-8 text-white">
            <A href="/bikes" activeClass="border-b-2 border-b-amber-400" end>
              Bicicletas
            </A>
            <A
              href="/insurance"
              activeClass="border-b-2 border-b-amber-400"
              end
            >
              Seguros
            </A>
            <A href="/contact" activeClass="border-b-2 border-b-amber-400" end>
              Contatos
            </A>
          </ul>
        </nav>
      </div>
    </header>
  );
}
