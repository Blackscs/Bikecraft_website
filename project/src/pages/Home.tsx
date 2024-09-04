import { A } from "@solidjs/router";
import BikePreviewCard from "components/cards/BikePreviewCard";
import InfoCard from "components/cards/InfoCard";
import PlanPaymentCard from "components/cards/PlanPaymentCard";
import Page from "components/Page";

export default function Home() {
  return (
    <Page>
      <section class="relative w-full items-center flex">
        <div class="items-center mx-auto max-w-[1650px] gap-44 justify-center flex-col mt-28 2xl:mt-0 2xl:flex-row 2xl:flex px-10">
          <div class="text-white m-auto w-3/4 2xl:w-1/2">
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

          <div class="h-[700px] m-auto w-3/4 py-24 2xl:h-[58rem] 2xl:py-0 2xl:w-1/2 ">
            <img
              src="src/assets/bikes/home-page/bike_initial.svg"
              alt="Bike initial"
              class="object-cover w-full h-full"
            />
          </div>
        </div>

        <div class="absolute bottom-0 right-0 top-0 w-full h-[50rem] bg-black -z-10"></div>
      </section>

      <section class="mt-36 mx-auto max-w-[1650px]">
        <p class="text-7xl poppins-semibold mb-16">
          escolha a sua<span class="text-amber-400">.</span>
        </p>
        <div class="flex justify-center gap-7">
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
      </section>

      <section class="relative my-36 items-center">
        <div class="flex justify-between items-center m-auto max-w-[1650px] gap-44 px-10">
          <div class="gap-12 w-1/2">
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
          <div class="h-[600px] 2xl:h-[82rem] m-auto w-1/2">
            <img
              src="src/assets/illustrations/toolkit.svg"
              alt="toolkit image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div class="absolute inset-0 m-auto w-full h-[60rem] bg-black -z-10"></div>
      </section>

      <section class="mt-36 w-full">
        <div class="mx-auto max-w-[1650px]">
          <p class="text-7xl poppins-semibold mb-24">
            nossos parceiros<span class="text-amber-400">.</span>
          </p>

          <ul class="grid gap-[2px] grid-cols-2 lg:grid-cols-4 bg-slate-500/20">
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
              <img
                src="src/assets/logos/partners/handel.svg"
                alt="handel icon"
              />
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
        </div>
      </section>

      <section class="mt-36 w-full bg-amber-400">
        <div class="mx-auto max-w-[1650px] flex">
          <div class="w-1/2">
            <img
              src="src/assets/illustrations/woman_on_bike.svg"
              alt="woman on bike image"
            />
          </div>
          <div class="flex flex-col gap-2 w-1/2 mt-auto p-10">
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
      </section>

      <section class="w-full bg-black/90 pt-32 pb-32">
        <div class="mx-auto max-w-[1650px]">
          <p class="text-7xl poppins-semibold mb-16 text-white">
            escolha a sua<span class="text-amber-400">.</span>
          </p>
          <div class="flex gap-32 justify-center items-center">
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
        </div>
      </section>
    </Page>
  );
}
