import { useContext } from "react"
import { Context } from "./Provider"

export function RadioSelection({ selection, id, checked, name }) {
    const { handleChange } = useContext(Context)

    return (
        <>
            <label htmlFor={id}>
                <div className={` cursor-pointer w-full h-12 border-2 border-slate-500 px-4 rounded-sm flex gap-4  place-items-center justify-start hover:border-lime has-checked:bg-green200 has-checked:border-lime has-checked:bg-lime/15`}>
                    <div className="w-6 h-6 flex place-items-center justify-center">
                        <input
                            required
                            type="radio"
                            id={id}
                            name={name}
                            value={id}
                            checked={checked}
                            className="
                        appearance-none w-6 h-6 border-2 border-slate-700 rounded-full 
                        checked:border-lime checked:bg-none
                        relative 
                        checked:before:content-[''] checked:before:block checked:before:w-2.5 checked:before:h-2.5 checked:before:bg-lime checked:before:rounded-full checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2
                    "
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor={id} className="text-preset3 text-slate-900">{selection}</label>
                </div>
            </label>
        </>
    )
}