import {Router} from "@solidjs/router";
import {routes} from "routes/routes";

export default function App() {
    return (
      <>
       <Router>{routes}</Router>
      </>
    );
  }

