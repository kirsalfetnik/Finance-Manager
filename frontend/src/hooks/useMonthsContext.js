import { MonthsContext } from '../context/MonthContext'
import { useContext } from 'react'

export const useMonthsContext = () => {
    const context = useContext(MonthsContext)

    if (!context) {
        throw Error('useMonthsContext must be used inside an MonthsContextProvider')
    }

    return context
}