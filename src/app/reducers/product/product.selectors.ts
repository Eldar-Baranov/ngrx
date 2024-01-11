import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, productNode } from "./product.reducer";

export const selectProductFeature = createFeatureSelector<ProductState>(productNode);
export const selectProduct = createSelector(
  selectProductFeature,
  (state: ProductState): string[] => state.productArr
);
