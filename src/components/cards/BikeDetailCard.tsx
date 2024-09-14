import { A } from "@solidjs/router";
import Button from "components/Button";

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
      <div class="grid justify-center sm:justify-normal gap-4">
        <div
          class={`${
            props.isLightMode
              ? "text-black opacity-80"
              : "text-white opacity-80"
          } flex poppins-medium text-lg opacity-70 gap-2`}
        >
          <img src="/assets/icons/bike_icon.svg" alt="Icon bike" />
          <span>Motor Elétrico</span>
        </div>
        <div
          class={`${
            props.isLightMode
              ? "text-black opacity-80"
              : "text-white opacity-80"
          } flex poppins-medium text-lg opacity-70 gap-2`}
        >
          <img src="/assets/icons/waves_icon.svg" alt="Icon bike" />
          <span>Fibra de Carbono</span>
        </div>
        <div
          class={`${
            props.isLightMode
              ? "text-black opacity-80"
              : "text-white opacity-80"
          } flex poppins-medium text-lg opacity-70 gap-2`}
        >
          <img src="/assets/icons/velocity_icon.svg" alt="Icon bike" />
          <span>40 Km/h</span>
        </div>
        <div
          class={`${
            props.isLightMode
              ? "text-black opacity-80"
              : "text-white opacity-80"
          } flex poppins-medium text-lg opacity-70 gap-2`}
        >
          <img src="/assets/icons/crosshair_icon.svg" alt="Icon bike" />
          <span>Rastreador</span>
        </div>
      </div>
    </>
  );
}

export default function BikeDetailCard(props: Props) {
  return (
    <>
      <div class="grid max-w-[1300px] mx-auto gap-10 grid-cols-1 lg:grid-cols-2 py-20 px-0 md:px-24 lg:px-0">
        <div>
          <img
            src={props.imagePath}
            alt={props.alt}
            class="object-cover w-full h-full"
          />
        </div>

        <div class="flex flex-col justify-between gap-10">
          <div>
            <div class="flex justify-between items-center">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="12" height="8" fill="#FFB800" />
              </svg>
              <p
                class={`${
                  props.isLightMode
                    ? "text-black opacity-80"
                    : "text-white opacity-90"
                } roboto-medium text-2xl md:text-4xl`}
              >
                R$ {props.price}
              </p>
            </div>
            <div>
              <h1
                class={`${
                  props.isLightMode
                    ? "text-black opacity-80"
                    : "text-white opacity-90"
                } poppins-semibold text-3xl sm:text-4xl mb-4`}
              >
                {props.title}
              </h1>
              <p
                class={`${
                  props.isLightMode
                    ? "text-black opacity-80"
                    : "text-white opacity-90"
                } roboto-regular text-lg`}
              >
                {props.description}
              </p>
            </div>
          </div>

          <div class="text-white mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7 w-full items-end justify-between">
            <div>
              <Details isLightMode={props.isLightMode} />
            </div>

            <A href="/Internal_bikes" class="flex place-content-end">
              <Button color="gold">
                MAIS SOBRE
                <img
                  src="/assets/icons/arrow_right_icon.svg"
                  alt="Icon arrow"
                />
              </Button>
            </A>
          </div>
        </div>
      </div>
    </>
  );
}
