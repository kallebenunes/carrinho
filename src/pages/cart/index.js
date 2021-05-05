import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import HttpGet from '../../services/httpClient/get'
import Container from './style'

const Cart = () => {
    let {value: path} = useParams()
    let [products, setProducts] = useState([])
    let [totalProducts, setTotalProducts] = useState(0)
    
    async function loadProducts (url){
        let res = await HttpGet(url)
        let {items, totalizers} = res
        setProducts(products)
        setTotalProducts(totalizers.total)
        
    }
    
    useEffect(() => {
        loadProducts(`https://raw.githubusercontent.com/kallebenunes/data/main/${path}.json`)
    }, [products])

    return (
        <Container>
            Cart
        </Container>
    )
}
export default Cart