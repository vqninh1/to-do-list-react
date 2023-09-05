import { Route, Routes, Link } from "react-router-dom"
import styled from 'styled-components'
import ProductDetail from "./ProductDetail"
import { productsList } from "../../../service/listProduct"

const List = styled.ul`
    width: 40%;
    list-style: none;
    padding-left: 0;
`

const Item = styled.li`
    padding: 4px 40px;
    border: 1px solid #111;
    background-color: #ccc;
    text-decoration: none;
`


const ProductPage = () => {

    return (
        <>
            <h1>Product Page</h1>
            <List>
                {
                    productsList.map((product) => {
                        return (
                            <Item key={product.id}>
                                <Link 
                                    to={`/productdetail/${product.id}`} 
                                    style={{ textDecoration: 'none', color: 'black'}} 
                                    >{product.id}. {product.name}
                                </Link>
                            </Item>
                        )
                    })
                }
            </List>

            <Routes>
                {
                    productsList.map(product => 
                        <Route 
                            key={product.id} 
                            path={`/productdetail/${product.id}`} 
                            element={<ProductDetail />} 
                        />
                    )
                }
            </Routes>
        </>
    )
}

export default ProductPage