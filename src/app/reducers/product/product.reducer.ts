import { state } from "@angular/animations"
import { Action, INITIAL_STATE } from "@ngrx/store"
import { ProductActions, productActionsType } from "./product.actions";

export const productNode = 'product';

export interface ProductState {
  productArr: string[];
}

const initialState: ProductState = {
  productArr: []
};

export const productReducer = (state: ProductState = initialState , action: Action) => {
  switch(action.type){
    case productActionsType.addProduct:
      return{
        ...state,
        productArr: [...state.productArr, (state.productArr.length + 1) + 'Product']
      };
    case productActionsType.clearProduct:
      return{
        ...state,
        productArr: []
      };
    default:
      return state
  }
}
