import { CATEGORIS_ACTION_TYPES } from "./category.types";

import { createAction } from "../../utils/reducer/reducer.utls";

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIS_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(
    CATEGORIS_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIS_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};