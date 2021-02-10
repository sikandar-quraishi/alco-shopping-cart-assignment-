import React, { useEffect } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";

const Product = (props) => {
  useEffect(() => {
    props.actFetchProductsRequest();
  }, []);

  const { _products } = props._products;
  if (_products.length > 0) {
    return (
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-md-12">
          <div className="row">
            {_products.map((item, index) => (
              <div
                key={index}
                className="col-md-2"
                style={{ marginBottom: "10px" }}
              >
                <img
                  src={item.image}
                  className="img-resposive"
                  style={{ width: "100%", height: "100px" }}
                />
                <h5>{item.name}</h5>
                <span
                  className="badge badge-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => props.AddCart(item)}
                >
                  Add Cart
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      <h2>Loading...!</h2>
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
