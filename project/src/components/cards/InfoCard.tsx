interface Props {
  description: string;
  title: string;
  srcIcon: string;
  alt: string;
}

export default function InfoCard(props: Props) {
  return (
    <>
        <div class="flex flex-col gap-2">
            <img src={props.srcIcon} alt={props.alt} class="w-6 h-6"/>
            <p class="poppins-medium text-lg text-white">{props.title}</p>
            <p class="roboto-regular leading-7 text-white opacity-70 text-sm">{props.description} </p>
        </div>
    </>
  );
}
