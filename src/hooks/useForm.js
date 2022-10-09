import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [stateValues, setStateValues] = useState(initialState)


    const resetState = () => {
        setStateValues(initialState)
    }


    const handleInputChange = ({ target }) => {
        setStateValues({
            ...stateValues,
            [target.name]: target.value

        })




    }
    return [stateValues, handleInputChange, resetState]



}