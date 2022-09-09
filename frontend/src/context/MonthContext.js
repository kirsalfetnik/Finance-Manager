import { createContext, useReducer } from 'react'

export const MonthsContext = createContext()

export const monthsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MONTHS':
            return {
                months: action.payload
            }
        case 'CREATE_MONTH':
            return {
                months: [action.payload, ...state.months]
            }
        case 'DELETE_MONTH':
            return {
                months: state.months.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const MonthsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(monthsReducer, {
        months: null
    })

    return (
        <MonthsContext.Provider value={{...state, dispatch}}>
            { children }
        </MonthsContext.Provider>
    )
}