import Navbar from "./components/NavBar";
import { useState } from "react";
import { SearchContext, DarkContext } from "./components/NavBar";
import PageRoute from "./components/DataTable/PageRoute";
import { FavoriteContext } from "./components/DataTable/DataTable";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme, Container, CssBaseline } from "@material-ui/core";
import { useListPostsQuery } from "./components/data";

function App() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const { data: posts, isLoading } = useListPostsQuery(page + 1, rowsPerPage);

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
              <Navbar
                search={search}
                favorite={favorite}
                mode={dark}
                changePage={setPage}
              />
      </SearchContext.Provider>
      <FavoriteContext.Provider value={setFavorite}>
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
