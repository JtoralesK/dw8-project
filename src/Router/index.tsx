import React from "react"
import { Routes, Route } from "react-router-dom";
import {Layout} from"../Components/layout"
import { SearchResults } from "../Pages/searchResults";
function AppRoutes(){
    return ( 
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/search/:query" element={<SearchResults />}/>
         </Route>
        </Routes>
      )
}
export {AppRoutes}