import { A } from "@solidjs/router";
import BikePreviewCard from "components/cards/BikePreviewCard";
import InfoCard from "components/cards/InfoCard";

export default function Internal_bikes() {
  return (
    <>
      <section class="py-16 w-full bg-black/90">
        <div class="mx-auto max-w-[1400px]">
          <div>
            <p class="roboto-medium text-4xl leading-8 text-white opacity-70 mb-3">
              R$ 4999
            </p>
            <h1 class="text-7xl poppins-semibold text-white">
              Nimbus Stark<span class="text-amber-400">.</span>
            </h1>
          </div>
        </div>
      </section>

      <section class="w-full flex bg-black/90">
        <div
          id="responsive-container"
          class="mx-auto flex gap-20 max-w-[1400px] mb-36"
        >
          <figure id="three-images-left" class="flex flex-col gap-5 w-1/2">
            <img
              src="src/assets/bikes/internal-bike-page/nimbus_stark.svg"
              alt="Imagem da bicicleta Nimbus Stark"
              class="object-cover w-full h-full"
            />
            <figcaption class="sr-only">
              Imagens de outras bicicletas
            </figcaption>
            <div class="flex gap-5">
              <img
                src="src/assets/bikes/internal-bike-page/nebula_cosmic.svg"
                alt="Imagem da bicicleta Nebula Cosmic"
                class="object-cover w-full h-full"
              />
              <img
                src="src/assets/bikes/internal-bike-page/magic_might.svg"
                alt="Imagem da bicicleta Magic Might"
                class="object-cover w-full h-full"
              />
            </div>
          </figure>

          <article id="itens-right" class="w-1/2">
            <section>
              <p class="roboto-regular text-3xl leading-normal text-gray-400">
                A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe.
                Ela vem equipada com os melhores acessórios, o que garante maior
                velocidade.
              </p>

              <div class="flex items-center gap-x-5 mt-5">
                <A href="/">
                  <button class="bg-amber-400 pr-7 pl-8 py-4 poppins-semibold text-lg rounded-md text-slate-900 hover:opacity-90 flex items-center">
                    MAIS SOBRE
                  </button>
                </A>
                <div class="flex flex-col gap-1">
                  <div class="bg-black py-1 px-3 rounded-lg text-gray-400 flex gap-1 poppins-medium text-xs">
                    <img
                      src="src/assets/icons/delivery_icon.svg"
                      alt="Ícone de entrega"
                    />
                    <p>Entrega em 5 dias</p>
                  </div>
                  <div class="bg-black py-1 px-3 rounded-lg text-gray-400 flex gap-1 poppins-medium text-xs">
                    <img
                      src="src/assets/icons/box_icon.svg"
                      alt="Ícone de caixa"
                    />
                    <p>18 em estoque</p>
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="info-title" class="mt-9">
              <h2
                id="info-title"
                class="poppins-medium text-xs text-gray-300 ml-5 mt-8 mb-2"
              >
                INFORMAÇÕES
              </h2>
              <div class="bg-black p-16 rounded-3xl flex gap-20">
                <div class="flex flex-col gap-8 w-1/2">
                  <InfoCard
                    srcIcon="src/assets/icons/bike_icon.svg"
                    alt="Ícone de bicicleta"
                    title="Motor Elétrico"
                    description="Permite você viajar distâncias inimagináveis com a sua bike."
                  />
                  <InfoCard
                    srcIcon="src/assets/icons/velocity_icon.svg"
                    alt="Ícone de velocidade"
                    title="40 km/h"
                    description="A mais rápida bicicleta elétrica disponível hoje no mercado."
                  />
                </div>
                <div class="flex flex-col gap-8 w-1/2">
                  <InfoCard
                    srcIcon="src/assets/icons/crosshair_icon.svg"
                    alt="Ícone de rastreador"
                    title="Rastreador"
                    description="Rastreador e sistema anti-furto para garantir o seu sossego."
                  />
                  <InfoCard
                    srcIcon="src/assets/icons/waves_icon.svg"
                    alt="Ícone de fibra"
                    title="Fibra de Carbono"
                    description="Maior proteção possível para a sua Bikcraft com fibra de carbono."
                  />
                </div>
              </div>
            </section>

            <h2
              id="info-title"
              class="poppins-medium text-xs text-gray-300 ml-5 mt-8 mb-2"
            >
              FICHA TÉCNICA
            </h2>

            <section class="bg-black p-16 rounded-3xl flex list-none">
              <div class="flex flex-col gap-8 w-1/2 roboto-medium text-base text-gray-50">
                <li>Peso</li>
                <li>Altura</li>
                <li>Largura</li>
                <li>Profundidade</li>
                <li>Marchas</li>
                <li>Roda</li>
              </div>
              <div class="flex flex-col gap-8 w-1/2 roboto-medium text-base text-gray-300 place-items-end">
                <li>9Kg</li>
                <li>60 cm</li>
                <li>120 cm</li>
                <li>10 cm</li>
                <li>16</li>
                <li>29</li>
              </div>
            </section>
          </article>
        </div>
      </section>
      <section class="mt-36 mx-auto max-w-[1400px]">
        <p class="text-7xl poppins-semibold mb-16">
          escolha a sua<span class="text-amber-400">.</span>
        </p>
        <div class="flex justify-center gap-7">
          <BikePreviewCard
            srcThumbnail="src/assets/bikes/bikes-page/nimbus_stark.svg"
            alt="Magic Might bike"
            title="Magic Might"
            price={2499}
          />
          <BikePreviewCard
            srcThumbnail="src/assets/bikes/bikes-page/nebula_cosmic.svg"
            alt="Nebula Cosmic bike"
            title="Nebula Cosmic"
            price={3999}
          />
        </div>
      </section>

      <section class="relative w-full items-center flex mt-32">
        <div class="items-center mx-auto max-w-[1650px] gap-44 justify-center flex-col mt-28 2xl:mt-0 2xl:flex-row 2xl:flex px-10">
          <div class="h-[700px] m-auto w-3/4 2xl:h-[58rem] 2xl:py-0 2xl:w-1/2">
            <img
              src="src/assets/illustrations/man_on_bike.svg"
              alt="man on bike image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="text-white m-auto w-3/4 2xl:w-1/2">
            <p class="poppins-semibold text-7xl leading-[4.5rem]">
                Pedale mais tranquilo com o nosso <span class="text-amber-400">seguro.</span>
            </p>
            <p class="roboto-light opacity-80 mt-8 leading-normal text-2xl tracking-wide ">
                Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite diversos benefícios.
            </p>
            <button class="bg-amber-400 px-8 py-4 mt-5 poppins-semibold text-lg rounded-md text-slate-900 hover:opacity-90 ">
              SELECIONE A SUA
            </button>
          </div>
        </div>

        <div class="absolute bottom-0 w-full h-[50rem] bg-black -z-10"></div>
      </section>
      </>
  );
}
