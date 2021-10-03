import DataTable from "./DataTable";
import { Route, Switch } from "react-router";
import Crypto from "../CryptoPage/Crypto";

const storedFavorites = JSON.parse(localStorage.getItem("Favorites"));

const PageRoute = (props) => {
  return (
    <Switch>
      <Route path="/favorites">
        <DataTable
          coins={props.favorite || storedFavorites}
          search={props.search}
        />
      </Route>
      <Route path="/" exact>
        <DataTable coins={props.coins} search={props.search} />
      </Route>
      <Route path="/coins/:coinId">
        <Crypto />
      </Route>
    </Switch>
  );
};
export default PageRoute;
