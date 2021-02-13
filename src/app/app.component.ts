import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list';
  shoppingItems: Observable <Array<ShoppingItem>>;
  newShoppingItem : ShoppingItem ={ id: '',name :''} ;

  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
    this.shoppingItems=this.store.select(store => store.shopping);
  }
  addItem(){
    this.newShoppingItem.id = uuid()
    if(this.newShoppingItem.name != ''){
      this.store.dispatch(new AddItemAction(this.newShoppingItem));
    }
    this.newShoppingItem = {id:'',name:''};
  }
  deleteItem(item:ShoppingItem){
    return this.store.dispatch(new DeleteItemAction(item));
  }
}
