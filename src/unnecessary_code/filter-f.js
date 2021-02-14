import React, { useState } from "react";
// import ProductList from './ProductList'

const Filter = ({ products }) => {
  //   const [products, setproducts] = useState([
  //     { id: "1", name: "Galaxy F41", catogory: "samsung" },
  //     { id: "2", name: "Galaxy M21", catogory: "samsung" },
  //     { id: "3", name: "Galaxy Y11", catogory: "samsung" },
  //     { id: "4", name: "Oppo A83", catogory: "oppo" },
  //     { id: "5", name: "Oppo A31", catogory: "oppo" },
  //     { id: "6", name: "Oppo C2", catogory: "oppo" },

  //   ]);
  console.log("props list", products);

  const [catogoryFilter, setCatogoryFilter] = useState("");

  const handleChangeFilter = (event) => {
    setCatogoryFilter(event.target.value);
  };

  const getFilteredProducts = () => {
    if (!catogoryFilter) {
      return products;
    }
    return products.filter((singleProduct) => singleProduct.catogory === catogoryFilter);
  };
  console.log("props list", products);
  const productsList = getFilteredProducts();
  return (
    <div>
      {/* <ProductList/> */}
      <select value={catogoryFilter} onChange={handleChangeFilter}>
        <option value="">All</option>
        <option value="samsung">Samsung</option>
        <option value="oppo">oppo</option>
      </select>

      {productsList.map((student) => {
        return (
          <li key={student.id}>
            <p>{student.name}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Filter;
