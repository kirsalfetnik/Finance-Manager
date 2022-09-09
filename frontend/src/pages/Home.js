import { useEffect } from 'react';
import { useMonthsContext } from '../hooks/useMonthsContext';

// components
import MonthDetails from '../components/MonthDetails'
import MonthForm from '../components/MonthForm'

const Home = () => {
    const { months, dispatch } = useMonthsContext() 

    useEffect(() => {
        const fetchMonths = async () => {
            const response = await fetch('/api/months')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_MONTHS', payload: json})
            }
        }

        fetchMonths()
    }, [dispatch])

    return (
        <div className="home">
            <div className="months">
                {months && months.map((month) => (
                    <MonthDetails key={month._id} month={month} />
                ))}
            </div>
            <MonthForm />
        </div>
    )
}


export default Home;