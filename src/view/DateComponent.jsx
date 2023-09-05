const DateComponent = ( {month, year} ) => {
    const dayInMonth = new Date(year, month, 0).getDate()

    const dates = []
    for (let day = 1; day <= dayInMonth; day++) {
        const date = new Date(year, month - 1, day)
        const options = { weekday: 'short' }
        const dateToString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.toLocaleDateString(undefined, options)}`
        dates.push(dateToString)
    }

    return (
        <ul>
            {
                dates.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    )
}

export default DateComponent





