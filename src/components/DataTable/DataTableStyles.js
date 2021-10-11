import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tableContainer: {
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
    marginTop: 30,
  },
  name: {
    color: "rgb(23, 25, 36)",
  },
  symbol: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#ccc",
  },

  image: {
    marginRight: 10,
    width: 30,
    height: "auto",
  },

  grid: {
    flexWrap: "nowrap",
    alignItems: "center",
  },

  pagination: {
    display: "flex",
    justifyContent: "center",
  },
  rowStyle: {
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  tablePagination: {
    color: theme.palette.text.primary,
  },
  tablePaginationDisplayedRows: {
    color: theme.palette.text.primary,
  },
  tablePaginationSelectIcon: {
    fillRule: theme.palette.text.primary,
  },
  tablePaginationSelect: {
    color: theme.palette.text.primary,
  },
  tablePaginationActions: {
    color: theme.palette.text.primary,
  },
  tablePaginationInput: {
    "& .MuiTablePagination-selectIcon": {
      fill: theme.palette.text.primary,
    },
    "& .MuiTablePagination-select": {
      "& option": {
        color: "black",
      },
      color: theme.palette.text.primary,
    },
  },
}));

export default useStyles;
