import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tableContainer: {
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
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0",
  },
  rowStyle: {
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
    color: theme.palette.text.primary,
  },
  tablePaginationSelect: {
    color: theme.palette.text.primary,
  },
  tablePaginationActions: {
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
