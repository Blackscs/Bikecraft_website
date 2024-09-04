interface Props {
  textContent: string;
}

export default function Question(props: Props) {
  return (
    <>
      <li class="flex gap-2 poppins-semibold-18">
        <img src="src/assets/icons/topic_icon.svg" alt="topic icon" />
        <p >{props.textContent}</p>
      </li>
    </>
  );
}
