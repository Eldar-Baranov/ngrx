import { Action } from "@ngrx/store";

export enum productActionsType{
  addProduct = '[ADD PRODUCT] successful',
 clearProduct = '[CLEAR PRODUCT] successful',
}


export class ProductAddActions implements Action{
  readonly type = productActionsType.addProduct;
}

export class ProductClearActions implements Action{
  readonly type = productActionsType.clearProduct;
}

export type ProductActions = ProductAddActions | ProductClearActions;
