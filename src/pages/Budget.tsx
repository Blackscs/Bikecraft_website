import Section from "components/layout/Section"
import ToggleButtonPlans from "components/toggle-buttons/ToggleButtonPlans";
import ToggleButtonBike from "components/toggle-buttons/ToggleButtonBike";
import BudgetForm from "components/forms/BudgetForm";

export default function Budget() {
 return (
    <>
      <Section>
        <div class="py-10">
          <p class="roboto-medium text-2xl leading-8 text-white opacity-70 mb-3">
            COTAÇÕES NO SEU EMAIL
          </p>
          <p class="text-7xl poppins-semibold text-white">
            solicite um orçamento<span class="text-amber-400">.</span>
          </p>
        </div>
        <div class="absolute bg-black/90 top-0 bottom-0 left-0 right-0 -z-10"></div>
      </Section>

      <Section>
        <div class="grid grid-cols-1 lg:grid-cols-5 max-w-screen-xl mx-auto shadow-md bg-none mb-32">
          <div
            id="first-col"
            class="col-span-2 bg-black flex flex-col gap-5 py-20 px-8 rounded-l-lg xl:p-20"
          >
            <div class="flex gap-2 ">
              <img src="/assets/icons/icon_title.svg" alt="icon title" />
              <p class="poppins-semibold text-xs text-gray-300">
                BIKCRAFT OU SEGURO
              </p>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
            
             <ToggleButtonPlans>
              Bikcraft
             </ToggleButtonPlans>
             <ToggleButtonPlans>
              Seguro
             </ToggleButtonPlans>

            </div>

            <div class="flex gap-2 mb-2">
              <img src="/assets/icons/icon_title.svg" alt="icon title" />
              <p class="poppins-semibold text-xs text-gray-300">
                ESCOLHA A SUA
              </p>
            </div>

            <div class="flex flex-col gap-5">
              <ToggleButtonBike price="4999" srcImage="/assets/bikes/internal-bike-page/nimbus_stark.svg">
                Nimbus Stark
              </ToggleButtonBike>
              <ToggleButtonBike price="2499" srcImage="/assets/bikes/internal-bike-page/magic_might.svg">
                Magic Might
              </ToggleButtonBike>
              <ToggleButtonBike price="4999" srcImage="/assets/bikes/internal-bike-page/nebula_cosmic.svg">
                Nebula Cosmic
              </ToggleButtonBike>
            </div>
          </div>

          <BudgetForm>
          </BudgetForm>

        </div>
        <div class="absolute bg-black/90 top-0 bottom-40 left-0 right-0 -z-10"></div>
      </Section>
    </>
  );
}
