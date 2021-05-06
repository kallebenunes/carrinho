import styled from 'styled-components';
const Container  = styled.div`
    width: 100%; 
    max-width: 720px;
    margin: 4rem auto;
    background: #fff;
    border-radius: 25px;
    box-shadow: 0px 0px 20px #bfbfbf;
    

    .title {
        text-align: center; 
        padding: .8rem 0;    
    }

    .products {
        border-top: 2px solid lightgray;
        border-bottom: 2px solid lightgray;

        .product-card {
            display: flex;
            margin: 2rem 0;
        }

        .product-image{
            display: flex; 
            justify-content: center;
            width: 150px;
            height: 150px;
            border: 1px solid lightgray;
            margin: 0 1.5rem;
        }

        .biggest-price {
            color: gray;   
            font-size: .9rem;
        }
        .lowest-price {
            font-weight: 600;
        }
        .product-name {
            margin: .5rem 0;
        }


    }

    .total {
        display: flex; 
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1.5rem;
        border-bottom: 2px solid lightgray;

        .free-shipping {
            background: #c7ffa6;
            color: #217a00;
            font-weight: 500;
            font-size: 1rem;
            border-radius: 25px;
            padding: .5rem;
            flex-basis: 100%;
            text-align: center;
            margin: 1.5rem 2rem 0rem 2rem;
        }
    }

    .finish {
        button {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #3b74f2;
            border: 0;
            color: #fff;
            padding: 1rem 5rem;
            font-weight: 600;
            font-size: 1.5rem;
            width: 100%;
            border-radius: 10px;
            
        }
       padding: 2rem;
    }

    .loading {
        display: flex; 
        justify-content: center;
        align-items: center;
        height: 250px;

        span {
            position: relative;
            width: 30px;
            height: 30px;
            border-radius: 50%;  
            background: black;
            margin: .2rem;
            animation: zigZag .4s infinite alternate;

             
          
        }
        
        .loading-1 {
            
            animation-delay: .10s;
        }
        .loading-2 {
           
            animation-delay: .15s;
        }
        .loading-3 {
            
            animation-delay: .20s;
        }

        @keyframes zigZag {
            from {
                top: -25px;
            }
            to {
                top: 25px;  
            }
        }
    }

`
export default Container