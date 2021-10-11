import { useCallback, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import PlaceHolderImg from "../../assets/placeholder.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchNewsQuery } from "../data";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
  },
  loadingText: { paddingLeft: 20 },
}));

const CryptoNews = (props) => {
  const classes = useStyles();
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { data, isLoading } = useSearchNewsQuery(props.coin);

  return (
    <div>
      {!isLoading && (
        <div>
          <Typography
            variant="h4"
            style={{ textAlign: "center", margin: "40px 0" }}
          >
            Latest mentions
          </Typography>
          {data.totalResults < 1 ? (
            <Typography variant="h5" style={{ textAlign: "center" }}>
              No news found!
            </Typography>
          ) : (
            ""
          )}
          <Grid
            container
            spacing={4}
            direction={largeScreen ? "row" : "column"}
          >
            {data.results?.slice(0, 25).map((row, index) => {
              return (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardActionArea
                      href={row.link}
                      style={{ height: largeScreen ? 380 : "auto" }}
                    >
                      <CardMedia
                        component="img"
                        height="150"
                        image={PlaceHolderImg}
                        alt="Image placeholder"
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          style={{ paddingBottom: 20, lineHeight: "normal" }}
                        >
                          {row.title.length > 70
                            ? `${row.title.substring(0, 70)}...`
                            : row.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {row.description?.length > 250
                            ? `${row.description.substring(0, 250)}...`
                            : row.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default CryptoNews;
