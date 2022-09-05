import { CATEGORIS_ACTION_TYPES } from "./category.types";

import { createAction } from "../../utils/reducer/reducer.utls";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

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

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  
  try {
    const categoriesArray = await getCollectionAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed());
  }
};
