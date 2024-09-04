import { A } from "@solidjs/router";

interface Props {
  imagePath?: string;
  alt?: string;
  title?: string;
  description?: string;
  price?: number;
  isLightMode: boolean;
}

function Details(props: Props) {
  return (
    <>
    <div class="flex flex-col gap-4">
      <div class={`${props.isLightMode ? "text-black opacity-80" : "text-white opacity-80"} flex poppins-medium text-lg opacity-70 gap-2`}>
        <img src="src/assets/icons/bike_icon.svg" alt="Icon bike" />
        <span>Motor Elétrico</span>
      </div>
      <div class={`${props.isLightMode ? "text-black opacity-80" : "text-white opacity-80"} flex poppins-medium text-lg opacity-70 gap-2`}>
        <img src="src/assets/icons/waves_icon.svg" alt="Icon bike" />
        <span>Fibra de Carbono</span>
      </div>
      <div class={`${props.isLightMode ? "text-black opacity-80" : "text-white opacity-80"} flex poppins-medium text-lg opacity-70 gap-2`}>
        <img src="src/assets/icons/velocity_icon.svg" alt="Icon bike" />
        <span>40 Km/h</span>
      </div>
      <div class={`${props.isLightMode ? "text-black opacity-80" : "text-white opacity-80"} flex poppins-medium text-lg opacity-70 gap-2`}>
        <img src="src/assets/icons/crosshair_icon.svg" alt="Icon bike" />
        <span>Rastreador</span>
      </div>
    </div>
    </>
  );
}

export default function BikeDetailCard(props: Props) {
  return (
    <>
      <div class="flex max-w-[1300px] mx-auto gap-10">
        <div class="w-1/2">
          <img src={props.imagePath} alt={props.alt} class="object-cover w-full h-full"/>
        </div>

        <div class="flex flex-col justify-between w-1/2">
            <div>
                <div class="flex justify-between items-center">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="12" height="8" fill="#FFB800"/>
                    </svg>
                    <p class={`${props.isLightMode ? "text-black opacity-80" : "text-white opacity-90"} roboto-medium text-4xl`}>R$ {props.price}</p>
                </div>
                <div class="pr-28">
                    <h1 class={`${props.isLightMode ? "text-black opacity-80" : "text-white opacity-90"} poppins-semibold text-4xl mb-4`}>{props.title}</h1>
                    <p class={`${props.isLightMode ? "text-black opacity-80" : "text-white opacity-90"} roboto-regular text-lg`}>{props.description}</p>
                </div>
            </div>

          <div class="flex w-full h-full justify-between items-center">
            <div>
              <Details isLightMode={props.isLightMode}/>
            </div>

            <div class="mt-auto">
              <A href="/Internal_bikes">
                <button class="bg-amber-400 pr-7 pl-8 py-4 mt-5 poppins-semibold text-lg rounded-md text-slate-900 hover:opacity-90 flex items-center gap-3">
                  MAIS SOBRE
                  <img
                    src="src/assets/icons/arrow_right_icon.svg"
                    alt="Icon arrow"
                  />
                </button>
              </A>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
