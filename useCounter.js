import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const sumar = ( value = 1 ) => {
        setCounter((current) => current + value)
    }

    const restar = () => {
        if (counter == 0) return;

        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter, sumar, restar, reset
    }

}