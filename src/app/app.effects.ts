import { Action } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";
import { ServerRequst } from 'src/app/service/serverRequest';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as YourActions from 'src/app/reducers/product/product.actions'; // Замените на ваши действия
import { ProductAddActions, productActionsType } from "src/app/reducers/product/product.actions";
import { of } from 'rxjs';


@Injectable()
  export class AppEffects{
    constructor(
      private actions$: Actions,
      // private ServerRequst: ServerRequst
    ) {}


      // @Effect()
      // updateAt$(){
      //   return this.actions$.pipe(
      //     ofType(productActionsType.addProduct),
      //     mergeMap(()=>
      //      this.ServerRequst.getData().pipe(
      //       map((data) => ProductAddActions
      //       ), // Замените на ваше действие успешной загрузки
      //       catchError((error) => of(error))
      //      )
      //     )
      //   );
      // }
}



