const UserInput = ( {label} ) => {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type="text" name="name" id="name"/>
        </div>
    )
}

export default UserInput 