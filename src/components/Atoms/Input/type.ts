import React from "react"

export interface inputProps {
    id?: string,
    name?: string,
    type?: string,
    status?: string,
    placeholder?: string,
    width?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
