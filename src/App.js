import Navbar, { SearchContext } from "./components/NavBar";
import { useState, useReducer, createContext } from "react";
import PageRoute from "./components/DataTable/PageRoute";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme, CssBaseline, makeStyles } from "@material-ui/core";
import { useListPostsQuery } from "./components/data";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "./components/Footer";

export const ThemeContext = createContext();
export const PageContext = createContext();

const initialState = {
  darkMode: localStorage.getItem("DarkMode") === "Light" ? true : false,
};

const themeReducer = (state, action) => {
  window.localStorage.setItem("DarkMode", !state.darkMode ? "Light" : "Dark");
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
  },
  loadingText: { paddingLeft: 20 },
}));

function App() {
  const classes = useStyles();

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

  const darkTheme = createTheme({
    palette: {
      type: state.darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {!isLoading && (
          <div
            style={{
              position: "relative",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SearchContext.Provider value={setSearch}>
              <Navbar search={search} changePage={setPage} />
            </SearchContext.Provider>
            <PageContext.Provider value={{ page, setPage }}>
              <PageRoute
                onChangeRowsPerPage={setRowsPerPage}
                rowsPerPage={rowsPerPage}
                coins={search === "" ? coins : allCoins}
                search={search}
              />
            </PageContext.Provider>
            <Footer />
          </div>
        )}
        {isLoading && (
          <div className={classes.loading}>
            <CircularProgress disableShrink />
            <p className={classes.loadingText}>Loading...</p>
          </div>
        )}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
