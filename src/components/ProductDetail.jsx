import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductDetail.css';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const ProductDetail = () => {
    const { state } = useLocation();
    const { brand, description, discountPercentage, images, price, rating, stock, title } = state.product;
    console.log({ brand, description, discountPercentage, images, price, rating, stock, title });

    const [ counter, setCounter ] = useState(0);

    const nextImage = () => {
        setCounter( counter + 1 );
    }

    const prevImage = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( 0 )
    }

    return (
        <>
            <div className='product-detail-container'>
                <div className='product-detail-img-container'>
                    <img 
                        src={ images[counter] ? images[counter] : reset() } 
                        alt={title}
                        onClick={ nextImage }/>
                        <div className='next-prev-buttons'>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                </div>
                <div>
                    <h1>{ title }</h1>
                    <h4>{ description }</h4>
                    <h4>Initial price: ${ price }</h4>
                    <h4>Discount: { discountPercentage }%</h4>
                    <h4>Final price: ${ (price - ((price * discountPercentage) / 100)).toFixed(2) }</h4>
                    <div>
                        <button>Buy</button>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
