import { A } from "@solidjs/router";
import InfoCard from "components/cards/InfoCard";
import PlanPaymentCard from "components/cards/PlanPaymentCard";
import Header from "components/Header";
import Page from "components/Page";

export default function Insurance() {
  return (
    <Page>
      <section class="py-16 w-full bg-black/90">
        <div class="mx-auto max-w-[1400px]">
          <div>
            <p class="roboto-medium text-4xl leading-8 text-white opacity-70 mb-3">
              ESCOLHA O SEGURO
            </p>
            <h1 class="text-7xl poppins-semibold text-white">
              você seguro<span class="text-amber-400">.</span>
            </h1>
          </div>
        </div>
      </section>

      <section class="w-full bg-black/90 pt-20 pb-32">
        <div class="mx-auto max-w-[1450px]">
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

      <section class="w-full bg-black pt-32 pb-32">
        <div class="mx-auto max-w-[1400px]">
          <p class="text-7xl poppins-semibold mb-16 text-white">
            nossas vantagens<span class="text-amber-400">.</span>
          </p>
          <section class="flex gap-32 justify-center">
            <div class="flex flex-col gap-8 w-1/5 justify-between">
              <InfoCard
                srcIcon="src/assets/icons/bike_icon.svg"
                alt="Bike Icon"
                title="Reparo Elétrico"
                description="Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra."
              />
              <InfoCard
                srcIcon="src/assets/icons/crosshair_icon.svg"
                alt="Crosshair Icon"
                title="Recuperação"
                description="Recuperamos Bikcrafts roubadas sem custo adicional para o dono. Se não conseguirmos recuperar, damos uma nova para você."
              />
            </div>
            <div class="flex flex-col gap-8 w-1/5 justify-between">
              <InfoCard
                srcIcon="src/assets/icons/waves_icon.svg"
                alt="Waves Icon"
                title="Reparo de Quadro"
                description="Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar."
              />
              <InfoCard
                srcIcon="src/assets/icons/padlock_icon.svg"
                alt="Padlock Icon"
                title="Segurança"
                description="O nosso seguro garante que todo reparo seja feito com peças genuínas e de alta qualidade. Confie na Bikcraft."
              />
            </div>
            <div class="flex flex-col gap-8 w-1/5 justify-between">
              <InfoCard
                srcIcon="src/assets/icons/plant_icon.svg"
                alt="Plant Icon"
                title="Sustentável"
                description="Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto."
              />
              <InfoCard
                srcIcon="src/assets/icons/velocity_icon.svg"
                alt="Velocity Icon"
                title="Velocidade"
                description="Desfrute da velocidade eficiente que nossas bikes conseguem alcançar, com os motores você consegue chegar até 40Km/h."
              />
            </div>
          </section>
        </div>
      </section>

      <section class="w-full bg-black pt-32 pb-32">
        <div class="mx-auto max-w-[1400px]">
          <p class="text-7xl poppins-semibold mb-16 text-white">
            perguntas frequentes<span class="text-amber-400">.</span>
          </p>
        </div>

        <ul>
          <li class="flex gap-2 poppins-semibold-18">
            <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
            Qual a forma de pagamento vocês aceitam?
            </li>
          <li class="flex gap-2 poppins-semibold-18">
            <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
            Como posso entrar em contato?
            </li>
          <li class="flex gap-2 poppins-semibold-18">
            <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
            Vocês possuem algum desconto?
            </li>
          <li class="flex gap-2 poppins-semibold-18">
            <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
            Qual a garantia que possuo?
            </li>
          <li class="flex gap-2 poppins-semibold-18">
            <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
            Posso parcelar boleto?
            </li>
          <li class="flex gap-2 poppins-semibold-18">
            <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
            Quantas trocas posso fazer ao ano?
            </li>
          <li class="flex gap-2 poppins-semibold-18">
            <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
            Qual Bikcraft devo escolher para o meu tamanhow
            </li>
        </ul>

      </section>
    </Page>
  );
}
