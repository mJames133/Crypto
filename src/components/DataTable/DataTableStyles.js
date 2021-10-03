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
  pagination: {
    margin: "15px 0",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
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
  rowStyle: {
    "&:hover": {
      backgroundColor: "rgb(248,250,253)",
    },
  },
}));

export default useStyles;
