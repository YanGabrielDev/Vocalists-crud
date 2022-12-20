import { text } from "stream/consumers"
interface EntryInterface{
    text: string,
    type: 'text' | 'number',
    value?: string | number,
    onlyReading?: boolean
    handleChange?: (value: any) => void
}
export const Entry = ({text, type, value, onlyReading, handleChange}:EntryInterface) => {
    return(
        <div className="flex flex-col">
            <label className="mb-4">
                {text}
            </label>
            <input className={`border border-blue-500 rounded-1g focus:outline-none bg-gray-50 px-4 py-2 ${onlyReading ? ' ' : 'bg-white'}` }type={type ?? 'text'} value={value} readOnly={onlyReading}
            onChange={event => handleChange?.(event.target.value)}
            />
        </div>
    )
}