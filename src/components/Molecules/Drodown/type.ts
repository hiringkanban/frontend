import React from "react"

export interface dropdownProps {
    name?: string | React.ReactNode,
    menu: {
        name: string | React.ReactNode,
        icon?: React.ReactNode,
        onClick: () => void,
    }[]
}