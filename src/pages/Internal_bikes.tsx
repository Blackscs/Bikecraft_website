import { A } from "@solidjs/router";
import Button from "components/Button";
import BikePreviewCard from "components/cards/BikePreviewCard";
import InfoCard from "components/cards/InfoCard";
import Section from "components/layout/Section";

export default function Internal_bikes() {
  return (
    <>
      <Section>
        <div class="pt-20">
          <p class="roboto-medium text-xl leading-8 text-white opacity-70">
            R$ 4999
          </p>
          <h1 class="poppins-semibold text-white text-4xl md:text-6xl">
            Nimbus Stark<span class="text-amber-400">.</span>
          </h1>
        </div>
        <div class="absolute bg-black/90 top-0 bottom-0 left-0 right-0 -z-10"></div>
      </Section>

      <Section>
        <div class="grid lg:grid-cols-2 gap-10 py-10">
          <figure id="three-images-left" class="flex flex-col gap-5">
            <img
              src="src//assets/bikes/internal-bike-page/nimbus_stark.svg"
              alt="Imagem da bicicleta Nimbus Stark"
              class="imgStyle"
            />
            <div class="hidden 2xl:flex gap-10">
              <img
                src="src//assets/bikes/internal-bike-page/nebula_cosmic.svg"
                alt="Imagem da bicicleta Nebula Cosmic"
                class="imgStyle"
              />
              <img
                src="src//assets/bikes/internal-bike-page/magic_might.svg"
                alt="Imagem da bicicleta Magic Might"
                class="imgStyle"
              />
            </div>
          </figure>

          <article id="itens-right">
            <section>
              <p class="roboto-regular leading-normal tracking-wide mb-3 text-sm md:text-xl text-gray-400">
                A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe.
                Ela vem equipada com os melhores acessórios, o que garante maior
                velocidade.
              </p>

              <div class="grid sm:grid-cols-2 sm:gap-0 items-center gap-x-5 mt-5 gap-y-6">
                <A href="/">
                  <Button color="gold">
                    MAIS SOBRE
                  </Button>
                </A>

                <div class="grid gap-1">
                  <div class="cardsSimpleInfo">
                    <img
                      src="src//assets/icons/delivery_icon.svg"
                      alt="Ícone de entrega"
                      class="imgStyle max-w-5"
                    />
                    <p>Entrega em 5 dias</p>
                  </div>
                  <div class="cardsSimpleInfo">
                    <img
                      src="src//assets/icons/box_icon.svg"
                      alt="Ícone de caixa"
                      class="imgStyle max-w-5"
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
              <div class="bg-black p-16 gap-10 grid md:grid-cols-2 rounded-3xl">
                <InfoCard
                  srcIcon="src//assets/icons/bike_icon.svg"
                  alt="Ícone de bicicleta"
                  title="Motor Elétrico"
                  description="Permite você viajar distâncias inimagináveis com a sua bike."
                />
                <InfoCard
                  srcIcon="src//assets/icons/velocity_icon.svg"
                  alt="Ícone de velocidade"
                  title="40 km/h"
                  description="A mais rápida bicicleta elétrica disponível hoje no mercado."
                />
                <InfoCard
                  srcIcon="src//assets/icons/crosshair_icon.svg"
                  alt="Ícone de rastreador"
                  title="Rastreador"
                  description="Rastreador e sistema anti-furto para garantir o seu sossego."
                />
                <InfoCard
                  srcIcon="src//assets/icons/waves_icon.svg"
                  alt="Ícone de fibra"
                  title="Fibra de Carbono"
                  description="Maior proteção possível para a sua Bikcraft com fibra de carbono."
                />
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
        <div class="absolute bg-black/90 top-0 bottom-0 left-0 right-0 -z-10"></div>
      </Section>

      <Section>
        <p class="poppins-semibold mb-12 text-black text-4xl md:text-6xl my-20">
          escolha a sua<span class="text-amber-400">.</span>
        </p>
        <div class="grid justify-center gap-7 mb-32 grid-cols-1 md:grid-cols-2">
          <BikePreviewCard
            srcThumbnail="src//assets/bikes/bikes-page/nimbus_stark.svg"
            alt="Magic Might bike"
            title="Magic Might"
            price={2499}
          />
          <BikePreviewCard
            srcThumbnail="src//assets/bikes/bikes-page/nebula_cosmic.svg"
            alt="Nebula Cosmic bike"
            title="Nebula Cosmic"
            price={3999}
          />
        </div>
      </Section>

      <Section>
        <div class="mt-30 gap-14 grid grid-cols-1 xl:grid-cols-2">
          <div class="h-[300px] md:h-[700px]">
            <img
              src="src//assets/illustrations/man_on_bike.svg"
              alt="man on bike image"
              class="imgStyle"
            />
          </div>
          <div class="text-white m-auto grid gap-7">
            <p class="poppins-semibold text-white text-4xl md:text-6xl">
              Pedale mais tranquilo com o nosso
              <span class="text-amber-400"> seguro.</span>
            </p>
            <p class="roboto-regular leading-normal tracking-wide text-white opacity-70  text-base md:text-xl">
              Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite
              diversos benefícios.
            </p>
           <Button color="gold">
              SELECIONE A SUA
           </Button>
          </div>
        </div>
        <div class="absolute left-0 bottom-0 top-10 right-0 bg-black -z-10"></div>
      </Section>
    </>
  );
}
