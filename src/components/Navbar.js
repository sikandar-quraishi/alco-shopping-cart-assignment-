import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  fade,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartTooltip from "./CartTooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                <Link to="/" className="brand__link">
                  Products
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
      <div>
        <CartTooltip numberCart={props.numberCart} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(Header);
