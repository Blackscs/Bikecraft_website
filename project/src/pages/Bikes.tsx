import { A } from "@solidjs/router";
import BikeDetailCard from "components/cards/BikeDetailCard";
import Page from "components/Page";

export default function Bikes() {
  return (
    <Page>
      <section class="py-16 pl-14 w-full bg-black/90">
        <div class="mx-auto max-w-[1650px]">
          <div>
            <p class="roboto-medium text-2xl leading-8 text-white opacity-70 mb-3">
              TECNOLOGIA AVANÇADA
            </p>
            <p class="text-7xl poppins-semibold text-white">
              nossas bicicletas<span class="text-amber-400">.</span>
            </p>
          </div>
        </div>
      </section>

      <section class="py-10 mt-28 w-full">
        <div class="mx-auto max-w-[1650px]">
          <BikeDetailCard
            imagePath="src/assets/bikes/bikes-page/nimbus_stark.svg"
            alt="Nimbus Stark image"
            description="A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equip ada com os melhores acessórios, o que garante maior velocidade."
            price={4999}
            title="Nimbus Stark"
            isLightMode={true}
          />
        </div>
      </section>

      <section class="relative py-9 w-full">
        <div class="mx-auto max-w-[1650px]">
          <BikeDetailCard
            imagePath="src/assets/bikes/bikes-page/magic_might.svg"
            alt="magic_might image"
            description="A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equip ada com os melhores acessórios, o que garante maior velocidade."
            price={2499}
            title="Magic Might"
            isLightMode={false}
          />
        </div>
        <div class="absolute w-3/5 bottom-0 right-0 -z-10 bg-black h-full"></div>
      </section>

      <section class="py-9 w-full mb-28">
        <div class="mx-auto max-w-[1650px]">
          <BikeDetailCard
            imagePath="src/assets/bikes/bikes-page/nebula_cosmic.svg"
            alt="Nebula Cosmic image"
            description="A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equip ada com os melhores acessórios, o que garante maior velocidade."
            price={3999}
            title="Nebula Cosmic"
            isLightMode={true}
          />
        </div>
      </section>
    </Page>
  );
}
