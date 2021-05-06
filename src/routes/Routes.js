import { Route, Switch } from "react-router";
import Cart from "../pages/cart";
import Home from "../pages/home"
import NotFound from "../pages/NotFound";


export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/carrinho/:value'>
                <Cart/>
            </Route>
            <Route path='*'>
                <NotFound/>
            </Route>
        </Switch>
    )
}
