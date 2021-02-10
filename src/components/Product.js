import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CircularProgress from '@material-ui/core/CircularProgress';
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 240,
  },
  circle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 250, 
    
  },
}));

const Product = (props) => {
  const classes = useStyles();
  useEffect(() => {
    props.actFetchProductsRequest();
  }, []);

  const { _products } = props._products;

  console.log("product Data:", _products )
  if (_products.length > 0) {
    return (
      <Container fixed>
        <br />
        <div className="cart__container">
          {_products.map((item, index) => (
            <div key={index}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="160"
                    image={item.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      ₹ {item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
          Share
        </Button> */}
                  <Button
                    onClick={() => props.AddCart(item)}
                    size="small"
                    color="primary"
                  >
                    Add Cart
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    );
  }
  return (
    <div className={classes.circle}>
     <CircularProgress size={40}
        thickness={4} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
