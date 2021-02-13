import { ShoppingItem } from '../store/models/shopping-item.model';
import {ShoppingAction, ShoppingActionsType} from '../store/actions/shopping.actions';
const initialState: Array<ShoppingItem> = [{
    id : "123456789",
    name : "diet coke"
}];
export function ShoppingReducer (state:Array<ShoppingItem> =initialState,action:ShoppingAction){
    switch(action.type){
        case ShoppingActionsType.ADD_ITEM:
            return [...state,action.payload];
        default:
            return state;
    }
}