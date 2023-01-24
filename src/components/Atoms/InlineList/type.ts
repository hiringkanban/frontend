import React from "react"

export interface listProps {
    items: {
        value: string | number | React.ReactNode,
        href: string,
        onClick?: () => void
    }[]
}