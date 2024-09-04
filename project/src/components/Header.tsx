import { A } from "@solidjs/router";

export default function Header() {
  return (
    <header class="bg-black">
      <div class="max-w-[1400px] h-28 flex mx-auto items-center poppins-regular justify-between">
        <A href="/">
          <img src="src/assets/logos/logo.svg" alt="logo bikcraft" />
        </A>
        <nav class="list-none ">
          <ul class="flex gap-12 text-xl leading-8 text-white">
            <A href="/Bikes" activeClass="border-b-2 border-b-amber-400" end>
              Bicicletas
            </A>
            <A
              href="/Insurance"
              activeClass="border-b-2 border-b-amber-400"
              end
            >
              Seguros
            </A>
            <A href="/Contact" activeClass="border-b-2 border-b-amber-400" end>
              Contatos
            </A>
          </ul>
        </nav>
      </div>
    </header>
  );
}
