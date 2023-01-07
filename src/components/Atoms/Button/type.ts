export default interface buttonProps {
    href?: string,
    size?: string,
    variant?: string,
    width?: string,
    noborder?: boolean,
    children: React.ReactNode,
    onClick?: () => void
}