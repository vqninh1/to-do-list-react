import { memo } from "react"

const Component2 = ( {stopInterval} ) => {
    console.log('render 2')
    return (
        <>
            <button onClick={stopInterval} className="btn btn-primary">Stop</button>
        </>
    )
}

export default memo(Component2)