import React, { useEffect } from "react";
import {
  makeStyles,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  CardMedia,
  ButtonGroup,
  Button,
  Divider,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../actions";
import { connect } from "react-redux";
import Grow from "@material-ui/core/Grow";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 900,
    padding: 0,
    backgroundColor: theme.palette.background.paper,
  },
  dstyle: {
    objectFit: "contain",
    width: 80,
  },
}));

const Cart = ({
  items,
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  numberCart,
}) => {
  const classes = useStyles();
  useEffect(() => {}, []);

  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });

  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }
  console.log("ListCart", ListCart);
  return (
    <div className="row">
      <div className="custome__class">
        <List className={classes.root}>
          {ListCart.map((item, key) => {
            return (
              <div key={key}>
                <ListItem>
                  <div className="custome__cart">
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={item.image}
                      title="Contemplative Reptile"
                      className={classes.dstyle}
                    />
                    <div className="cart__name__price">
                      <ListItemText
                        primary={item.name}
                        secondary={"₹" + item.price}
                      />
                    </div>
                    <div>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button onClick={() => DecreaseQuantity(key)}>
                          <RemoveSharpIcon />
                        </Button>
                        <Button>{item.quantity}</Button>
                        <Button onClick={() => IncreaseQuantity(key)}>
                          <AddIcon />
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div>
                      <ListItemText
                        primary="Total"
                        secondary={"₹" + TotalPrice(item.price, item.quantity)}
                      />
                    </div>

                    <div>
                      <IconButton
                        onClick={() => DeleteCart(key)}
                        edge="end"
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>

        <div>
          <Card className="total__section">
            <Typography variant="h6">Total Carts</Typography>

            <div className="item__lenth">
              <ListItemText primary="Total items" />
              <ListItemSecondaryAction className="total_item_content">
                <ListItemText primary={numberCart} />
              </ListItemSecondaryAction>
            </div>

            <Divider light />
            <div>
              <Typography className="amount_texes" variant="h6">
                The total amount of (temporary)
              </Typography>
              <ListItemSecondaryAction className="total_amount_content">
                <ListItemText
                  primary={"₹" + Number(TotalCart).toLocaleString("en-US")}
                />
              </ListItemSecondaryAction>
            </div>

            <Button fullWidth variant="contained" color="secondary">
              Go To Checkout
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state._todoProduct,
    numberCart: state._todoProduct.numberCart,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Cart);
