import React ,{Suspense} from "react"
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {AppRoutes} from"./Router/route"
import {RecoilRoot} from"recoil"
import {Header} from"./Components/Header/header"
import {Footer} from "./Components/footer/footer"

ReactDOM.render(
  <Suspense fallback={null}>
  <RecoilRoot>
  <BrowserRouter>
  <Header></Header>
     <AppRoutes/>
    <Footer></Footer>
    </BrowserRouter>
  </RecoilRoot>
  </Suspense>,
    document.getElementById("root")
  );
