import BikeDetailCard from "components/cards/BikeDetailCard";
import Section from "components/layout/Section";

export default function Bikes() {
  return (
    <>
      <Section>
        <div class="py-10">
          <p class="roboto-medium text-2xl leading-8 text-white opacity-70 mb-3">
            TECNOLOGIA AVANÇADA
          </p>
          <p class="text-7xl poppins-semibold text-white">
            nossas bicicletas<span class="text-amber-400">.</span>
          </p>
        </div>
        <div class="absolute bg-black/90 top-0 bottom-0 left-0 right-0 -z-10"></div>
      </Section>

      <section class="flex flex-col gap-10 my-20">
        <Section>
          <BikeDetailCard
            imagePath="src/assets/bikes/bikes-page/nimbus_stark.svg"
            alt="Nimbus Stark image"
            description="A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equip ada com os melhores acessórios, o que garante maior velocidade."
            price={4999}
            title="Nimbus Stark"
            isLightMode={true}
          />
        </Section>

        <Section>
          <BikeDetailCard
            imagePath="src/assets/bikes/bikes-page/magic_might.svg"
            alt="magic_might image"
            description="A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equip ada com os melhores acessórios, o que garante maior velocidade."
            price={2499}
            title="Magic Might"
            isLightMode={false}
          />
          <div class="absolute bg-black top-0 bottom-0 left-1/3 right-0 -z-10"></div>
        </Section>

        <Section>
          <BikeDetailCard
            imagePath="src/assets/bikes/bikes-page/nebula_cosmic.svg"
            alt="Nebula Cosmic image"
            description="A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equip ada com os melhores acessórios, o que garante maior velocidade."
            price={3999}
            title="Nebula Cosmic"
            isLightMode={true}
          />
        </Section>
      </section>
    </>
  );
}
