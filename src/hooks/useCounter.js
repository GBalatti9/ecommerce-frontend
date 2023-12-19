import { useState } from "react";

export const useCounter = () => {

    const [ counter, setCounter ] = useState(0);

    const nextImage = () => {
        setCounter( counter + 1 );
    }

    const prevImage = ( images ) => {
        if( counter === 0 ){
            setCounter(images.length - 1)
        } else {
            setCounter( counter - 1 );
        }
    }

    const reset = () => {
        setCounter( 0 )
    }

    return {
        counter,
        setCounter,
        nextImage,
        prevImage,
        reset
    }
}
