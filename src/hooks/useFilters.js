import { useState } from "react"


export const useFilters = () => {

    const [ filters, setFilters ] = useState({
        category: 'all',
        minPrice: 0
    })

    const filteredProducts = ( products ) => (
        products.filter(( product ) => (
            product.price >= filters.minPrice &&
            (
                filters.category === 'all' ||
                product.category === filters.category
            )
        ))
    )

    const updateFilter = ( name, value ) => {
        console.log({ name, value });
        setFilters(( prevState ) => ({
            ...prevState,
            [ name ]: value,
        }))
    }


    return {
        filters,
        filteredProducts,
        updateFilter,
    }
}
