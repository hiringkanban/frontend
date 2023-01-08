import React from "react"

export interface modalProps {
    open: boolean,
    title: string,
    okText?: string,
    width?: string,
    children: React.ReactNode,
    onOk?: () => void,
    onCancel?: () => void
}
