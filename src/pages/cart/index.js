import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import HttpGet from '../../services/httpClient/get'
import formatCurrency from '../../services/formatCurrency'
import capitalizeFirstLetter from '../../services/capitalizaeFirstLetter'
import Container from './style'

const Cart = () => {
    let {value: path} = useParams()
    let [products, setProducts] = useState([])
    let [totalProducts, setTotalProducts] = useState(0)
    let [loading, setLoading] = useState(true)
    async function loadProducts (url){
        let res = await HttpGet(url)
        let {items, value} = res
        setProducts(items)
        setTotalProducts(value)
        console.log(items);
        console.log(formatCurrency(565))
        setLoading(false)
        
    }
    
    useEffect(() => {
        loadProducts(`https://raw.githubusercontent.com/kallebenunes/data/main/${path}.json`)
    }, [])

    return (

        <Container>
        {loading ?
             <h1 className='loading'>
                <span className='loading-1'></span>
                <span className='loading-2'></span>
                <span className='loading-3'></span>
            </h1>
        :  <>
        <section className='title'>
               <h1>Meu carrinho</h1>
           </section>

           <section className='products'>
               <ul>
                   {products.map(product => {
                      return (
                           <li key={product.uniqueID} className='product-card'>
                               <div className='product-image'>
                                   <img src={product.imageUrl} alt={product.name} />
                              </div>
                              <div className='product-description'>
                                  <h3 className='product-name'>{capitalizeFirstLetter(product.name)}</h3>
                                  <p className='biggest-price'>{formatCurrency(product.price)}</p>
                                  <p className='lowest-price'>{formatCurrency(product.sellingPrice)}</p>
                              </div>
                           </li>
                       )
                   })}
               </ul>
           </section>

           <section className='total'>
               <h3>Total</h3>
               <h3>{formatCurrency(totalProducts)}</h3>
               {totalProducts >= 1000 && (
                   <p className='free-shipping'>Parabéns, sua compra tem frete gratis !</p>
               )}
           </section>

           <section className='finish'>
               <button> Finalizar compra</button>
           </section>
           </>}

            
        </Container>
    )
}
export default Cart