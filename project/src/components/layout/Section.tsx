import { ParentProps } from "solid-js";

interface SectionProps extends ParentProps {
  className?: string;
}

export default function Section(props: SectionProps) {
  return (
    <>
      <section class={`relative w-full items-center flex justify-center`}>
        <div class={`mx-auto max-w-screen-xl w-full px-10`}>
            {props.children}
        </div>
      </section>
    </>
  );
}
