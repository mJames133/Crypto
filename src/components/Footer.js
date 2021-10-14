import { Toolbar, Typography, CssBaseline, Divider } from "@material-ui/core";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "auto",
      }}
    >
      <CssBaseline />
      <Divider />
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
          }}
        >
          <CopyrightIcon />
          <Typography
            variant="body1"
            color="inherit"
            style={{ paddingLeft: 5 }}
          >
            2021 mJames
          </Typography>
        </div>
        <a
          href="https://github.com/mJames133/Crypto"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 10,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <GitHubIcon />
          <Typography
            variant="body1"
            color="inherit"
            style={{ paddingLeft: 5 }}
          >
            Source
          </Typography>
        </a>
      </Toolbar>
    </div>
  );
};

export default Footer;
