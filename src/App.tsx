import { Route, Router } from "@solidjs/router";
import Layout from "components/layout";
import { lazy } from "solid-js";

const home = lazy(() => import('pages/Home'));
const bikes = lazy(() => import('pages/Bikes'));
const insurance = lazy(() => import('pages/Insurance'));
const contact = lazy(() => import('pages/Contact'));
const internal_bike = lazy(() => import('pages/Internal_bikes'));
const budget = lazy(() => import('pages/Budget'));
const terms = lazy(() => import('pages/ConditionsAndTerms') )

export default function App() {
  
  return (
    <Router root={Layout}>
        <Route path="/" component={home} />
        <Route path="/bikes" component={bikes} />
        <Route path="/insurance" component={insurance} />
        <Route path="/contact" component={contact} />
        <Route path="/internal_bikes" component={internal_bike} />
        <Route path="/budget" component={budget} />
        <Route path="/terms" component={terms} />
    </Router>
  );
}
