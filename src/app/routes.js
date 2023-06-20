import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { These } from "../pages/these";
import { Prototype } from "../pages/prototype";
import { Research } from "../pages/research";
import { VR } from "../pages/VR";
import { MR } from "../pages/MR";
import { Workshop } from "../pages/workshop";
import { IceCube } from "../pages/IceCube";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/these" element={<These />} />
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/VR" element={<VR />} />
        <Route path="/MR" element={<MR />} />
        <Route path="/research" element={<Research />} />
        <Route path="/IceCube" element={<IceCube />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
