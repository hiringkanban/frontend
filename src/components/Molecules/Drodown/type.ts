import React from "react"

export interface dropdownProps {
    menu: {
        name: string | React.ReactNode,
        icon?: React.ReactNode,
        onClick: () => void,
    }[]
}