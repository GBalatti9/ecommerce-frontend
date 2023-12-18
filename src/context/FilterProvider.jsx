import { FilterContext } from "./FilterContext"


export const FilterProvider = ({ children }) => {
    return (
        <FilterContext.Provider>
            { children }
        </FilterContext.Provider>
    )
}
