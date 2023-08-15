import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
//   store.getState();
  next(action);
};

export default logger;
