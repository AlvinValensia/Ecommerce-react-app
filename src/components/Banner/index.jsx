import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./banner-img.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h1">
              Welcome to <br />Winata Mart
            </Typography>
            <Button className="shopping-button" href="#products">
              Shopping
            </Button>
          </Grid>
          <Grid className="brand" item sm={6}>
            <img src={logo} alt="Raisin" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;