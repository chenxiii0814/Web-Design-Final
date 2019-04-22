import { Item } from '../item';
import {User} from '../user';

//build the object for an order
export class Order{
    OrderID:string;
    User:User;
    Item:Item;
  
    constructor(orderID, user, item) { 
      this.OrderID = orderID;
      this.User = user;
      this.Item = item;
 }
}