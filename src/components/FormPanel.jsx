import { useContext } from "react"
import { Context } from "./Provider"
import { Clear } from "./Clear";
import { FieldNumber } from "./FieldNumber";
import { RadioSelection } from "./RadioSelection";
import { Button } from "./Button";

export function FormPanel() {
    const { formRef, handleSubmit, form } = useContext(Context);
    return (
        <>
            <section className='bg-white md:rounded-t-3xl lg:w-126 lg:rounded-l-3xl lg:rounded-tr-none'>

                <form action="" ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-6 px-8 py-6 md:p-10 md:gap-10'>
                    <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center'>
                        <h1 className='text-preset2 text-slate-900 '>Mortgage Calculator</h1>
                        <Clear />
                    </div>

                    <div className='flex flex-col gap-6'>
                        <FieldNumber textLabel="Mortgage Amount" symbol="£" id="amount" name="amount" value={form.amount} row="suffix" />
                        <div className='flex flex-col gap-6 md:flex-row md:gap-6'>
                            <FieldNumber textLabel="Mortgage Term" symbol="years" id="term" name="term" value={form.term} row="prefix" />
                            <FieldNumber textLabel="Interest Rate" symbol="%" id="rate" name="rate" value={form.rate} row="prefix" />
                        </div>


                        <div className='flex flex-col gap-3 group'>
                            <h2 className='text-preset4 text-slate-700'>Mortgage Type</h2>
                            <RadioSelection selection="Repayment" id="repayment" name="mortgageType" checked={form.mortgageType === "repayment"} />
                            <RadioSelection selection="Interest Only" id="only" name="mortgageType" checked={form.mortgageType === "only"} />
                            <span className='hidden group-has-user-invalid:block text-preset5 text-red'>This field is required</span>
                        </div>
                    </div>

                    <Button />
                </form>
            </section>
        </>
    )
}