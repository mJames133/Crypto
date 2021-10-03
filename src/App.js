import Navbar from "./components/NavBar";
import { useEffect, useState } from "react";
import { SearchContext } from "./components/NavBar";
import PageRoute from "./components/DataTable/PageRoute";
import { FavoriteContext } from "./components/DataTable/DataTable";
import { Container } from "@material-ui/core";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    );
    const data = await res.json();
    setIsLoading(false);
    setCoins(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fixed>
      <SearchContext.Provider value={setSearch}>
        <Navbar search={search} favorite={favorite} />
      </SearchContext.Provider>
      <FavoriteContext.Provider value={setFavorite}>
        <PageRoute coins={coins} search={search} favorite={favorite} />
      </FavoriteContext.Provider>

      {isLoading && (
        <p style={{ textAlign: "center", fontSize: "30px" }}>Loading...</p>
      )}
    </Container>
  );
}

export default App;
