import Navbar from "./components/NavBar";
import { useState } from "react";
import { SearchContext, DarkContext } from "./components/NavBar";
import PageRoute from "./components/DataTable/PageRoute";
import { FavoriteContext } from "./components/DataTable/DataTable";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme, Container, CssBaseline } from "@material-ui/core";
import { useListPostsQuery } from "./components/data";
export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const { data: coins, isLoading } = useListPostsQuery({
    page: page + 1,
    limit: rowsPerPage,
  });

  const { data: allCoins } = useListPostsQuery({
    page: page + 1,
    limit: 100,
  });
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [dark, setDark] = useState(false);

  const darkTheme = createTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });

  return (
    <DarkContext.Provider value={setDark}>
    <Container fixed>
        {!isLoading && (
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
      <SearchContext.Provider value={setSearch}>
            <Navbar search={search} changePage={setPage} />
      </SearchContext.Provider>
          <PageContext.Provider value={{ page, setPage }}>
              <PageRoute
                onChangeRowsPerPage={setRowsPerPage}
                rowsPerPage={rowsPerPage}
                coins={posts}
                search={search}
                favorite={favorite}
                changePage={setPage}
                page={page}
              />
      </FavoriteContext.Provider>
          </ThemeProvider>
        )}
      {isLoading && (
        <p style={{ textAlign: "center", fontSize: "30px" }}>Loading...</p>
      )}
    </Container>
    </DarkContext.Provider>
  );
}

export default App;
