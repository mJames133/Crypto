import { useContext, createContext, useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import Logo from "../assets/logo";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { isMobile } from "react-device-detect";
import { Switch, InputBase, MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@material-ui/core/styles";
import { ThemeContext } from "../App";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
  },

  logo: {
    fill: theme.palette.primary.main,
  },

    display: "flex",
    alignItems: "center",
  },
  searchbar: {
    marginRight: 30,
  },
  button: {
    color: "#fff",
  },
  mobileLogo: {
    maxWidth: 35,
  },
  tools: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    display: "flex",
    alignItems: "center",
  },
}));

  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const dark = useContext(ThemeContext);
  const darkMode = dark.state.darkMode;

  const darkModeSwitchHandler = () => {
    if (darkMode) dark.dispatch({ type: "LIGHTMODE" });
    else dark.dispatch({ type: "DARKMODE" });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const setDark = useContext(DarkContext);
  const setKeyword = useContext(SearchContext);
  const classes = useStyles();

  return (
    <AppBar position="static">
      {!isMobile && (
        <Toolbar>
              <Link to="/Crypto/" onClick={() => props.changePage(0)}>
                <Logo fill="#fff" />
            </Link>
          </Typography>
          <SearchBar
            className={classes.searchbar}
            onChange={(e) => setKeyword(e)}
            onRequestSearch={(e) => setKeyword(e)}
            onCancelSearch={(e) => setKeyword(e || "")}
          />
            <MUISwitch onChange={darkModeSwitchHandler} />
        </Toolbar>
      )}
      {isMobile && (
        <Toolbar className={classes.tools}>
          <Link to="/Crypto/">
            <img src={Logo} alt="Logo" className={classes.mobileLogo} />
          </Link>
          <ul className={classes.list}>
            <Switch onChange={(e) => setDark(e.target.checked)} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <MenuIcon onClick={handleClick} />

            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
          >
            <Link to="/Crypto/" style={{ textDecoration: "none" }}>
              <div
                style={{
                  paddingTop: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SvgIcon component={Logo} fill={theme.palette.text.primary} />
                <Typography
                  color="textSecondary"
                  variant="h5"
                  style={{ textDecoration: "none" }}
            >
                  ryptoTracker
                </Typography>
              </div>
            </Link>
                >
                  Favorites
                </Link>
              <ListItem button style={{ marginTop: "auto" }}>
                <ListItemIcon>
                  <ModeNightIcon />
                </ListItemIcon>
                <Typography
                  color="textSecondary"
                  variant="h5"
                  onClick={darkModeSwitchHandler}
                >
                  {`${darkMode ? "Light Mode" : "Dark Mode"}`}
                </Typography>
              </ListItem>
        </Toolbar>
      )}
    </AppBar>
  );
};

export const SearchContext = createContext();
export const DarkContext = createContext();
export default Navbar;
