export interface menuProps {
    items: { value: string | number | React.ReactNode, href?: string }[],
    hide?: boolean
}