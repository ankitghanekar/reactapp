import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS,SINGLE_POST, FETCH_PRODUCTS_ERROR} from '../actions/index';

const initialState = {
    pending: false,
    products: [],
    singlepost:{},
    error: null
}

export function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case SINGLE_POST:
        return {...state, singlepost:action.payload}
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;
