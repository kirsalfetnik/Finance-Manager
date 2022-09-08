import { useEffect, useState } from 'react';

const Home = () => {
    const [months, setMonths] = useState(null)

    useEffect(() => {
        const fetchMonths = async () => {
            const response = await fetch('/api/months')
            const json = await response.json()

            if (response.ok) {
                setMonths(json)
            }
        }

        fetchMonths()
    }, [])

    return (
        <div className="home">
            <div className="months">
                {months && months.map((month) => (
                    <p key={month._id}>{month.name}</p>
                ))}
            </div>
        </div>
    )
}


export default Home;