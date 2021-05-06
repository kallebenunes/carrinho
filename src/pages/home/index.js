import React from 'react'
import { Link } from 'react-router-dom'
import Container from './style'
const Home = () => {
    document.title = 'Home'
    return (
        <Container>
            <Link to='/carrinho/bigger-ten'> Maior que 10 </Link>
            <Link to='/carrinho/less-ten'> Menor que 10 </Link>
        </Container>
    )
}
export default Home