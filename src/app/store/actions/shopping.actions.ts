import { ShoppingItem } from '../models/shopping-item.model';
import { Action } from '@ngrx/store';

export enum ShoppingActionsType {
    ADD_ITEM = "[SHOPPING] Add item",
    DELETE_ITEM = "[SHOPPING] dekete item",

}
export class AddItemAction implements Action {
    readonly type = ShoppingActionsType.ADD_ITEM;
    constructor(public payload: ShoppingItem) { }
}
export class DeleteItemAction implements Action {
    readonly type = ShoppingActionsType.DELETE_ITEM;
    constructor(public payload: ShoppingItem) { }
}
export type ShoppingAction = AddItemAction | DeleteItemAction;