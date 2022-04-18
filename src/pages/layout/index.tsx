import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SearchForm } from "components/search-form";
import  css from "./layout.css"

export function Layout() {    
    let navigate = useNavigate()
   
   function handleSearch(query) {        
      navigate("/query/" + query)
   }

    return <div className={css["layout-container"]}>
        <header className={css["header-container"]}><SearchForm onSearch={handleSearch}></SearchForm></header>
        <Outlet/>
    </div> 
}