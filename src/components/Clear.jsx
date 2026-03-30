import { useContext } from "react"
import { Context } from "./Provider"

export function Clear() {
    const { handleClearAll } = useContext(Context)
    return (
        <button type="button" onClick={handleClearAll} className="w-15.5 h-6 text-preset4  p-0 m-0 underline text-slate-700 hover:text-slate-900">Clear All</button>
    )
}