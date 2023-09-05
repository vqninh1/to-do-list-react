import { memo } from "react"

const Component1 = ( {startInterval} ) => {
    console.log('render 1')
    return (
        <>
            <button onClick={startInterval} className="btn btn-primary me-3">Start</button>
        </>
    )
}

export default memo(Component1)