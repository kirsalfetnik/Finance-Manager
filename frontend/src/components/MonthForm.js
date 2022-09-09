import { useState } from 'react';
import { useMonthsContext } from '../hooks/useMonthsContext';

const MonthForm = () => {
    const { dispatch } = useMonthsContext()
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [sum, setSum] = useState('')
    const [details, setDetails] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const month = {name, year, sum, details}

        const response = await fetch('/api/months', {
            method: 'POST',
            body: JSON.stringify(month),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setName('')
            setYear('')
            setSum('')
            setDetails('')
            setError(null)
            setEmptyFields([])
            console.log('New month added', json)
            dispatch({type: 'CREATE_MONTH', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Month</h3>

            <label>Month Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label>Year:</label>
            <input
                type="number"
                onChange={(e) => setYear(e.target.value)}
                value={year}
                className={emptyFields.includes('year') ? 'error' : ''}
            />

            <label>Amount of money spent (in dollars)</label>
            <input
                type="number"
                onChange={(e) => setSum(e.target.value)}
                value={sum}
                className={emptyFields.includes('sum') ? 'error' : ''}
            />

            <label>Details:</label>
            <input
                type="text"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
            />

            <button>Add Month</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default MonthForm