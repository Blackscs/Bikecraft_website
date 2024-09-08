import Header from "./Header";
import Footer from "./Footer";
import { ParentProps } from "solid-js";

export default function Section(props: ParentProps) {
  return (
    <>
      <section class="relative w-full items-center flex justify-center overflow-hidden py-5">
        <div class={`mx-auto max-w-screen-2xl w-full px-10`}>
            {props.children}
        </div>
      </section>
    </>
  );
}
