import { Filters } from "./Filters";
import { Title } from "./Title";

export const Header = ({ products }) => {

    return (
        <div>
            <Title />
            <Filters products = { products }/>
        </div>
    )
}
