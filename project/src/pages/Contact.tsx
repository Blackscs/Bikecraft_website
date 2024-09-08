import Section from "components/layout/Section";

export default function Contact() {
  return (
    <>
      <Section>
        <div class="py-10">
          <p class="roboto-medium text-2xl leading-8 text-white opacity-70 mb-3">
            RESPOSTAS EM ATÉ 24H
          </p>
          <p class="text-7xl poppins-semibold text-white">
            nosso contato<span class="text-amber-400">.</span>
          </p>
        </div>
        <div class="absolute bg-black/90 top-0 bottom-0 left-0 right-0 -z-10"></div>
      </Section>

      <Section>
        <div class="grid grid-cols-3 max-w-screen-xl mx-auto shadow-md bg-none">
          <div
            id="first-col"
            class="col-span-1 bg-black flex flex-col gap-12 p-20 rounded-l-lg"
          >
            <div class="w-full">
              <h1 class="poppins-semibold text-base font-bold text-white">
                Loja Online
              </h1>
            </div>

            <div class="roboto-regular text-base flex flex-col bg-black text-gray-300 gap-14">
              <div class="flex gap-1">
                <img
                  src="src/assets/icons/locale_icon.svg"
                  alt="locale icon"
                  class="self-start"
                />
                <div>
                  <p>Rua Ali Perto, 35</p>
                  <p>Rio de Janeiro - RJ </p>
                  <p>Brasil - Terra - Via Láctea</p>
                </div>
              </div>

              <div class="flex gap-1">
                <img
                  src="src/assets/icons/mail_icon.svg"
                  alt="mail icon"
                  class="self-start"
                />
                <div>
                  <p>vendas@bikcraft.com</p>
                  <p>assistencia@bikcraft.com</p>
                </div>
              </div>

              <div class="flex gap-1">
                <img
                  src="src/assets/icons/telephone_icon.svg"
                  alt="telephone icon"
                  class="self-start"
                />
                <p>+55 21 9999-9999</p>
              </div>
            </div>

            <div class="flex gap-10">
              <img
                src="src/assets/logos/social-media/instagram_footer.svg"
                alt="instagram logo"
              />
              <img
                src="src/assets/logos/social-media/facebook_footer.svg"
                alt="facebook logo"
              />
              <img
                src="src/assets/logos/social-media/youtube_footer.svg"
                alt="youtube logo"
              />
            </div>
          </div>

          <div
            id="second-col"
            class="col-span-2 px-20 h-full bg-white p-20 flex flex-col gap-2 rounded-r-lg"
          >
            <div class="grid grid-cols-2 gap-20">
              <div class="flex flex-col w-full poppins-medium text-base">
                <label>Nome</label>
                <input
                  class="border-none bg-gray-100 rounded-md outline-none focus:ring-0"
                  type="text"
                />
              </div>

              <div class="flex flex-col w-full poppins-medium text-base">
                <label>Telefone</label>
                <input
                  class="border-none bg-gray-100 rounded-md outline-none focus:ring-0"
                  type="text"
                />
              </div>
            </div>
            <div class="flex flex-col w-full poppins-medium text-base">
              <label>Email</label>
              <input
                class="border-none bg-gray-100 rounded-md outline-none focus:ring-0"
                type="email"
              />
            </div>
            <div class="flex flex-col w-full poppins-medium text-base">
              <label>Mensagem</label>
              <textarea class="border-none bg-gray-100 rounded-md h-40 outline-none focus:ring-0"></textarea>
            </div>
            <div>
              <button class="bg-amber-400 px-8 py-4 mt-5 poppins-semibold text-lg rounded-md text-slate-900 hover:opacity-90">
                ENVIAR MENSAGEM
              </button>
            </div>
          </div>
        </div>
        <div class="absolute bg-black/90 top-0 bottom-40 left-0 right-0 -z-10"></div>
      </Section>

      <Section>
        {/* title */}
        <h1 class="mx-auto max-w-screen-2xl px-10 flex mt-32">
          <p class="text-7xl poppins-semibold mb-16">
            lojas locais<span class="text-amber-400">.</span>
          </p>
        </h1>

        {/* section dos dois cards */}
        <div class="grid grid-cols-2 gap-20 mb-40">
          <div id="card 1">
            <div class="w-full">
              <img
                class="object-cover w-full h-full"
                src="src/assets/locale/rio_de_janeiro.svg"
                alt="rio de janeiro image"
              />
            </div>

            <div class="flex flex-col pl-10 gap-8 mt-10">
              <div class="flex gap-5">
                <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
                <h1 class="poppins-semibold text-3xl">Rio de Janeiro</h1>
              </div>
              <div class="flex w-full gap-10">
                <div class="border-l-2 border-gray-300 pl-5 ml-6 flex flex-col gap-2">
                  <p class="roboto-medium text-base text-gray-600">
                    Rua Ali Perto, 25
                  </p>
                  <p class="roboto-medium text-base text-gray-600">
                    Rio de Janeiro, RJ
                  </p>
                </div>

                <div class="border-l-2 border-gray-300 pl-5 ml-6 flex flex-col gap-2">
                  <p class="roboto-medium text-base text-gray-600">
                    rio@bikcraft.com
                  </p>
                  <p class="roboto-medium text-base text-gray-600">
                    21 9999-9999
                  </p>
                </div>
              </div>

              <div class="flex gap-3">
                <img src="src/assets/icons/clock_icon.svg" alt="relogio icon" />
                <p class="poppins-semibold text-sm">08-18h de seg à dom</p>
              </div>
            </div>
          </div>

          <div id="card 2">
            <div class="w-full">
              <img
                class="object-cover w-full h-full"
                src="src/assets/locale/sao_paulo.svg"
                alt="sao paulo image"
              />
            </div>

            <div class="flex flex-col pl-10 gap-8 mt-10">
              <div class="flex gap-5">
                <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
                <h1 class="poppins-semibold text-3xl">São Paulo</h1>
              </div>
              <div class="flex w-full gap-10">
                <div class="border-l-2 border-gray-300 pl-5 ml-6 flex flex-col gap-2">
                  <p class="roboto-medium text-base text-gray-600">
                    Rua Ali Perto, 25
                  </p>
                  <p class="roboto-medium text-base text-gray-600">
                    São Paulo, RJ
                  </p>
                </div>

                <div class="border-l-2 border-gray-300 pl-5 ml-6 flex flex-col gap-2">
                  <p class="roboto-medium text-base text-gray-600">
                    sp@bikcraft.com
                  </p>
                  <p class="roboto-medium text-base text-gray-600">
                    11 9999-9999
                  </p>
                </div>
              </div>

              <div class="flex gap-3">
                <img src="src/assets/icons/clock_icon.svg" alt="relogio icon" />
                <p class="poppins-semibold text-sm">08-18h de seg à dom</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
