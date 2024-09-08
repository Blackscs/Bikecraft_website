import InfoCard from "components/cards/InfoCard";
import PlanPaymentCard from "components/cards/PlanPaymentCard";
import Question from "components/Question";

export default function Insurance() {
  return (
    <>
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

      <section class="w-full pt-32 pb-32">
        <div class="max-w-[1400px] mx-auto">
          <p class="text-7xl poppins-semibold mb-16 text-black">
            perguntas frequentes<span class="text-amber-400">.</span>
          </p>
        </div>

        <div class="max-w-[1400px] mx-auto ">
          <ul class="max-x-[1400px] mx-auto h-[600px] overflow-hidden">
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
        </div>
      </section>
      </>
  );
}
