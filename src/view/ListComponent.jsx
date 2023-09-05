
const ListComponent = ( {about} ) => {
    return (
        <ul>
            {
                about.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
    )
}

export default ListComponent