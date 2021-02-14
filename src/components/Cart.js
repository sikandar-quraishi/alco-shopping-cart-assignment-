import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  IconButton,
  CardMedia,
  ButtonGroup,
  Button,
  Divider,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import TotalCarts from "./totalCarts";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../actions";
import { connect } from "react-redux";

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

const CartsView = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart, numberCart, }) => {
  const classes = useStyles();

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
          <TotalCarts numberCart={numberCart} TotalCart={TotalCart} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state._todoProduct,
    numberCart: state._todoProduct.numberCart,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(CartsView);
