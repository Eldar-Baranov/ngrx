import{
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ProductState, productNode, productReducer } from './product/product.reducer';
import { ProductActions, productActionsType } from "./product/product.actions";

export interface State{
  [productNode]: ProductState
}

export const reducers: ActionReducerMap<State> = {
  [productNode]: productReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
