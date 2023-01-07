export default interface buttonProps {
    href?: string,
    size?: string,
    variant?: string,
    width?: string,
    noborder?: boolean,
    children: React.ReactNode,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
    onClick?: () => void
}