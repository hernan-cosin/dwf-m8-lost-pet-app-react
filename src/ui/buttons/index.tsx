import React, { HTMLInputTypeAttribute } from "react"
import css from "./index.css"

// type p = {
//     children: string
// }

export function Button({children}) {
    return <button className={css["search-form_button"]}>{children}</button>
}