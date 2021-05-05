import { Route, Switch } from "react-router";
import Cart from "../pages/cart";

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                Home
            </Route>
            <Route path='/carrinho/:value'>
                <Cart/>
            </Route>
        </Switch>
    )
}
