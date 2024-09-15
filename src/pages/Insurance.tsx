import InfoCard from "components/cards/InfoCard";
import PlanPaymentCard from "components/cards/PlanPaymentCard";
import Section from "components/layout/Section";
import Question from "components/Question";

export default function Insurance() {
  return (
    <>
      <Section>
        <div class="mx-auto my-14">
          <p class="roboto-medium text-xl sm:text-2xl leading-8 text-white opacity-70 mb-3">
            ESCOLHA O SEGURO
          </p>
          <h1 class="text-4xl sm:text-6xl poppins-semibold text-white">
            você seguro<span class="text-amber-400">.</span>
          </h1>
        </div>
        <div class="absolute bg-black/90 top-0 bottom-0 left-0 right-0 -z-10"></div>
      </Section>

      <Section>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-20 items-center place-items-center">
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
        <div class="absolute bg-black/90 top-0 bottom-0 left-0 right-0 -z-10"></div>
      </Section>

      <Section>
          <p class="text-4xl md:text-6xl poppins-semibold mb-16 text-white pt-20">
            nossas vantagens<span class="text-amber-400">.</span>
          </p>
          <section class="grid gap-32 md:grid-cols-2 lg:grid-cols-3 pb-20">
            <InfoCard
              srcIcon="/assets/icons/bike_icon.svg"
              alt="Bike Icon"
              title="Reparo Elétrico"
              description="Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra."
            />
            <InfoCard
              srcIcon="/assets/icons/crosshair_icon.svg"
              alt="Crosshair Icon"
              title="Recuperação"
              description="Recuperamos Bikcrafts roubadas sem custo adicional para o dono. Se não conseguirmos recuperar, damos uma nova para você."
            />

            <InfoCard
              srcIcon="/assets/icons/waves_icon.svg"
              alt="Waves Icon"
              title="Reparo de Quadro"
              description="Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar."
            />
            <InfoCard
              srcIcon="/assets/icons/padlock_icon.svg"
              alt="Padlock Icon"
              title="Segurança"
              description="O nosso seguro garante que todo reparo seja feito com peças genuínas e de alta qualidade. Confie na Bikcraft."
            />

            <InfoCard
              srcIcon="/assets/icons/plant_icon.svg"
              alt="Plant Icon"
              title="Sustentável"
              description="Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto."
            />
            
            <InfoCard
              srcIcon="/assets/icons/velocity_icon.svg"
              alt="Velocity Icon"
              title="Velocidade"
              description="Desfrute da velocidade eficiente que nossas bikes conseguem alcançar, com os motores você consegue chegar até 40Km/h."
            />
          </section>
          <div class="absolute bg-black top-0 bottom-0 left-0 right-0 -z-10"></div>
      </Section>

      <Section>
          <p class="pt-20 text-3xl poppins-semibold mb-16 text-black text-center md:text-left md:text-5xl">
            perguntas frequentes<span class="text-amber-400">.</span>
          </p>

          <ul class="max-x-[1400px] mx-auto h-[650px] overflow-hidden">
            <Question
              questionContent="Qual a forma de pagamento vocês aceitam? Como posso entrar em contato?"
              responseContent="Aceitamos cartões de crédito com as bandeiras: Visa, Mastercard, ELO
                e American Express. Para pagamentos à vista também aceitamos PIX e
                Boleto através do PagSeguro."
              colored={true}
            />
            <Question
              questionContent="Vocês possuem algum desconto?"
              responseContent="Sim, oferecemos descontos especiais durante todo o ano! Fique de olho nas
               nossas promoções sazonais e campanhas de descontos no site. Além disso, você pode se cadastrar 
               na nossa newsletter para receber cupons exclusivos e ficar por dentro das nossas ofertas."
              colored={false}
            />
            <Question
              questionContent="Qual a garantia que possuo?"
              responseContent="Todas as nossas bicicletas vêm com uma garantia de 2 anos para o quadro e 1 ano para
               componentes mecânicos e elétricos, contra defeitos de fabricação. A garantia cobre reparos ou substituição 
               de peças defeituosas, desde que o uso da bicicleta esteja de acordo com as recomendações do fabricante."
              colored={true}
            />
            <Question
              questionContent="Posso parcelar boleto?"
              responseContent="Atualmente, não oferecemos a opção de parcelamento de boletos. No entanto, você pode 
              parcelar sua compra em até 12x sem juros no cartão de crédito. Confira as condições e opções de pagamento
              no fechamento do pedido."
              colored={false}
            />
            <Question
              questionContent="Quantas trocas posso fazer ao ano?"
              responseContent="Oferecemos até 3 trocas por ano, desde que os produtos estejam em perfeito estado, sem 
              sinais de uso e na embalagem original. As trocas são permitidas em casos de tamanho ou cor incorretos ou, 
              ainda, em situações de defeito de fabricação. Consulte nossa política de trocas para mais detalhes."
              colored={true}
            />
            <Question
              questionContent="Qual Bikcraft devo escolher para o meu tamanho?"
              responseContent="Para escolher a Bikcraft ideal para o seu tamanho, recomendamos que você verifique nossa 
              tabela de tamanhos disponível na página de cada produto. Normalmente, a escolha é feita com base na sua altura. 
              Se precisar de ajuda, nossa equipe está pronta para auxiliá-lo! Entre em contato conosco pelo chat ou pelo telefone 
              para mais informações."
              colored={false}
            />
          </ul>
      </Section>
    </>
  );
}
