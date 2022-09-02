import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("\n");
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState", store.getState());
  console.log("\n");
  
  next(action);
  
  console.log("\n");
  console.log("Next State", store.getState());
  console.log("\n");
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
