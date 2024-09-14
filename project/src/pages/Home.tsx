import { A } from "@solidjs/router";
import Button from "components/Button";
import BikePreviewCard from "components/cards/BikePreviewCard";
import InfoCard from "components/cards/InfoCard";
import PlanPaymentCard from "components/cards/PlanPaymentCard";
import Section from "components/layout/Section";

export default function Home() {
  return (
    <>
      <Section>
        <div class="gap-14 items-center m-auto grid justify-center xl:grid-cols-2">
          <div class="text-white mx-auto grid gap-7 my-10">
            <p class="poppins-semibold text-4xl md:text-6xl">
              Bicicletas feitas sob medida<span class="text-amber-400">.</span>
            </p>
            <p class="roboto-light opacity-80 leading-normal max-w-screen-md xl:max-w-lg text-base md:text-xl">
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para o cliente. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <Button color="gold">
              SELECIONE A SUA
            </Button>
          </div>

          <div class="m-auto items-center hidden xl:flex">
            <img
              src="src/assets/bikes/home-page/bike_initial.svg"
              alt="Bike initial"
              class="object-cover w-full h-full"
            />
          </div>

          <div class="absolute bottom-0 xl:bottom-28 right-0 top-0 w-full bg-black -z-10"></div>
        </div>
      </Section>

      <Section>
        <h1 class="mx-auto max-w-screen-2xl flex my-20">
          <p class="poppins-semibold text-4xl md:text-6xl">
            escolha a sua<span class="text-amber-400">.</span>
          </p>
        </h1>

        <div class="grid justify-center gap-7 mb-32 grid-cols-1 md:grid-cols-3">
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

      <Section className="pb-32">
        <div class="mt-30 gap-14 py-20 grid grid-cols-1 xl:grid-cols-2">
          <div class="h-full flex flex-col justify-center xl:px-0">
            <p class="roboto-medium text-xl leading-8 text-white opacity-70 mb-11">
              TECNOLOGIA AVANÇADA
            </p>
            <h1 class="poppins-semibold mb-12 text-white text-4xl md:text-6xl">
              Você escolhe as suas cores e componentes
              <span class="text-yellow-500">.</span>
            </h1>
            <p class="roboto-regular mt-8 leading-normal tracking-wide text-white opacity-70 mb-3 text-base md:text-xl">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão
              exatas para o seu corpo e altura, garantindo maior conforto e
              ergonomia na sua pedalada. Você pode também personalizar
              completamente as suas cores.
            </p>
            <div class="mt-10">
              <A
                href="/"
                class="poppins-semibold text-2xl border-b-4 border-b-amber-400 text-amber-400"
              >
                ESCOLHA UM MODELO
              </A>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-9 mt-20">
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
          <div class="m-auto hidden xl:flex h-[70rem]">
            <img
              src="src/assets/illustrations/toolkit.svg"
              alt="toolkit image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div class="absolute bottom-0 top-0 right-0 xl:top-40 xl:bottom-40 w-full bg-black -z-10"></div>
      </Section>

      <Section>
        <div class="mx-auto max-w-screen-2xl flex my-20">
          <p class="text-4xl md:text-6xl poppins-semibold">
            nossos parceiros<span class="text-amber-400">.</span>
          </p>
        </div>

        <ul class="grid gap-[2px] grid-cols-1 bg-slate-500/20 mb-32 md:grid-cols-2 lg:grid-cols-4">
          <li class="flex justify-center bg-white p-8 lg:p-11">
            <img
              src="src/assets/logos/partners/caravan.svg"
              alt="caravan icon"
            />
          </li>
          <li class="flex justify-center bg-white p-8 lg:p-11">
            <img src="src/assets/logos/partners/dogs.svg" alt="dogs icon" />
          </li>
          <li class="flex justify-center bg-white p-8 lg:p-11">
            <img
              src="src/assets/logos/partners/flexblog.svg"
              alt="flexblog icon"
            />
          </li>
          <li class="flex justify-center bg-white p-8 lg:p-11">
            <img src="src/assets/logos/partners/handel.svg" alt="handel icon" />
          </li>
          <li class="flex justify-center bg-white p-8 lg:p-11">
            <img
              src="src/assets/logos/partners/wildbeast.svg"
              alt="wildbeast icon"
            />
          </li>
          <li class="flex justify-center bg-white p-8 lg:p-11">
            <img
              src="src/assets/logos/partners/lescone.svg"
              alt="lescone icon"
            />
          </li>
          <li class="flex justify-center bg-white p-8 lg:p-11">
            <img src="src/assets/logos/partners/ranek.svg" alt="ranek icon" />
          </li>
          <li class="flex justify-center bg-white p-8 lg:p-11">
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
                class="mr-auto w-5 lg:w-10"
              />
            </div>
            <div class="sm:max-w-xl">
              <p class="merriweather-black-italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-950 leading-normal">
                Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft
                fez foi intensificar o meu amor por esta atividade. Recomendo à
                todos que amo.
              </p>
            </div>
            <div class="max-w-xl">
              <img
                src="src/assets/textual/quotation_mark_end.svg"
                alt="quotation mark end"
                class="ml-auto w-5 lg:w-10"
              />
            </div>
            <div>
              <p class="poppins-semibold text-amber-950/55 text-xl md:text-2xl">
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
        <h1 class="poppins-semibold mb-16 text-white py-28 pb-5 text-4xl md:text-6xl">
          escolha o seu plano<span class="text-amber-400">.</span>
        </h1>

        <div class="gap-14 xl:gap-32 pb-20 grid grid-cols-1 md:grid-cols-2 mx-auto">
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
