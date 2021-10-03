import React, { useState, useEffect, createContext, useContext } from "react";
import {
  Table,
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Checkbox,
} from "@material-ui/core";
import { Pagination } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useStyles from "./DataTableStyles";
import { numberWithCommas } from "../helpers";
import { Link } from "react-router-dom";

const DataTable = ({ coins, search }) => {
  const setFavorite = useContext(FavoriteContext);

  const storedFavorites = JSON.parse(localStorage.getItem("Favorites"));

  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(storedFavorites || []);
  const rowsPerPage = 20;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(filteredCoins);
    } else {
      setSelected([]);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(selected));
  }, [selected]);

  const handleClick = async (value) => {
    if (selected.find((val) => val.id === value.id)) {
      setSelected(selected.filter((val) => val.id !== value.id));
    } else {
      setSelected([...selected, value]);
    }
  };
  useEffect(() => {
    setFavorite(selected);
  }, [setFavorite, selected]);

  const classes = useStyles();
  return (
    <TableContainer className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                className="selectCheckbox"
                onChange={handleSelectAllClick}
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon />}
              />
            </TableCell>
            <TableCell width={70} className={classes.tableHeaderCell}>
              #
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Price</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Market Cap
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Volume (24h)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCoins
            .slice(
              (page - 1) * rowsPerPage,
              (page - 1) * rowsPerPage + rowsPerPage
            )
            .map((row, index) => {
              return (
                <TableRow key={index} className={classes.rowStyle}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      className="selectCheckbox"
                      value={row}
                      icon={<FavoriteBorderIcon />}
                      checkedIcon={<FavoriteIcon />}
                      checked={
                        selected.find((value) => value.id === row.id)
                          ? true
                          : false
                      }
                      onChange={() => handleClick(row)}
                    />
                  </TableCell>
                  <TableCell className={classes.text}>
                    <Typography color="textSecondary" variant="body2">
                      {page !== 1 && index + 1 + rowsPerPage * (page - 1)}
                      {page === 1 && index + 1}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Link to={`/coins/${row.id}`} className={classes.link}>
                      <Grid container className={classes.grid}>
                        <img
                          className={classes.image}
                          src={row.image}
                          alt="Coin Logo"
                        ></img>

                        <Typography className={classes.name}>
                          {row.name}
                        </Typography>
                        <Typography className={classes.symbol}>
                          {row.symbol.toUpperCase()}
                        </Typography>
                      </Grid>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.name}>
                      {`$${numberWithCommas(row.current_price.toFixed(2))}`}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.name}>
                      {`${numberWithCommas(row.market_cap)}`}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.name}>
                      {`${numberWithCommas(row.total_volume)}`}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Pagination
        className={classes.pagination}
        count={+(filteredCoins.length / rowsPerPage).toFixed(0)}
        page={page}
        onChange={handleChangePage}
        size="large"
        color="primary"
      />
    </TableContainer>
  );
};
export const FavoriteContext = createContext();
export default DataTable;
