# React + Vite

![cart image](/src/assets/image.png)

# Explanation

Redux Toolkit:

cartSlice.js defines the cart state and reducers for adding and removing items.
store.js configures the Redux store using configureStore from Redux Toolkit.
Redux Saga:

sagas.js defines the sagas to handle asynchronous actions for adding and removing items.
The store is configured with the saga middleware, and the sagas are run with sagaMiddleware.run.
Components:

Cart.js displays the items in the cart and the total amount, and dispatches actions to remove items.
ProductList.js displays a list of products and dispatches actions to add items to the cart.

```
redux-saga-cart
├── public
├── src
│ ├── components
│ │ ├── Cart.js
│ │ ├── ProductList.js
│ ├── redux
│ │ ├── cartSlice.js
│ │ ├── store.js
│ │ ├── sagas.js
│ ├── App.js
│ ├── index.js
├── package.json
└── README.md

```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
