// const ClothesComponent = ( {information} ) => {
//     return (
//         <div>
//         {
//             information.map((props, index) => {
//                 return (
//                     <div>
//                         <h1 key={index}>{props.name}</h1>
//                         <p key={index}>{props.size}</p>
//                         <p key={index}>{props.color}</p>
//                     </div>
//                 )
//             })
//         }
//         </div>
//     )
// }

// export default ClothesComponent

const ClothesComponent = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.size}</p>
            <p>{props.color}</p>
        </div>
    )
}

export default ClothesComponent