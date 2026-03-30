import { useContext } from "react"
import { Context } from "./Provider"

export function FieldNumber({ textLabel, symbol, id, value, row }) {
    const { handleChange, handleOnKeyDown, handlePaste } = useContext(Context)
    return (
        <>
            <div className="flex flex-col gap-3 group ">
                <label htmlFor={id} className="text-preset4 text-slate-700">{textLabel}</label>
                <div className={`rounded-sm border-2 border-slate-500  hover:border-slate-900  focus-within:border-lime flex  ${row === "prefix" ? "flex-row-reverse" : ""} has-user-invalid:border-red `}>
                    <div className="px-4 py-3 bg-slate-100 text-preset3 text-slate-700 group-focus-within:bg-lime group-has-user-invalid:bg-red group-has-user-invalid:text-white">
                        <p>{symbol}</p>
                    </div>
                    <div className="px-4 ">
                        <input required type="number" name={id} id={id} value={value} onPaste={handlePaste} onKeyDown={handleOnKeyDown} onChange={handleChange} className=" focus:outline-none text-preset3 text-slate-900 size-full " />
                    </div>
                </div>
                <span className="hidden text-preset5 text-red group-has-user-invalid:block">This field is required</span>
            </div>
        </>
    )
}