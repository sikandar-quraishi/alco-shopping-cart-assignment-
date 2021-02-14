import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  CircularProgress,
  InputBase,
} from "@material-ui/core";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ListSnackbar from "../components/ListSnackbar";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 240,
  },
  circle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 250,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 160,
    height: 40,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cardArea: {
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  cardAction: {
    float: "right",
  },
}));

const Product = (props) => {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [catogoryFilter, setCatogoryFilter] = useState("");
  const [open, setOpen] = React.useState(false);

  const { _products } = props._products;

  const getData = () => {
    setPageCount(Math.ceil(_products.length / perPage));
  };

  useEffect(() => {
    props.actFetchProductsRequest();
  }, []);

  useEffect(() => {
    getData();
  }, [offset, getData]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const handleaddCart = (item) => {
    props.AddCart(item);
    setOpen(true);
  };

  const handleChangeFilter = (event) => {
    setCatogoryFilter(event.target.value);
  };

  const getFilteredProducts = () => {
    if (!catogoryFilter) {
      return _products;
    }
    return _products.filter(
      (singleProduct) => singleProduct.catogory === catogoryFilter
    );
  };

  const _productsList = getFilteredProducts();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const productSlice = _productsList.slice(offset, offset + perPage);
  let productList = productSlice.map((item) => (
    <div key={item.id}>
      <Card className={classes.root}>
        <CardActionArea className={classes.cardArea}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="160"
            style={{ objectFit: "fill" }}
            image={item.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ₹ {item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
          <Button
            // variant="outlined"
            // startIcon={<AddIcon />}
            className="add_cart_btm"
            onClick={() => handleaddCart(item)}
            size="small"
            color="secondary"
          >
            Add to Cart
          </Button>
          <ListSnackbar handleClose={handleClose} open={open} />
        </CardActions>
      </Card>
    </div>
  ));

  if (_products.length > 0) {
    return (
      <Container fixed>
        <br />
        <div className="sub__header">
          <div className="sub__item">
            {/* <InputBase
              placeholder="Search By Name…"
              className="search__input"
              inputProps={{ 'aria-label': 'search' }}
            /> */}
            <Filter
              catogoryFilter={catogoryFilter}
              handleChangeFilter={handleChangeFilter}
            />
          </div>
          <div className="sub__item__two">
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </div>
        </div>
        <br />
        <div className="cart__container">{productList}</div>
      </Container>
    );
  }
  return (
    <div className={classes.circle}>
      <CircularProgress color="secondary" size={40} thickness={4} />
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
