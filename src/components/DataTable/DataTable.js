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
import { TablePagination } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useStyles from "./DataTableStyles";
import { numberWithCommas } from "../helpers";
import { Link } from "react-router-dom";

const DataTable = (props) => {
  const setFavorite = useContext(FavoriteContext);
  const storedFavorites = JSON.parse(localStorage.getItem("Favorites"));

  const [selected, setSelected] = useState(storedFavorites || []);

  if (props.favorites && selected.length < props.rowsPerPage)
    props.pageChanges(0);

  const filteredCoins = props.coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(props.search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(props.search.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    props.pageChanges(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleChangeRowsPerPage = (event) => {
    props.onChangeRowsPerPage(+event.target.value);
    props.pageChanges(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(filteredCoins);
    } else {
      setSelected([]);
    }
  };

  const handleClick = async (value) => {
    if (selected.find((val) => val.id === value.id)) {
      setSelected(selected.filter((val) => val.id !== value.id));
    } else {
      setSelected([...selected, value]);
    }
  };
  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(selected));
  }, [selected]);
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
            <TableCell width={200} className={classes.tableHeaderCell}>
              Name
            </TableCell>
            <TableCell width={200} className={classes.tableHeaderCell}>
              Price
            </TableCell>
            <TableCell width={200} className={classes.tableHeaderCell}>
              Market Cap
            </TableCell>
            <TableCell width={200} className={classes.tableHeaderCell}>
              Volume (24h)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCoins.map((row, index) => {
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
                    {index + 1 + props.rowsPerPage * props.page}
                    </Typography>
                  </TableCell>
                  <TableCell>
                  <Link to={`/Crypto/coins/${row.id}`} className={classes.link}>
                      <Grid container className={classes.grid}>
                        <img
                          className={classes.image}
                          src={row.image}
                          alt="Coin Logo"
                        ></img>

                      <Typography color="textPrimary">{row.name}</Typography>
                        <Typography className={classes.symbol}>
                          {row.symbol.toUpperCase()}
                        </Typography>
                      </Grid>
                    </Link>
                  </TableCell>
                  <TableCell>
                  <Typography>
                      {`$${numberWithCommas(row.current_price.toFixed(2))}`}
                    </Typography>
                  </TableCell>
                  <TableCell>
                  <Typography>
                    {`$${numberWithCommas(row.market_cap)}`}
                    </Typography>
                  </TableCell>
                  <TableCell>
                  <Typography>
                    {`$${numberWithCommas(row.total_volume)}`}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        className={classes.pagination}
        classes={{
          selectLabel: classes.tablePagination,
          displayedRows: classes.tablePaginationDisplayedRows,
          selectIcon: classes.tablePaginationSelectIcon,
          select: classes.tablePaginationSelect,
          actions: classes.tablePaginationActions,
        }}
        rowsPerPageOptions={[10, 15, 20, 25, 30]}
        component="div"
        count={100}
        rowsPerPage={+props.rowsPerPage}
        page={props.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
export const FavoriteContext = createContext();
export default DataTable;
