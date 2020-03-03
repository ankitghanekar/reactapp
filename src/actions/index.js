export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const SINGLE_POST = 'SINGLE_POST'

export const fetchProductsPending = () => {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export const fetchProductsSuccess = (payload) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload
    }
}
export const postSingle = (payload) => {
  return {
      type: SINGLE_POST,
      payload
  }
}
export const fetchProductsError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}



 export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res))
            return res;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}
export const fetPostsByID = (id) => {
   return dispatch => {
       // dispatch(fetchProductsPending());
       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res => res.json())
       .then(res => {
           if(res.error) {
               throw(res.error);
           }
           dispatch(postSingle(res))
           return res;
       })
       .catch(error => {
           // dispatch(fetchProductsError(error));
       })
   }
}
