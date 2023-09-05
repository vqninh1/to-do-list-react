import { memo } from "react"

const Title = ( {count} ) => {
    return <h1>Dem so lan click {count}</h1>
}

export default memo(Title)