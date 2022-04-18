import React from "react";
import css from "./home.css"

export function Home() {
    return <div className={css["home-container"]}>
        <h1 className={css["home-welcome"]}>Hacé tu busqueda desde la caja de busqueda de arriba.</h1>
    </div>
}