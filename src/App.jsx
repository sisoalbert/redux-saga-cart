// src/App.js
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <h1>Redux Saga Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
