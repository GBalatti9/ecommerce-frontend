import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductDetail.css';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
        if( counter === 0 ){
            setCounter(images.length - 1)
        } else {
            setCounter( counter - 1 );
        }
    }

    const reset = () => {
        setCounter( 0 )
    }

    return (
        <>
            <Link to={'/'}> Go Back </Link>
            <h1 className='title-product-detail'>{ title }</h1>
            <div className='product-detail-container'>
                <div className='product-detail-img-container'>
                    <img 
                        src={ images[counter] ? images[counter] : reset() } 
                        alt={title}
                        onClick={ nextImage }/>
                        <div className='next-prev-buttons'>
                            <FontAwesomeIcon icon={faArrowLeft} onClick={ prevImage }/>
                            <FontAwesomeIcon icon={faArrowRight} onClick={ nextImage } />
                        </div>
                </div>
                <div className='info-container-product-detail'>
                    <h4>Description: { description }</h4>
                    <div className='price-container'>
                        <h4>Initial price: <span className='initial-price-detail'>${ price }</span></h4>
                        <h4>Discount: { discountPercentage }%</h4>
                    </div>
                    <h4 className='final-price-detail'>Final price: ${ (price - ((price * discountPercentage) / 100)).toFixed(2) }</h4>
                    <div className='button-container-detail'>
                        <button className='cart-detail'>Add to cart</button>
                        <button className='buy-detail'>Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}
