interface Props {
  srcThumbnail: string;
  alt: string;
  title: string;
  price: number;
}

export default function BikePreviewCard(props: Props) {
  return (
    <>
      <div class="flex flex-col">
        <img src={props.srcThumbnail} alt={props.alt} class="mb-5" />
        <span class="poppins-semibold text-4xl">
          <span class="text-amber-400">•</span> {props.title}
        </span>
        <span class="roboto-medium text-xl text-slate-800 ml-[1.7rem]">
          R$ {props.price}
        </span>
      </div>
    </>
  );
}
