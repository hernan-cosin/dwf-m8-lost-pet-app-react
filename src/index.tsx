import React, {Suspense} from "react"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {RecoilRoot} from "recoil"


import { MyRouter } from "router";

const container = document.getElementById('app');
const root = createRoot(container);
root.render((        
<RecoilRoot>
    <Suspense fallback={null}>
        <BrowserRouter >
            <MyRouter></MyRouter>
        </BrowserRouter>
    </Suspense>
</RecoilRoot>))