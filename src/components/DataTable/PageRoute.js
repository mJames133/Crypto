import { useState } from "react";
import DataTable from "./DataTable";
import { Route, Switch } from "react-router";
import Crypto from "../CryptoPage/Crypto";
const storedFavorites = JSON.parse(localStorage.getItem("Favorites"));

const PageRoute = (props) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <Switch>
      <Route path="/Crypto/favorites">
        <DataTable
          coins={favorites || storedFavorites}
          search={props.search}
          favorites={true}
          setFavorites={setFavorites}
          onChangeRowsPerPage={props.onChangeRowsPerPage}
          rowsPerPage={props.rowsPerPage}
        />
      </Route>
      <Route path="/Crypto/" exact>
        <DataTable
          coins={props.coins}
          setFavorites={setFavorites}
          search={props.search}
          favorites={false}
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
