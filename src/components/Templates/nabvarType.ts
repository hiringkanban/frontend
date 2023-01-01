type menuT = {
    value: string | number | React.ReactNode,
    href: string,
    icon?: React.ReactNode
}[];

export interface navbarProps {
    leftMenu?: menuT,
    rightMenu?: menuT,
    logo?: React.ReactNode
}