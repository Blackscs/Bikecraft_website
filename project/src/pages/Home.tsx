import { A } from "@solidjs/router";
import BikePreviewCard from "components/cards/BikePreviewCard";
import InfoCard from "components/cards/InfoCard";
import PlanPaymentCard from "components/cards/PlanPaymentCard";
import Section from "components/layout/Section";

export default function Home() {
  return (
    <>
      <Section>
        <div class="mt-30 gap-14 items-center m-auto mb-32 grid grid-cols-1 xl:grid-cols-2">
          <div class="text-white m-auto max-w-4xl">
            <p class="poppins-semibold text-7xl leading-[4.5rem]">
              Bicicletas feitas sob medida<span class="text-amber-400">.</span>
            </p>
            <p class="roboto-light opacity-80 mt-8 leading-normal text-2xl tracking-wide ">
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para o cliente. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <button class="bg-amber-400 px-8 py-4 mt-5 poppins-semibold text-lg rounded-md text-slate-900 hover:opacity-90 ">
              SELECIONE A SUA
            </button>
          </div>

          <div class="m-auto py-24 items-center hidden xl:flex">
            <img
              src="src/assets/bikes/home-page/bike_initial.svg"
              alt="Bike initial"
              class="object-cover w-full h-full"
            />
          </div>

          <div class="absolute bottom-0 right-0 top-0 w-full h-[50rem] bg-black -z-10"></div>
        </div>
      </Section>

      <Section>
        <h1 class="mx-auto max-w-screen-2xl px-10 flex">
          <p class="text-7xl poppins-semibold mb-16">
            escolha a sua<span class="text-amber-400">.</span>
          </p>
        </h1>

        <div class="flex justify-center gap-7 mb-32">
          <BikePreviewCard
            srcThumbnail="src/assets/bikes/home-page/magic_might.svg"
            alt="Magic Might bike"
            title="Magic Might"
            price={2499}
          />
          <BikePreviewCard
            srcThumbnail="src/assets/bikes/home-page/nimbus_stark.svg"
            alt="Nimbus Stark bike"
            title="Nimbus Stark"
            price={4999}
          />
          <BikePreviewCard
            srcThumbnail="src/assets/bikes/home-page/nebula_cosmic.svg"
            alt="Nebula Cosmic bike"
            title="Nebula Cosmic"
            price={3999}
          />
        </div>
      </Section>

      <Section>
        <div class="mt-30 gap-14 items-center justify-center mb-32 grid grid-cols-1 xl:grid-cols-2">
          <div class="gap-12 max-w-4xl">
            <p class="roboto-medium text-2xl leading-8 text-white opacity-70 mb-11">
              TECNOLOGIA AVANÇADA
            </p>
            <h1 class="text-7xl poppins-semibold mb-12 text-white">
              Você escolhe as suas cores e componentes
              <span class="text-yellow-500">.</span>
            </h1>
            <p class="roboto-light mt-8 leading-normal text-2xl tracking-wide text-white opacity-70 mb-3">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão
              exatas para o seu corpo e altura, garantindo maior conforto e
              ergonomia na sua pedalada. Você pode também personalizar
              completamente as suas cores.
            </p>
            <A
              href="/"
              class="poppins-semibold text-2xl border-b-4 border-b-amber-400 text-amber-400"
            >
              ESCOLHA UM MODELO
            </A>
            <div class="flex gap-9 mt-20">
              <InfoCard
                srcIcon="src/assets/icons/bike_icon.svg"
                alt="Icon Bike"
                title="Motor Elétrico"
                description="Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar."
              />
              <InfoCard
                srcIcon="src/assets/icons/crosshair_icon.svg"
                alt="Icon Crosshair"
                title="Rastreador"
                description="Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego."
              />
            </div>
          </div>
          <div class="m-auto hidden xl:flex">
            <img
              src="src/assets/illustrations/toolkit.svg"
              alt="toolkit image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div class="absolute inset-0 m-auto w-full h-[60rem] bg-black -z-10"></div>
      </Section>


      <Section>
      <div class="mx-auto max-w-screen-2xl px-10 flex py-10 pb-5">
        <p class="text-7xl poppins-semibold mb-24">
          nossos parceiros<span class="text-amber-400">.</span>
        </p>
      </div>

        <ul class="grid gap-[2px] grid-cols-2 lg:grid-cols-4 bg-slate-500/20 mb-32">
          <li class="flex justify-center bg-white p-11">
            <img
              src="src/assets/logos/partners/caravan.svg"
              alt="caravan icon"
            />
          </li>
          <li class="flex justify-center bg-white p-11">
            <img src="src/assets/logos/partners/dogs.svg" alt="dogs icon" />
          </li>
          <li class="flex justify-center bg-white p-11">
            <img
              src="src/assets/logos/partners/flexblog.svg"
              alt="flexblog icon"
            />
          </li>
          <li class="flex justify-center bg-white p-11">
            <img src="src/assets/logos/partners/handel.svg" alt="handel icon" />
          </li>
          <li class="flex justify-center bg-white p-11">
            <img
              src="src/assets/logos/partners/wildbeast.svg"
              alt="wildbeast icon"
            />
          </li>
          <li class="flex justify-center bg-white p-11">
            <img
              src="src/assets/logos/partners/lescone.svg"
              alt="lescone icon"
            />
          </li>
          <li class="flex justify-center bg-white p-11">
            <img src="src/assets/logos/partners/ranek.svg" alt="ranek icon" />
          </li>
          <li class="flex justify-center bg-white p-11">
            <img
              src="src/assets/logos/partners/surfbot.svg"
              alt="surfbot icon"
            />
          </li>
        </ul>
      </Section>

      <Section>
        <div class="grid grid-cols-1 xl:grid-cols-2 justify-items-center">
          <img
            src="src/assets/illustrations/woman_on_bike.svg"
            alt="woman on bike image"
            class="w-full h-full object-cover hidden xl:flex"
          />
          <div class="gap-2 mt-auto p-10">
            <div>
              <img
                src="src/assets/textual/quotation_mark_begin.svg"
                alt="quotation mark begin"
                class="mr-auto"
              />
            </div>
            <div class="max-w-xl">
              <p class="merriweather-black-italic text-4xl text-orange-950 leading-normal">
                Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft
                fez foi intensificar o meu amor por esta atividade. Recomendo à
                todos que amo.
              </p>
            </div>
            <div class="max-w-xl">
              <img
                src="src/assets/textual/quotation_mark_end.svg"
                alt="quotation mark end"
                class="ml-auto"
              />
            </div>
            <div>
              <p class="poppins-semibold text-2xl text-amber-950/55">
                Ana Júlia
              </p>
            </div>
          </div>
        </div>

        <div
          id="background"
          class="absolute bg-amber-400 top-0 bottom-0 left-0 right-0 -z-10"
        ></div>
      </Section>

      <Section>
        <h1 class="text-7xl poppins-semibold mb-16 text-white py-10 pb-5">
          escolha o seu plano<span class="text-amber-400">.</span>
        </h1>

        <div class="gap-32 pb-20 grid grid-cols-1 xl:grid-cols-2 mx-auto">
          <PlanPaymentCard
            details={[
              "Duas trocas por ano",
              "Assistência Técnica",
              "Suporte 08h às 18h",
              "Cobertura estadual",
            ]}
            typePlanGold={false}
          />
          <PlanPaymentCard
            details={[
              "Cinco trocas por ano",
              "Assistência especial",
              "Suporte 24h",
              "Desconto em parceiros",
              "Acesso ao Clube Bikcraft",
            ]}
            typePlanGold={true}
          />
        </div>
        <div class="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-90 -z-10"></div>
      </Section>
    </>
  );
}
