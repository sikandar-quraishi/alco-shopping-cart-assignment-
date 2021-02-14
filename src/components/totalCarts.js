import React from "react";
import {
  Card,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Divider,
  Typography,
} from "@material-ui/core";

const totalCarts = ({ numberCart, TotalCart }) => {
  return (
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
  );
};

export default totalCarts;
