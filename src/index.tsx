import React ,{Suspense} from "react"
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {AppRoutes} from"./Router/route"
import {RecoilRoot} from"recoil"
ReactDOM.render(
  <Suspense fallback={null}>
  <RecoilRoot>
  <BrowserRouter>
     <AppRoutes/>
    </BrowserRouter>
  </RecoilRoot>
  </Suspense>,
    document.getElementById("root")
  );
