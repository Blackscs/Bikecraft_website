import { ParentProps } from "solid-js";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: ParentProps) {
    return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
};