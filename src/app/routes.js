import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { IceCube } from "../pages/portfolio/IceCube";
import { MixedReality } from "../pages/portfolio/MixedReality";
import { Research } from "../pages/portfolio/research";
import { These } from "../pages/portfolio/these";
import { VirtualReality } from "../pages/portfolio/VirtualReality";
import { Workshop } from "../pages/portfolio/workshop";
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
        <Route path="/IceCube" element={<IceCube />} />
        <Route path="/MixedReality" element={<MixedReality />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/These" element={<These />} />
        <Route path="/VirtualReality" element={<VirtualReality />} />
        <Route path="/Workshop" element={<Workshop />} />
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
