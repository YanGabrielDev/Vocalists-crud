import { ReactNode } from "react"
import { Title } from "../Title"
interface LayoutInterface{
    title: string,
    children: ReactNode
}
export const Layout = ({children, title = ''}:LayoutInterface) =>{
    return(
        <div className={`
        flex flex-col w-2/3 bg-white text-black rounded-md
        `}>
        <Title>{title}</Title>
        <div className="p-6">
            {children}
        </div>
        </div>
    )
}