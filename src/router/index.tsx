import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import  {Home} from "pages/home"
import { Layout } from "pages/layout";
import { SearchResult } from "pages/search-result";
import { Item } from "pages/item";


export function MyRouter() {
    return <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="query/:busqueda" element={<SearchResult />}></Route>
                <Route path="item/:id" element={<Item />}></Route>
            </Route>
    </Routes>
}