import DataTable from "./DataTable";
import { Route, Switch } from "react-router";
import Crypto from "../CryptoPage/Crypto";

const storedFavorites = JSON.parse(localStorage.getItem("Favorites"));

const PageRoute = (props) => {
  return (
    <Switch>
      <Route path="/Crypto/favorites">
        <DataTable
          coins={props.favorite || storedFavorites}
          search={props.search}
          pageChanges={props.changePage}
          favorites={true}
          page={props.page}
          onChangeRowsPerPage={props.onChangeRowsPerPage}
          rowsPerPage={props.rowsPerPage}
        />
      </Route>
      <Route path="/Crypto/" exact>
        <DataTable
          coins={props.coins}
          search={props.search}
          pageChanges={props.changePage}
          favorites={false}
          page={props.page}
          onChangeRowsPerPage={props.onChangeRowsPerPage}
          rowsPerPage={props.rowsPerPage}
        />
      </Route>
      <Route path="/Crypto/coins/:coinId">
        <Crypto />
      </Route>
    </Switch>
  );
};
export default PageRoute;
