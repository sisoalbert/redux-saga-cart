// src/components/ProductList.js

import { useDispatch } from "react-redux";

const products = [
  { id: "p1", name: "Product 1", price: 29.99 },
  { id: "p2", name: "Product 2", price: 39.99 },
  { id: "p3", name: "Product 3", price: 19.99 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button
              onClick={() =>
                dispatch({ type: "cart/addItemAsync", payload: product })
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
