import { Component } from '@angular/core';
import { ProductState } from './reducers/product/product.reducer';
import { Store, select } from '@ngrx/store';
import { selectProduct } from './reducers/product/product.selectors';
import { Observable } from 'rxjs';
import { ProductAddActions, ProductClearActions } from './reducers/product/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public productArr$: Observable<string[]> = this.store$.pipe(select(selectProduct));

constructor(private store$: Store<ProductState>){
}
  arrToNGRX: any;
  show(){

  }

  fill(){
this.store$.dispatch(new ProductAddActions());
  }
  clear(){
    this.store$.dispatch(new ProductClearActions());
  }
}
