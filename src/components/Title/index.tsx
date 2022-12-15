import { Children } from "react"

interface TitleInterface{
    children: string
}
export const Title = ({children}: TitleInterface) => {
    return(
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">{children}</h1>
            <hr className="border-2 border-purple-500"/>
        </div>
    )
}