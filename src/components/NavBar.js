import React, { useContext, createContext } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { isMobile } from "react-device-detect";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: 150,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
  },
  logoImg: {
    maxWidth: 50,
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

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const setKeyword = useContext(SearchContext);
  const classes = useStyles();

  return (
    <AppBar position="static">
      {!isMobile && (
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link to="/">
              <img src={Logo} alt="Logo" className={classes.logoImg} />
            </Link>
          </Typography>
          <SearchBar
            className={classes.searchbar}
            onChange={(e) => setKeyword(e)}
            onRequestSearch={(e) => setKeyword(e)}
            onCancelSearch={(e) => setKeyword(e || "")}
          />
          <Link to="/favorites" style={{ textDecoration: "none" }}>
            <Button className={classes.button}>Favourites</Button>
          </Link>
        </Toolbar>
      )}
      {isMobile && (
        <Toolbar className={classes.tools}>
          <Link to="/">
            <img src={Logo} alt="Logo" className={classes.mobileLogo} />
          </Link>
          <ul className={classes.list}>
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
              onClose={handleClose}
            >
              <MenuItem>
                <Link
                  to="/favorites"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Favorites
                </Link>
              </MenuItem>
            </Menu>
          </ul>
        </Toolbar>
      )}
    </AppBar>
  );
};

export const SearchContext = createContext();
export default Navbar;
