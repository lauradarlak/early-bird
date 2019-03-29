
export const FETCH_CATEGORIES_BEGIN = "FETCH_CATEGORIES_BEGIN";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export const fetchCategoriesBegin = () => ({
  type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
});

export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: { error }
});

// ** Async Actions **

export function fetchCategories() {
  return dispatch => {
    dispatch(fetchCategoriesBegin());
    return fetch('http://localhost:3001/api/categories')
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCategoriesSuccess(json));
      })
      .catch(error => dispatch(fetchCategoriesFailure(error)));
  };
}
