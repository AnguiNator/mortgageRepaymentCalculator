import { FormPanel } from "./FormPanel"
import { ResultsPanel } from "./ResultsPanel"

export function Ui() {

    return (
        <>
            <main className="w-full max-w-[23.438rem] mx-auto flex flex-col md:max-w-3xl md:p-10 lg:max-w-280 lg:flex-row justify-center ">

                <div className="flex flex-col md:rounded-3xl  lg:flex-row  bg-white">
                    <FormPanel />
                    <ResultsPanel />
                </div>
            </main >
        </>
    )
}