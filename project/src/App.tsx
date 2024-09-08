import { Route, Router } from "@solidjs/router";
import Layout from "components/layout";
import { lazy } from "solid-js";

const Home = lazy(() => import('pages/Home.tsx'))
const Bikes = lazy(() => import('pages/Bikes.tsx'))
const Insurance = lazy(() => import('pages/Insurance.tsx'))
const Contact = lazy(() => import('pages/Contact.tsx'))
const Internal_bike = lazy(() => import('pages/Internal_bikes.tsx'))

export default function App() {
  return (
    <Router root={Layout}>
        <Route path="" component={Home} />
        <Route path="Bikes" component={Bikes} />
        <Route path="Insurance" component={Insurance} />
        <Route path="Contact" component={Contact} />
        <Route path="Internal_bikes" component={Internal_bike} />
    </Router>
  );
}
