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
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";

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
}));

const Product = (props) => {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    props.actFetchProductsRequest();
    getData();
  }, [offset]);

  const getData = () => {
    let data = _products;
    console.log("slice Data", data);

    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((item) => (
      <div key={item.id}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="160"
              style={{ objectFit: "contain" }}
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
          <CardActions>
            <Button
              className="add_cart_btm"
              onClick={() => handleaddCart(item)}
              size="small"
              color="secondary"
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </div>
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const handleaddCart = (item) => {
    props.AddCart(item);
  };

  const { _products } = props._products;

  console.log("product Data:", _products);
  if (_products.length > 0) {
    return (
      <Container fixed>
        <br />
        <div className="sub__header">
          <div>
            {/* <InputBase
              placeholder="Search By Name…"
              className="search__input"
              inputProps={{ 'aria-label': 'search' }}
            /> */}
          </div>
          <div>
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
        <br />

        <div className="cart__container">{data}</div>
      </Container>
    );
  }
  return (
    <div className={classes.circle}>
      <CircularProgress size={40} thickness={4} />
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
