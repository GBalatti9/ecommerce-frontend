import { useFilters } from "../hooks/useFilters"
import { FilterContext } from "./FilterContext"


export const FilterProvider = ({ children }) => {

    const { filters, filteredProducts, updateFilter } = useFilters();

    return (
        <FilterContext.Provider value={{
            filters,
            filteredProducts,
            updateFilter
        }}>
            { children }
        </FilterContext.Provider>
    )
}
