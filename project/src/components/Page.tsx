import Header from "./Header";
import Footer from "./Footer";
import { ParentProps } from "solid-js";

export default function Page(props: ParentProps) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
