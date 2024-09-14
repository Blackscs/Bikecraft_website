import { A } from "@solidjs/router";

export default function Footer() {
  return (
    <>
      <footer class="bg-black text-white w-full px-10 grid grid-cols-1 text-center sm:text-left">
        <div class="mx-auto max-w-screen-2xl w-full py-16 grid grid-cols-1 gap-20 sm:gap-0 sm:grid-cols-3">
          {/* Imagem Bikcraft */}

         <img src="src/assets/logos/logo.svg" alt="Bikcraft logo" class="mx-auto"/>

          {/* Contato e Logos */}
          <div class="flex flex-col mx-auto">
            <div class="flex flex-col gap-3 mb-10">
              <h1 class="mb-3 roboto-medium text-2xl">CONTATO</h1>
              <span class="text-gray-300">+55 21 9999-9999</span>
              <span class="mb-10 text-gray-300">contato@bikcraft.com</span>
              <span class="text-gray-300">Rua Ali Perto, 42 - Botafogo</span>
              <span class="text-gray-300">Rio de Janeiro - RJ</span>
            </div>
            <div class="flex gap-5">
              <img
                src="src/assets/logos/social-media/instagram_footer.svg"
                alt="Instagram icon"
              />
              <img
                src="src/assets/logos/social-media/facebook_footer.svg"
                alt="Facebook icon"
              />
              <img
                src="src/assets/logos/social-media/youtube_footer.svg"
                alt="Youtube icon"
              />
            </div>
          </div>

          <div class="flex flex-col gap-3 mx-auto">
            <h1 class="mb-3 roboto-medium text-2xl">INFORMAÇÕES</h1>
            <A href="/" class="hover:text-amber-400 text-gray-300">
              Bicicletas
            </A>
            <A href="/insurance" class="hover:text-amber-400 text-gray-300">
              Seguros
            </A>
            <A href="/contact" class="hover:text-amber-400 text-gray-300">
              Contato
            </A>
            <A href="/" class="hover:text-amber-400 text-gray-300">
              Termos e Condições
            </A>
          </div>

          <div class="mx-auto pt-10">
            <span>Bikcraft © Alguns direitos reservados.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
