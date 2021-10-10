import React, { useState, useEffect, useContext } from "react";
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
  Container,
} from "@material-ui/core";
import { TablePagination } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useStyles from "./DataTableStyles";
import { numberWithCommas } from "../helpers";
import { useHistory } from "react-router-dom";
import { PageContext } from "../../App";

const DataTable = (props) => {
  const storedFavorites = JSON.parse(localStorage.getItem("Favorites"));

  const { page, setPage } = useContext(PageContext);
  const [selected, setSelected] = useState(storedFavorites || []);

  const filteredCoins = props.coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(props.search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(props.search.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleChangeRowsPerPage = (event) => {
    props.onChangeRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(filteredCoins);
    } else {
      setSelected([]);
    }
  };
  const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/Crypto/coins/${row.id}`);
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
    props.setFavorites(selected);
  }, [props, selected]);
  useEffect(() => {
    if (props.favorites && selected.length < props.rowsPerPage) setPage(0);
  }, [props, setPage, selected]);

  const classes = useStyles();
  return (
    <TableContainer className={classes.tableContainer}>
      <Container fixed>
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
                <TableRow
                  onClick={() => handleRowClick(row)}
                  key={index}
                  className={classes.rowStyle}
                >
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
                      onClick={(event) => event.stopPropagation()}
                    />
                  </TableCell>
                  <TableCell className={classes.text}>
                    <Typography color="textSecondary" variant="body2">
                      {index + 1 + props.rowsPerPage * page}
                    </Typography>
                  </TableCell>
                  <TableCell>
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
          rowsPerPageOptions={[10, 15, 20, 30]}
        component="div"
        count={100}
        rowsPerPage={+props.rowsPerPage}
          page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
          SelectProps={{
            inputProps: { "aria-label": "rows per page" },
            native: true,
          }}
      />
      </Container>
    </TableContainer>
  );
};
export default DataTable;
