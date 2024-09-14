interface Props {
  srcThumbnail: string;
  alt: string;
  title: string;
  price: number;
}

export default function BikePreviewCard(props: Props) {
  return (
    <>
      <div class="flex flex-col mx-auto">
        <img src={props.srcThumbnail} alt={props.alt} class="mb-5 w-72 xl:w-full" />
        <span class="poppins-semibold text-xl xl:text-2xl">
          <span class="text-amber-400">•</span> {props.title}
        </span>
        <span class="roboto-medium text-base text-slate-800 ml-[1.1rem]">
          R$ {props.price}
        </span>
      </div>
    </>
  );
}
