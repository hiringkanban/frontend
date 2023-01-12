import React from "react"

export interface dropdownProps {
    menu: {
        name: string,
        icon?: React.ReactNode,
        onClick: () => void | React.ReactNode
    }[]
}