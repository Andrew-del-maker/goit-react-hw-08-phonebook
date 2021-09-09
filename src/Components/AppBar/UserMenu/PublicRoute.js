import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { authSelectors } from "../../../redux/auth";


export default function PublicRoute({ children, restricted = false, redirectTo='/contacts', ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedistrict = isLoggedIn && restricted;

    return <Route {...routeProps}>
        {shouldRedistrict ? <Redirect to={redirectTo} /> : children}
    </Route>
}