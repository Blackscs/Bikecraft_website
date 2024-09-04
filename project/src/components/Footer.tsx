import { A } from "@solidjs/router";

export default function Footer() {
  return (
    <>
      <footer class="bg-black text-white w-full py-16">
        <div class="max-w-[1650px] flex mx-auto items-center poppins-regular justify-between">
          <div class="flex w-full justify-around">
            <div class="flex gap-x-56">
                {/* Imagem Bikcraft */}
              <div>
                <img src="src/assets/logos/logo.svg" alt="Bikcraft logo" />
              </div>
             {/* Contato e Logos */}
              <div class="flex flex-col">
                <div class="flex flex-col gap-3 mb-10">
                  <h1 class="mb-3 roboto-medium text-2xl">CONTATO</h1>
                  <span class="text-gray-300">+55 21 9999-9999</span>
                  <span class="mb-10 text-gray-300">contato@bikcraft.com</span>
                  <span class="text-gray-300">
                    Rua Ali Perto, 42 - Botafogo
                  </span>
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

            </div>
            <div class="flex flex-col gap-3">
              <h1 class="mb-3 roboto-medium text-2xl">INFORMAÇÕES</h1>
              <A href="/" class="hover:text-amber-400 text-gray-300">
                Bicicletas
              </A>
              <A href="/" class="hover:text-amber-400 text-gray-300">
                Seguros
              </A>
              <A href="/" class="hover:text-amber-400 text-gray-300">
                Contato
              </A>
              <A href="/" class="hover:text-amber-400 text-gray-300">
                Termos e Condições
              </A>
            </div>
          </div>
        </div>
        <div class="max-w-[1230px] mx-auto pt-10">
          <span>Bikcraft © Alguns direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}
