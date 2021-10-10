import { useState, useReducer, createContext } from "react";
import PageRoute from "./components/DataTable/PageRoute";
import { FavoriteContext } from "./components/DataTable/DataTable";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme, CssBaseline, makeStyles } from "@material-ui/core";
import { useListPostsQuery } from "./components/data";
export const ThemeContext = createContext();
export const PageContext = createContext();

const initialState = {
  darkMode: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};
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

  const [state, dispatch] = useReducer(themeReducer, initialState);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [dark, setDark] = useState(false);

  const darkTheme = createTheme({
    palette: {
      type: state.darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
