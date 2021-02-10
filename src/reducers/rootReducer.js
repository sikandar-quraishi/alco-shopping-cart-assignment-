import { combineReducers } from 'redux';
import todoProduct from './index';






 const ShopApp = combineReducers({
    _todoProduct:todoProduct
});


export default ShopApp