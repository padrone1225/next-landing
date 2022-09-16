import { ReactNode } from "react"

export type ContainerProps = {
    children: ReactNode,
    className?: string
}

export interface WindowSize {
    width: undefined | number
    height: undefined | number
}

export interface Link {
    text: string
    link?: string
}

export interface NavLink extends Link {
    subLinks?: SubLink[] | null
}

export interface SubLink extends Link {
    secondSubLinks?: Link[] | null
}