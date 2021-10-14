import { useParams } from "react-router";
import {
  Typography,
  makeStyles,
  Box,
  Card,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";
import { numberWithCommas } from "../helpers";
import CryptoChart from "./CryptoChart";
import CryptoNews from "./CryptoNews";
import { useCoinDataQuery } from "../data";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0px",
    [theme.breakpoints.up("md")]: {
      margin: 30,
    },
  },

  name: {
    fontFamily: "Roboto",
    fontWeight: 600,
    marginLeft: 20,
  },

  top: {
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
  },

  cardContent: {
    width: "calc(100vw - 10vw)",
    [theme.breakpoints.up("md")]: {
      width: "20vw",
    },
  },
}));

const Crypto = (props) => {
  const params = useParams();
  const { data, isLoading } = useCoinDataQuery(params);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        {!isLoading && (
          <div>
            <Box
              component="span"
              sx={{
                fontSize: 12,
                color: "#fff",
                p: 1,
                backgroundColor: "grey",
                borderRadius: 15,
              }}
            >
              Rank #{data.market_cap_rank}
            </Box>
            <div className={classes.top}>
              <img src={data.image.small} alt="Coin Logo"></img>
              <Typography variant="h4" className={classes.name}>
                {data.name}
              </Typography>
            </div>
            <div style={{ marginBottom: 20 }}>
              <Grid container spacing={4}>
                <Grid item md="auto" xs="auto" sm="auto">
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h5">
                        Current Price
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h5">
                        ${numberWithCommas(data.market_data.current_price.usd)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md="auto" xs="auto" sm="auto">
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h5">
                        Market Cap
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h5">
                        ${numberWithCommas(data.market_data.market_cap.usd)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md="auto" xs="auto" sm="auto">
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Volume (24h)
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h5">
                        ${numberWithCommas(data.market_data.total_volume.usd)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>

            <CryptoChart coin={params.coinId} />
            <CryptoNews coin={params.coinId} newsData={props.dataNews} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Crypto;
