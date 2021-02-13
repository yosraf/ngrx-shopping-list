import { ShoppingItem } from '../models/shopping-item.model';
import { Action } from '@ngrx/store';

export enum ShoppingActionsType {
    ADD_ITEM = "[SHOPPING] Add item",

}
export class AddItemAction implements Action {
    readonly type = ShoppingActionsType.ADD_ITEM;
    constructor(public payload: ShoppingItem) { }
}
export type ShoppingAction = AddItemAction;