import { Toolbar, Typography, CssBaseline, Divider } from "@material-ui/core";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <CssBaseline />
      <Divider />
      <Toolbar
        style={{
          minHeight: 55,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CopyrightIcon />
        <Typography variant="body1" color="inherit" style={{ paddingLeft: 5 }}>
          2021 mJames
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Footer;
