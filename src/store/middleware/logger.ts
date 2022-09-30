import { Middleware } from "redux";
import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
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
