//productdetail
import { useParams } from "react-router-dom"
import { productsList } from "../../../service/listProduct"

const ProductDetail = () => {
    let { id } = useParams()
    console.log(id)

    id = parseInt(id)
    console.log(id)

    const product = productsList.find(product => product.id === id)

    console.log(product)

    if (!product) {
        return <h1>Không tìm thấy sản phẩm</h1>
    }

    return (
        <div style={{textAlign: "left"}}>
            <h1>Product Detail</h1>
            <p>tên: {product.name}</p>
            <p>giá: {product.price}</p>
            <p>loại: {product.category}</p>
            <p>hạn sử dụng: {product.exp}</p>
            <p>số lượng: {product.quantity}</p>
        </div>
    )
}

export default ProductDetail