import React from "react";
import { makeStyles, Fab, Badge, Tooltip  } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: "fixed",
    zIndex: 1,
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const CartTooltip = ({ numberCart }) => {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="View all carts" aria-label="add">
        <Fab color="secondary" className={classes.absolute}>
          <Link to="/carts" style={{ color: "#fff" }}>
            <Badge color="primary" badgeContent={numberCart}>
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </Fab>
      </Tooltip>
    </div>
  );
};

export default CartTooltip;
