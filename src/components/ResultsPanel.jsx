import { useContext } from "react"
import { Context } from "./Provider"
import Logo from '../assets/illustration-empty.svg'

export function ResultsPanel() {
    const { form, isSent, results } = useContext(Context)
    return (
        <>
            <section className='bg-slate-900 flex flex-col items-center justify-center px-6 py-8 md:rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-[5rem] md:p-10 md:gap-10 lg:w-126 '>
                <div className={`${!isSent ? "block" : "hidden"} flex flex-col gap-4 items-center `}>
                    <img src={Logo} alt="illustration" />
                    <h2 className='text-preset2 text-white'>Results shown here</h2>
                    <p className='text-center text-preset4 text-slate-300'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
                </div>

                <div className={`${isSent ? "block" : "hidden"} flex flex-col gap-6`}>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-preset2 text-white'>Your results</h2>
                        <p className='text-preset4 text-slate-300'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
                    </div>

                    <div className='flex flex-col gap-4 px-4 py-6 rounded-lg bg-black/25 border-t-4 border-lime text-preset4 text-slate-300 md:p-8 md:gap-8'>
                        <div className={`${form.mortgageType === "repayment" ? "block" : "hidden"} flex flex-col gap-2`}>
                            <p>Your monthly repayments</p>
                            <p className='text-[2.5rem] font-bold text-lime tracking-normal md:text-preset1'>£{results.formatMonthlyPayment}</p>
                        </div>
                        <div className={`${form.mortgageType === "only" ? "block" : "hidden"} flex flex-col gap-2`}>
                            <p>Your monthly interest payments</p>
                            <p className='text-[2.5rem] font-bold text-lime tracking-normal md:text-preset1'>£{results.formatMonthlyInterest}</p>
                        </div>

                        <div className='border-t border-[rgba(154,190,213,0.25)]'></div>

                        <div className={`${form.mortgageType === "repayment" ? "block" : "hidden"} flex flex-col gap-2`}>
                            <p>Total you'll repay over the term</p>
                            <p className='text-preset2 text-white'>£{results.formatTotalToPay}</p>
                        </div>
                        <div className={`${form.mortgageType === "only" ? "block" : "hidden"} flex flex-col gap-2`}>
                            <p>Total interest you'll pay over the term</p>
                            <p className='text-preset2 text-white'>£{results.formatTotalInterest}</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}