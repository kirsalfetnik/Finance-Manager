import { useMonthsContext } from '../hooks/useMonthsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const MonthDetails = ({ month }) => {
    const { dispatch } = useMonthsContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/months/' + month._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_MONTH', payload: json})
        }
    }
    
    return (
        <div className="month-details">
            <h4>{month.name} {month.year}</h4>
            <p><strong>Sum (in dollars): </strong>{month.sum}</p>
            <p><strong>Details: </strong>{month.details}</p>
            <p>{formatDistanceToNow(new Date(month.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default MonthDetails;