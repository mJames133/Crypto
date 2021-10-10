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

const CryptoNews = (props) => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [coinNews, setCoinNews] = useState([]);
  const [isLoading, setIsLoadingx] = useState(false);

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const API_KEY = "pub_167797c3a120618142b43287493edee39ed1";

  const getData = useCallback(async () => {
    setIsLoadingx(true);
    const res = await fetch(
      `${proxyUrl}https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${props.coin}&language=en`
    );

    const data = await res.json();
    setCoinNews(() => {
      setIsLoadingx(false);
      return data;
    });
  }, [props]);

  useEffect(() => {
    getData();
  }, [getData]);

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
          <Grid
            container
            spacing={4}
            direction={largeScreen ? "row" : "column"}
          >
            {coinNews.results?.slice(0, 25).map((row, index) => {
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
