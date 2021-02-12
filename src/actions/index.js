import callApi from "../api";
import {
  ADD_CART,
  UPDATE_CART,
  DELETE_CART,
  GET_NUMBER_CART,
  GET_ALL_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./types";

// export const actFetchProductsRequest = () => {
//     return (dispatch) => {
//         return callApi('/products', 'GET', null).then(res => {

//             dispatch(GetAllProduct(res.data));
//         });
//     }
// }

export const actFetchProductsRequest = () => {
  return async (dispatch) => {
    const res = await callApi.get("/products");
    dispatch(GetAllProduct(res.data));
  };
};

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload) {
  return {
    type: GET_ALL_PRODUCT,
    payload,
  };
}

/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: GET_NUMBER_CART,
  };
}

export function AddCart(payload) {
  return {
    type: ADD_CART,
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: UPDATE_CART,
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: DELETE_CART,
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: INCREASE_QUANTITY,
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
}
