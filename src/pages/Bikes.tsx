import BikeDetailCard from "components/cards/BikeDetailCard";
import Section from "components/layout/Section";

export default function Bikes() {
  return (
    <>
      <Section>
        <div class="py-10">
          <p class="roboto-medium text-xl md:text-2xl leading-8 text-white opacity-70 mb-3">
            TECNOLOGIA AVANÇADA
          </p>
          <p class="text-4xl md:text-6xl poppins-semibold text-white">
            nossas bicicletas<span class="text-amber-400">.</span>
          </p>
        </div>
        <div class="absolute bg-black/90 top-0 bottom-0 left-0 right-0 -z-10"></div>
      </Section>

      <section class="text-white mx-auto grid gap-7 my-10">
        <Section className="mx-32 sm:px-0">
          <BikeDetailCard
            imagePath="src//assets/bikes/bikes-page/nimbus_stark.svg"
            alt="Nimbus Stark image"
            description="A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade."
            price={4999}
            title="Nimbus Stark"
            isLightMode={true}
          />
        </Section>

        <Section className="mx-32 sm:px-0">
          <BikeDetailCard
            imagePath="src//assets/bikes/bikes-page/magic_might.svg"
            alt="magic_might image"
            description="A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade."
            price={2499}
            title="Magic Might"
            isLightMode={false}
          />
          <div class="absolute bg-black top-0 bottom-0 left-0 right-0 -z-10 lg:left-1/3"></div>
        </Section>

        <Section className="mx-32 sm:px-0">
          <BikeDetailCard
            imagePath="src//assets/bikes/bikes-page/nebula_cosmic.svg"
            alt="Nebula Cosmic image"
            description="A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade."
            price={3999}
            title="Nebula Cosmic"
            isLightMode={true}
          />
        </Section>
      </section>
    </>
  );
}
