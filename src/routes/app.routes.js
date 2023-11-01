import { Routes, Route } from "react-router-dom";
import Base from "../pages/Base";
import Home from "../pages/Home";
import Pos_Login from "../pages/Pos_Login";
import Bonus from "../pages/Bonus";
import Termos from "../pages/TermosDeUso";
import Gerenciamento from "../pages/Gerenciamento";
import Tutorial from "../pages/Tutorial";
import Live from "../pages/Live";

import PromoRoleta from "../components/PromoRoleta/index"
import ModalPromo from "../components/ModalPromo/PromotionalModal"
import Aviator from "../pages/Games/Aviator";
import Aviator2 from "../pages/Games/Aviator2x";
import AviatorVelas from "../pages/Games/AviatorVelas";

import Space from "../pages/Games/Space";
import Space2x from "../pages/Games/Space2x";
import SpaceVelas from "../pages/Games/SpaceVelas";

import Mines from "../pages/Games/Mines";
import Roletas from "../pages/Games/Roletas";
import Tiger from "../pages/Games/Tiger";
import FortuneOx from "../pages/Games/Fortune";
import Rabbit from "../pages/Games/Rabbit";
import Mouse from "../pages/Games/Mouse";

import Login from "../pages/Login"

import CrashHome from "../components/CrashHome"
import SlotsHome from "../components/SlotsHome"
import CassinoHome from "../components/CassinoHome"
import Indicar from "../pages/Indicar"
import SportsHome from "../components/SportsHome"
import PrivateRoute from './pro.routes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />

      <Route index path="/bonus" element={<Bonus />} />
 
      <Route index path="/tutorial" element={<Tutorial />} />
      <Route index path="/indicar" element={<Indicar />} />
      <Route index path="/termos" element={<Termos />} />
      <Route index path="/lives" element={<Live />} />
      <Route index path="/gerenciamento" element={<Gerenciamento />} />

      <Route index path="/crashHome" element={<CrashHome />} />
      <Route index path="/cassinoHome" element={<CassinoHome />} />
      <Route index path="/slotsHome" element={<SlotsHome />} />
      <Route index path="/promotional" element={<ModalPromo />} />
      {/* <Route index path="/sportsHome" element={<SportsHome />} /> */}

      {/* JGOSO DE CRASH// */}
      <Route index path="/aviator" element={<Aviator />} />
 

      <Route index path="/space" element={<Space />} />
      <Route index path="/promoroleta" element={<PromoRoleta />} />

      {/* OUTROS JOGOS// */}
      <Route index path="/mines" element={<Mines />} />
      <Route index path="/roletas" element={<Roletas />} />
      <Route index path="/tiger" element={<Tiger />} />
      {/* <Route index path="/mines3" element={<Mines />} /> */}
  


      <Route path="*" element={<Home />} />
    </Routes>
  );
}
