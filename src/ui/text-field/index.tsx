import React, { HTMLInputTypeAttribute } from "react"
import css from "./index.css"

type p = {
    type: HTMLInputTypeAttribute
    label?: ""
}

export function SearchInput(props: p) {

    return <label htmlFor="input">{props.label}
        <input required className={css["search-form_input"]} type={props.type} />
    </label>
}