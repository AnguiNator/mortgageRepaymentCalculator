import { createContext, useRef, useState } from 'react';

const Context = createContext();

function Provider({ children }) {
    const [form, setForm] = useState({ amount: "", term: "", rate: "", mortgageType: "" })
    const [isSent, setIsSent] = useState(false);
    const [results, setResults] = useState({})
    const formRef = useRef(null)

    const getMortgageDetails = () => {
        const monthlyInterestRate = form.rate / (100 * 12)
        const numberOfPayments = form.term * 12
        const monthlyPayment = (form.amount * (monthlyInterestRate * ((1 + monthlyInterestRate) ** numberOfPayments)) / (((1 + monthlyInterestRate) ** numberOfPayments) - 1))
        const totalToPay = (monthlyPayment * numberOfPayments)

        const monthlyInterest = form.amount * monthlyInterestRate
        const totalInterest = monthlyInterest * numberOfPayments

        const formatMonthlyPayment = monthlyPayment.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        const formatTotalToPay = totalToPay.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        const formatMonthlyInterest = monthlyInterest.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        const formatTotalInterest = totalInterest.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        return { formatMonthlyPayment, formatTotalToPay, formatMonthlyInterest, formatTotalInterest }
    }




    const handleOnKeyDown = (e) => {
        if (e.key === 'e' || e.key === '-') {
            e.preventDefault()
        }
    }

    const handleChange = (e) => {
        if (e.target.type === "number") {
            if (e.target.value > 0 || e.target.value === "") {
                setForm({ ...form, [e.target.name]: e.target.value })
            }
        } else {
            setForm({ ...form, [e.target.name]: e.target.value })
        }
    }

    const handlePaste = (e) => {
        if (/[^0-9.]/g.test(e.clipboardData.getData('text'))) {
            e.preventDefault()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
        const totals = getMortgageDetails()
        setResults(totals)
    }

    const handleClearAll = () => {
        setForm({ amount: "", term: "", rate: "", mortgageType: "" })
        setIsSent(false);
        formRef.current.reset();
    }
    return (
        <Context.Provider value={{
            form,
            formRef,
            isSent,
            results,
            handlePaste,
            handleOnKeyDown,
            handleChange,
            handleSubmit,
            handleClearAll
        }}>
            {children}
        </Context.Provider>)
}

export { Context, Provider }